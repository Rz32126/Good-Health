import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const ManageRegister = () => {
    const {user} = useContext(AuthContext)
    const {data: registers = [], isLoading, refetch} = useQuery({
        queryKey:['registers', user?.email],
        queryFn: async() => {
          const {data} = await axios(`${import.meta.env.VITE_API_URL}/register-participant/${user?.email}`)
          return data
        }
    })
    console.log(registers)
    return (
        <div>
            register
        </div>
    );
};

export default ManageRegister;