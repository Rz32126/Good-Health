import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";


const Payment = () => {
    const {user} = useContext(AuthContext)
    const {data: payments = [], isLoading, refetch} = useQuery({
        queryKey:['payments', user?.email],
        queryFn: async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/payments/${user?.email}`)
          return data
        }
    })
    console.log(payments)
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
        <h1 className='text-center mt-5 text-2xl font-semibold text-green-800'>Your Payment History</h1>
        <p className="text-center font-semibold text-xl">Total payment: {payments.length}</p>
        <div className='mt-5 w-11/12 mx-auto bg-lime-200 rounded-xl'>
        <div className="overflow-x-auto">
          <table className="table">
           {/* head */}
        <thead>
          <tr className='text-black'>
              <th>#</th>
              <th>Email</th>
              <th>Payment Amount</th>
              <th>Date</th>
              <th>Payment Status</th>
              
              
          </tr>
      </thead>
      <tbody>
        {
             payments.map((paymentData, index) => <tr key={paymentData._id}>
                <td>{index + 1}</td>
                <td>{paymentData.email}</td>
                <td>$ {paymentData.price}</td>
                <td>{new Date(paymentData.date).toLocaleDateString()}</td>
                <td className="text-green-600">Completed</td> 
             </tr>)   
        }
      </tbody>
    </table>
</div>
    </div>
        </div>
    );
};

export default Payment;