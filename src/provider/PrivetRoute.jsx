import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";



const PrivetRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if(loading){
      return <LoadingSpinner></LoadingSpinner>
    }
    if(user && user?.email){
      return children;
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivetRoute;