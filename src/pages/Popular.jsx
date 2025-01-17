import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import PopularCard from "../cards/PopularCard";


const Popular = () => {
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
        <div>
            <h2 className="text-center text-3xl font-bold mt-7 mb-6 text-purple-600">Popular Medical Camps</h2>
            <div className="grid grid-cols-3">
                {
                     camps.slice(0,4).map(camp => <PopularCard key={camp._id} camp={camp}></PopularCard>)    
                }
            </div>
        </div>
    );
};

export default Popular;