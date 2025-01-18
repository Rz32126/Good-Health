import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";
import { AiOutlineDelete } from "react-icons/ai";


const CampRegister = () => {
    const { user } = useContext(AuthContext)
    const {data: registers = [], isLoading, refetch} = useQuery({
        queryKey:['registers', user?.email],
        queryFn: async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/register-participant/${user?.email}`)
          return data
        }
    })
    console.log(registers)
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
        <h1 className='text-center mt-5 text-2xl font-semibold'>Manage Your Register Camps</h1>
        <div className='mt-5 w-11/12 mx-auto bg-orange-100'>
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
                <td>Confirm</td>
                <td>
                <button className=''>Good</button>
                </td>
                <td><button className='text-2xl btn text-red-600 bg-orange-100'><AiOutlineDelete /></button></td> 
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