import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useRole from "../hooks/useRole";


const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole()
   
    if(isLoading){
      return <LoadingSpinner></LoadingSpinner>
    }
    if(role === 'admin'){
      return children;
    }
    return (
        <Navigate to={'/dashboard'} replace='true'></Navigate>
    );
};

export default AdminRoute;