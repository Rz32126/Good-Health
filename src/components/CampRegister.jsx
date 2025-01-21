import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CampRegister = () => {
  const { user } = useContext(AuthContext);
  const { data: registers = [], isLoading, refetch } = useQuery({
    queryKey: ["registers", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/register-participant/${user?.email}`
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

  // Handle Payment Update
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

  // Confirmation for Delete
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

  return (
    <div>
      <h1 className="text-center mt-5 text-2xl font-semibold">
        Manage Your Registered Camps
      </h1>
      <div className="mt-5 ml-2 bg-orange-100 rounded-xl">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black">
                <th>#</th>
                <th>Camp Name</th>
                <th>Camp Fee</th>
                <th>Status</th>
                <th>Make Payment</th>
                <th>Confirm Payment</th>
                <th>Payment Status</th>
                <th>Feedback</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {registers.map((registerData, index) => (
                <tr key={registerData._id}>
                  <td>{index + 1}</td>
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
                      <button
                        disabled={registerData.fee == 0}
                        className="btn"
                      >
                        Pay
                      </button>
                    </Link>
                  </td>
                  <td>
                    <div>
                      <select
                        required
                        defaultValue={registerData.payment}
                        onChange={(e) =>
                          handlePayment(e.target.value, registerData._id)
                        }
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
                  <td>
                    <button className="">Good</button>
                  </td>
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
    </div>
  );
};

export default CampRegister;
