import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useRole from "../hooks/useRole";


const ParticipantRoute = ({ children }) => {
    const [role, isLoading] = useRole()
   
    if(isLoading){
      return <LoadingSpinner></LoadingSpinner>
    }
    if(role === 'participant'){
      return children;
    }
    return (
        <Navigate to={'/dashboard'} replace='true'></Navigate>
    );
};

export default ParticipantRoute;