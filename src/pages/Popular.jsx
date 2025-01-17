import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import PopularCard from "../cards/PopularCard";
import { Link } from "react-router-dom";


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
            <div className="grid lg:grid-cols-3 grid-cols-1">
                {
                     camps.slice(0,3).map(camp => <PopularCard key={camp._id} camp={camp}></PopularCard>)    
                }
            </div>
            <div className="flex justify-center">
              <Link to='/available-camps'>
              <button className="btn mt-2 mb-3 bg-green-600 ">See All Camps</button>
              </Link>
            </div>
        </div>
    );
};

export default Popular;