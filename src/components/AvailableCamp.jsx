import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { AvailableCard } from "../cards/AvailableCard";


const AvailableCamp = () => {
    const {data: camps, isLoading} = useQuery({
        queryKey:['camps'],
        queryFn: async () => {
         const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/camps`)
         return data
        },
    })
    // console.log(camps)
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1">
            {
                camps.map(camp => <AvailableCard key={camp._id} camp={camp}></AvailableCard>)
            }
        </div>
    );
};

export default AvailableCamp;