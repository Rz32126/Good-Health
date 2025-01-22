import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const CampRegister = () => {
  const { user } = useContext(AuthContext);
  const { count } = useLoaderData(); 
  const [search, setSearch] = useState('');
  
  const itemPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1); 

  const { data: registers = [], isLoading, refetch } = useQuery({
    queryKey: ['registers', user?.email, currentPage, search],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/register-participant/${user?.email}?page=${currentPage}&limit=${itemPerPage}&search=${search}`
      );
      return data;
    },
  });

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-register/${id}`
      );
      console.log(data);
      toast.success("Successfully canceled the Registration!!");
      refetch();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  // Handle Payment
  const handlePayment = async (newPayment, _id) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/payment/${_id}`,
        { payment: newPayment }
      );
      console.log(data);
      toast.success("Payment successfully updated");
      refetch();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  // delete
  const toastForDelete = (id) => {
    toast(
      (t) => (
        <div className="flex gap-3 items-center">
          <div>
            <p>Are you <b>Sure?</b> </p>
          </div>
          <div>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded-md"
              onClick={() => {
                handleDelete(id);
                toast.dismiss(t.id);
              }}
            >
              Yes
            </button>
            <button
              className="bg-green-600 ml-3 text-white px-3 py-1 rounded-md"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      )
    );
  };

  if (isLoading) return <LoadingSpinner />;

  const totalPages = Math.ceil(count / itemPerPage); 
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; 
    setCurrentPage(page); 
  };

  return (
    <div>
      <h1 className="text-orange-500 text-center mt-5 text-2xl font-semibold">
        ** Manage Your Registered Camps **
      </h1>
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
      <div className="mt-5 ml-2 bg-orange-100 rounded-xl">
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr className="text-black">
                <th>#</th>
                <th>Camp Name</th>
                <th>Camp Fee</th>
                <th>Status</th>
                <th>Make Payment</th>
                <th>Confirm Payment</th>
                <th>Payment Status</th>
                <th className="feedback-column">Feedback</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {registers.map((registerData, index) => (
                <tr key={registerData._id}>
                  <td>{(currentPage - 1) * itemPerPage + index + 1}</td> 
                  <td>{registerData.CampName}</td>
                  <td>$ {registerData.fee}</td>
                  <td>
                    <p
                      className={`${
                        registerData.status === "Pending"
                          ? "text-blue-500"
                          : "text-green-500"
                      }`}
                    >
                      {registerData.status}
                    </p>
                  </td>
                  <td>
                    <Link to={`/dashboard/pay/${registerData.campId}`}>
                      <button disabled={registerData.fee == 0} className="btn">
                        Pay
                      </button>
                    </Link>
                  </td>
                  <td>
                    <div>
                      <select
                        required
                        defaultValue={registerData.payment}
                        onChange={(e) => handlePayment(e.target.value, registerData._id)}
                        className="p-1 border-2 border-purple-500 focus:outline-green-500 rounded-md text-gray-900 whitespace-no-wrap bg-white"
                        name="payment"
                      >
                        <option value="Unpaid">Unpaid</option>
                        <option value="Paid">Paid</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <p
                      className={`${
                        registerData.payment === "Unpaid"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {registerData.payment}
                    </p>
                  </td>
                  {registerData.payment === "Paid" && (
                    <td>
                      <Link to='/dashboard/feedback'>
                        <button className="btn bg-lime-300">Feedback</button>
                      </Link>
                    </td>
                  )}

                  {registerData.payment !== "Paid" && <td>
                    <p>N/A</p></td>}
                  <td>
                    <button
                      onClick={() => toastForDelete(registerData._id)}
                      className="text-2xl btn text-red-600 bg-orange-100"
                    >
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="join">
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
              className={`join-item btn ${currentPage === index + 1 ? 'bg-orange-100' : ''}`}
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

export default CampRegister;
