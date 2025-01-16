import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
  export function AvailableCard({camp}) {
    const {_id,photo,date,name,health,location} = camp || {}
    return (
        <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={photo}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="black" className="mb-2">
            Name: {name}
          </Typography>
          {/* <Typography>
            <span className="font-semibold">Description:</span> {description}
          </Typography> */}
          <p className="font-semibold">Location: {location}</p>
          <p className="font-semibold">Date & Time:{date}</p>
          <p className="font-semibold">HealthCare Name:{health}</p>
          
        </CardBody>
        <CardFooter className="pt-0">
        <Link to={`/camp-details/${_id}`}><Button>Details</Button></Link>
          <button className="btn">Join now</button>
        </CardFooter>
        </Card>
    );
  }