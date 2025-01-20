import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";


const ManageRegister = () => {
    const {user} = useContext(AuthContext)
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey:['users', user?.email],
        queryFn: async() => {
          const {data} = await axios(`${import.meta.env.VITE_API_URL}/all-users/${user?.email}`)
          return data
        }
    })
    // handle delete
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
    // handle status
    const handleStatus = async (newStatus,_id) => {
      if(status === newStatus) return
      console.log(newStatus)
      try{
        const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/status/${_id}`, {status: newStatus})
        console.log(data)
        toast.success('Status successfully updated')
        refetch()
       }catch(err){
         console.log(err)
         toast.error(err.response.data)
       }

    }
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
                      <th>#</th>
                      <th>Participant Name</th>
                      <th>Camp Name</th>
                      <th>Camp Fee</th>
                      <th>Confirmation Status</th>
                      <th>Payment Status</th>
                      <th>Action</th>
                      <th>Cancel</th>
                  </tr>
              </thead>
              <tbody>
                {
                     users.map((userData, index) => <tr key={userData._id}>
                        <td>{index + 1}</td>
                        <td>{userData.participant.name}</td>
                        <td>{userData.CampName}</td>
                        <td>$ {userData.fee}</td>
                        <td>{userData.status}</td>
                        <td>Complete</td>
                        <td>
                        <div>
                           <select
            required
            defaultValue={userData.status}
            onChange={(e) => handleStatus(e.target.value, userData._id)}
            className='p-1 border-2 border-purple-500 focus:outline-green-500 rounded-md text-gray-900 whitespace-no-wrap bg-white'
            name='status'
          >
            <option value='Pending'>Pending</option>
            <option value='Complete'>Complete</option>
          </select>
                        </div>
                        </td>
                        <td>
                      <button
                        className="btn text-red-500 text-xl bg-purple-100"
                        onClick={() => toastForDelete(userData._id)}><MdDeleteForever></MdDeleteForever>
                        </button>
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

