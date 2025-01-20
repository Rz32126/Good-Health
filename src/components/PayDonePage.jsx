import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../tables/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const PayDonePage = () => {
    return (
        <div>
            <h1 className="text-2xl mt-5 font-bold text-center">Please Confirm Your Payment</h1>
            <div>
                <Elements stripe={stripePromise}>
                   <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PayDonePage;