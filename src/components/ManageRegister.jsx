import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const ManageRegister = () => {
  const { user } = useContext(AuthContext);
  const { count } = useLoaderData();
  const [search, setSearch] = useState('');
  // console.log(count);
  const itemPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1); 


  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users', user?.email, search, currentPage],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-users/${user?.email}?page=${currentPage}&limit=${itemPerPage}&search=${search}`, {
        headers: { 
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return data;
    }
  });

  //  delete
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-register/${id}`);
      console.log(data);
      toast.success('Successfully canceled the Registration!!');
      refetch();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  // Confirmation for delete
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

  // status update
  const handleStatus = async (newStatus, _id) => {
    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/status/${_id}`, { status: newStatus });
      console.log(data);
      toast.success('Status successfully updated');
      refetch();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  
  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };

  const totalPages = Math.ceil(count / itemPerPage); 

  return (
    <div>
      <h1 className='text-purple-500 text-center mt-5 text-2xl font-semibold'>** Manage the Registered Participants **</h1>
      <div className="mt-3">
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
               </div>
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
                users.map((userData, index) => (
                  <tr key={userData._id}>
                    <td>{(currentPage - 1) * itemPerPage + index + 1}</td> 
                    <td>{userData.participant.name}</td>
                    <td>{userData.CampName}</td>
                    <td>$ {userData.fee}</td>
                    <td>
                      <p className={`${userData.status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>{userData.status}</p>
                    </td>
                    <td>
                      <p className={`${
                        userData.payment === "Unpaid" ? "text-red-500" : "text-green-500"
                      }`}>
                        {userData.payment}
                      </p>
                    </td>
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
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <div className="join mt-9">
          <button
            className="join-item btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`join-item btn ${currentPage === index + 1 ? 'bg-purple-100' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="join-item btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageRegister;
