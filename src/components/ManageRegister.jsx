import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { MdDeleteForever } from "react-icons/md";


const ManageRegister = () => {
    const {user} = useContext(AuthContext)
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey:['users', user?.email],
        queryFn: async() => {
          const {data} = await axios(`${import.meta.env.VITE_API_URL}/all-users/${user?.email}`)
          return data
        }
    })
    console.log(users)
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
           <div>
                <h1 className='text-center mt-5 text-2xl font-semibold'>Manage the Register Participants</h1>
                <div className='mt-5 w-11/12 mx-auto bg-purple-100 rounded-xl'>
                <div className="overflow-x-auto">
                  <table className="table">
                   {/* head */}
                <thead>
                  <tr className='text-black'>
                      <th>Participant Name</th>
                      <th>Camp Name</th>
                      <th>Camp Fee</th>
                      <th>Payment Status</th>
                      <th>Confirmation Status</th>
                      <th>Cancel</th>
                  </tr>
              </thead>
              <tbody>
                {
                     users.map(userData => <tr key={userData._id}>
                        <td>{userData.name}</td>
                        <td>{userData.name}</td>
                        <td>$ 100</td>
                        <td>{userData.status}</td>
                        <td>Complete</td>
                        <td>
                        <button className='text-red-600 btn bg-purple-100 text-xl'><MdDeleteForever /></button>
                        </td>
                     </tr>)   
                }
              </tbody>
            </table>
        </div>
            </div>
            </div>
    );
};

export default ManageRegister;

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import LoadingSpinner from "./LoadingSpinner";
// import { AiOutlineDelete } from "react-icons/ai";
// // import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";


// const ManageRegister = () => {
//     const { user } = useContext(AuthContext)
//     const {data: registers = [], isLoading, refetch} = useQuery({
//         queryKey:['registers', user?.email],
//         queryFn: async() => {
//           const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/register-participant/${user?.email}`)
//           return data
//         }
//     })
//     const handleDelete = async (id) => {
//         try{
//          const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-register/${id}`)
//          console.log(data)
//          toast.success('Successfully cancel the Registration!!')
//          refetch()
//         }catch(err){
//           console.log(err)
//           toast.error(err.response.data)
//         }
//       }
//       const toastForDelete = (id) => {
//         toast(
//           (t) => (
//             <div className='flex gap-3 items-center'>
//               <div><p>Are you <b>Sure?</b> </p></div>
//               <div>
//                 <button className='bg-red-600 text-white px-3 py-1 rounded-md'
//                   onClick={() => {
//                     handleDelete(id);
//                     toast.dismiss(t.id);
//                   }}>Yes</button>
//                 <button className='bg-green-600 ml-3 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancel</button>
//               </div>
//             </div>
//           ),
//         );
//       };
//     if(isLoading) return <LoadingSpinner></LoadingSpinner>
//     return (
//         <div>
//         <h1 className='text-center mt-5 text-2xl font-semibold'>Manage The Register Participants</h1>
//         <div className='mt-5 w-11/12 mx-auto bg-orange-100'>
//         <div className="overflow-x-auto">
//           <table className="table">
//            {/* head */}
//         <thead>
//           <tr className='text-black'>
//               <th>Camp Name</th>
//               <th>Camp Fee</th>
//               <th>Participant Name</th>
//               <th>Payment Status</th>
//               <th>Payment Confirmation</th>
//               <th>Feedback</th>
//               <th>Delete</th>
//           </tr>
//       </thead>
//       <tbody>
//         {
//              registers.map(registerData => <tr key={registerData._id}>
//                 <td>{registerData.CampName}</td>
//                 <td>$ {registerData.fee}</td>
//                 <td>{registerData.participant.name}</td>
//                 <td>{registerData.status}</td>
//                 <td>Complete</td>
//                 <td>
//                 <button className=''>Good</button>
//                 </td>
//                 <td><button onClick={() => toastForDelete(registerData._id)} className='text-2xl btn text-red-600 bg-orange-100'><AiOutlineDelete /></button></td> 
//              </tr>)   
//         }
//       </tbody>
//     </table>
// </div>
//     </div>
//     </div>
//     );
// };

// export default ManageRegister;