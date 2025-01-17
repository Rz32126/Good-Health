import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";
import JoinModal from "../cards/JoinModal";


const CampDetails = () => {
    const { id } = useParams()
    let [isOpen, setIsOpen] = useState(false)
    const {data: camp = [], isLoading, refetch} = useQuery({
        queryKey:['camp', id],
        queryFn: async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/camp/${id}`)
          return data
        }
    })
    const closeModal = () => {
        setIsOpen(false)
    }
    const {photo,date,fee,name,health,description,location} = camp || {}
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
             <Card className="mt-6 w-10/12 mx-auto">
        <CardHeader color="blue-gray" className="relative h-64 object-cover w-11/12 mx-auto">
          <img
            src={photo}
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="ml-7">
          <Typography variant="h5" color="black" className="mb-2">
            Name: {name}
          </Typography>
          <Typography>
            <span className="font-semibold">Description:</span> {description}
          </Typography>
          <p className="font-semibold">Location: {location}</p>
          <p className="font-semibold">Date & Time:{date}</p>
          <p className="font-semibold">HealthCare Name:{health}</p>
          <p>Camp Fee: ${fee}</p>
          
        </CardBody>
        <CardFooter className="pt-0 flex justify-center">
          <button onClick={() => setIsOpen(true)} className="btn bg-yellow-600">Join Camp Now</button>
        </CardFooter>
        </Card>
        <div className="hidden">
        <JoinModal closeModal={closeModal} isOpen={isOpen} setIsOpen={setIsOpen} camp={camp}></JoinModal>
        </div>
        </div>
    );
};

export default CampDetails;