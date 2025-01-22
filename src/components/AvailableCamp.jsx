import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { AvailableCard } from "../cards/AvailableCard";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


const AvailableCamp = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(false);
    const [layout, setLayout] = useState('lg:grid-cols-3 grid-cols-1');
    const {data: camps, isLoading} = useQuery({
        queryKey:['camps', search, sort],
        queryFn: async () => {
         const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/camps?search=${search}&sort=${sort}`)
         return data
        },
    })
    // console.log(camps)
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
          <div className="lg:flex gap-4 justify-between">  
               <div className="mt-3 flex gap-4">
               <span className="mt-3"><FaSearch /></span>
               <input 
               onKeyUp={(e) => setSearch(e.target.value)}
               type="text"
               className="input w-36 max-w-2xl border border-gray-400"
               placeholder="Search Camps by Name"
               >
               </input>
               </div>

               <div className="mt-3">
                <button onClick={() => setSort(!sort)} className={`btn ${sort && "btn-success"}`}>
                  {sort == true? "Sorted by Fee" : "Sort by Fee"}
                </button>
               </div>

               <div className="mt-3">
        <button
          onClick={() => setLayout('grid-cols-2')}
          className={`btn ${layout === 'grid-cols-2' ? 'bg-yellow-500' : 'bg-gray-500'} p-2 rounded-md`}
        >
          Layout 2 Colum
        </button>
        <button
          onClick={() => setLayout('grid-cols-3')}
          className={`btn ${layout === 'grid-cols-3' ? 'bg-yellow-500' : 'bg-gray-500'} p-2 rounded-md ml-2`}
        >
          Layout 3 Colum
        </button>
               </div>
         </div>   

             <div  className={`mt-5 grid ${layout} gap-3`}>
               {
                    camps.map(camp => <AvailableCard key={camp._id} camp={camp}></AvailableCard>)
               }
             </div>
        </div>
    );
};

export default AvailableCamp;
