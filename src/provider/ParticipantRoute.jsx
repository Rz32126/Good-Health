import { useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useRole from "../hooks/useRole";


const ParticipantRoute = ({ children }) => {
    const [role, isLoading] = useRole()
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

export default ParticipantRoute;