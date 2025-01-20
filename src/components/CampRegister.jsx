import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";
import { AiOutlineDelete } from "react-icons/ai";
// import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const CampRegister = () => {
    const { user } = useContext(AuthContext)
    const {data: registers = [], isLoading, refetch} = useQuery({
        queryKey:['registers', user?.email],
        queryFn: async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/register-participant/${user?.email}`)
          return data
        }
    })
    const handleDelete = async (id) => {
        try{
         const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-register/${id}`)
         console.log(data)
         toast.success('Successfully cancel the Registration!!')
         refetch()
        }catch(err){
          console.log(err)
          toast.error(err.response.data)
        }
      }
      const toastForDelete = (id) => {
        toast(
          (t) => (
            <div className='flex gap-3 items-center'>
              <div><p>Are you <b>Sure?</b> </p></div>
              <div>
                <button className='bg-red-600 text-white px-3 py-1 rounded-md'
                  onClick={() => {
                    handleDelete(id);
                    toast.dismiss(t.id);
                  }}>Yes</button>
                <button className='bg-green-600 ml-3 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancel</button>
              </div>
            </div>
          ),
        );
      };
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
        <h1 className='text-center mt-5 text-2xl font-semibold'>Manage Your Register Camps</h1>
        <div className='mt-5 w-11/12 mx-auto bg-orange-100 rounded-xl'>
        <div className="overflow-x-auto">
          <table className="table">
           {/* head */}
        <thead>
          <tr className='text-black'>
              <th>Camp Name</th>
              <th>Camp Fee</th>
              <th>Participant Name</th>
              <th>Payment Status</th>
              <th>Payment Confirmation</th>
              <th>Feedback</th>
              <th>Delete</th>
          </tr>
      </thead>
      <tbody>
        {
             registers.map(registerData => <tr key={registerData._id}>
                <td>{registerData.CampName}</td>
                <td>$ {registerData.fee}</td>
                <td>{registerData.participant.name}</td>
                <td>{registerData.status}</td>
                <td><Link to='/dashboard/pay'><button className="btn">Pay</button></Link></td>
                <td>
                <button className=''>Good</button>
                </td>
                <td><button onClick={() => toastForDelete(registerData._id)} className='text-2xl btn text-red-600 bg-orange-100'><AiOutlineDelete /></button></td> 
             </tr>)   
        }
      </tbody>
    </table>
</div>
    </div>
    </div>
    );
};

export default CampRegister;