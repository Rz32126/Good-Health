import { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const {id} = useParams();
  const { data: registers = [] } = useQuery({
    queryKey: ['registers', user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/register-participant/${user?.email}`
      );
      return data;
    },
  });

  console.log(registers,id)
  const fee = registers.find(reg=> reg.campId == id)?.fee || 0

  useEffect(() => {
    if (fee > 0) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
          price: fee * 100, 
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => console.error('Error creating payment intent', error));
    }
  }, [fee]); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      }
    );
    if (confirmError) {
      console.log('confirm error');
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // save payment in db
        const payment = {

          email: user.email,
          price: fee,
          transactionId: paymentIntent.id,
          date: new Date(),
          Id: registers.map(item => item._id),
          campId: registers.map(item => item.campId)
        }

        const res = await axios.post(`${import.meta.env.VITE_API_URL}/payments`, payment)
        console.log('payment save' ,res)
        if(res.data?.paymentResult?.insertedId){
          toast.success('Thank You!! Your Payment Done')
          navigate('/dashboard/payment')
         }else{
          console.log(err)
         }

      }
    }
  };

  return (
    <div className="mt-5 w-10/12 mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          className="bg-lime-400 mt-9 btn"
          disabled={!stripe || fee === 0}
        >
          Pay ${fee}
        </button>
        <p className="text-red-700">{error}</p>
        {transactionId && <p className="text-green-500">Your transaction id: {transactionId}</p>}
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default CheckoutForm;
