import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const { user } = useContext(AuthContext)
    const {data: role, isLoading} = useQuery({
        queryKey:['role', user?.email],
        queryFn: async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/users/role/${user?.email}`)
          return data.role
        }
    })
    return [role, isLoading]
};

export default useRole;