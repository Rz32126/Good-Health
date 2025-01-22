import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import { MdModeEdit } from "react-icons/md";
import { FcDeleteRow } from "react-icons/fc";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const ManageCamp = () => {
  const [search, setSearch] = useState('');
    const {data: camps, isLoading, refetch} = useQuery({
        queryKey:['camps', search],
        queryFn: async () => {
         const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/camps?search=${search}`)
         return data
        },
    })
    // console.log(camps)

    const handleDelete = async (id) => {
      try{
       const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-camp/${id}`)
       console.log(data)
       toast.success('Successfully Deleted the Camp!!')
       refetch()
      }catch(err){
        console.log(err)
        toast.error(err.message)
      }
    }
    const toastDelete = (id) => {
        toast(
          (t) => (
            <div className='flex gap-3 items-center'>
              <div><p>Are you <b>Sure?</b></p></div>
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
            <h1 className='text-center mt-5 text-2xl font-semibold'>** Manage Your Added Camps **</h1>
            <div className="mt-3 flex gap-4">  
                                         <span className="mt-3 ml-3"><FaSearch /></span>
                                         <input 
                                         onKeyUp={(e) => setSearch(e.target.value)}
                                         type="text"
                                         className="input w-36 max-w-2xl border border-gray-400"
                                         placeholder="Search Camps by Name"
                                         >
                                         </input>
                                </div>
            <div className='mt-5 w-11/12 mx-auto bg-blue-100'>
            <div className="overflow-x-auto">
              <table className="table">
               {/* head */}
            <thead>
              <tr className='text-black'>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Health Professional</th>
                  <th>Location</th>
                  <th>Update</th>
                  <th>Delete</th>
              </tr>
          </thead>
          <tbody>
            {
                 camps.map((camp, index) => <tr key={camp._id}>
                    <td>{ index + 1 }</td>
                    <td>{camp.name}</td>
                    <td>{camp.date}</td>
                    <td>{camp.health}</td>
                    <td>{camp.location}</td>
                    <td><Link to={`/update-camp/${camp._id}`}>
                    <button className='text-2xl text-green-700 btn bg-blue-100'><MdModeEdit /></button>
                    </Link></td>
                    <td><button onClick={() => toastDelete(camp._id)} className='text-2xl btn bg-blue-100'><FcDeleteRow /></button></td> 
                 </tr>)   
            }
          </tbody>
        </table>
    </div>
        </div>
        </div>
    );
};

export default ManageCamp;