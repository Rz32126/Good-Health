import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useRole from "../hooks/useRole";
import LoadingSpinner from "./LoadingSpinner";
import img from '../assets/Screenshot 2025-01-19 134408.png'
import { Link } from "react-router-dom";


const MyProfile = () => {
   const {user} = useContext(AuthContext)
   const [role, isLoading] = useRole()
  
   if (isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
           <div class="flex flex-col bg-base-300 shadow-sm border border-slate-200 rounded-lg my-6 w-9/12 mx-auto">
  <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center bg-blue-200">
    <img class="w-32 h-32 object-cover rounded-full" src={user && user.photoURL ? user.photoURL : img} alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="mb-1 text-xl font-semibold text-slate-800">
      {user?.displayName}
    </h4>
    <p
      class="text-sm font-semibold text-slate-500 uppercase">
      Role : {role}
    </p>
    <p>Email: {user?.email}</p>
    <p>Contact Number: +876666667</p>
  </div>
  <div class="flex justify-center p-6 pt-2 gap-7">
    <Link to='/dashboard/my-profile'>
    <button class="min-w-32  rounded-md bg-green-400 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    Update Profile information
    </button>
    </Link>
  </div>
</div> 
        </div>
    );
};

export default MyProfile;