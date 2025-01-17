import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
export default function PopularCard({camp}) {
    const {_id,photo,date,fee,name,health,location,count} = camp || {}
    return (
        <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            className="h-56 object-cover"
            src={photo}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="black" className="mb-2">
            Name: {name}
          </Typography>
          <p className="font-semibold">Camp Fee: ${fee}</p>
          <p className="font-semibold">Date & Time:{date}</p>
          <p className="font-semibold">Location: {location}</p>
          <p className="font-semibold">HealthCare Name: {health}</p>
          {/* value={totalParticipant} onChange={(e) => setTotalParticipant(e.target.value)} */}
          <p className="font-semibold">Participant Count: {count}</p>
          
        </CardBody>
        <CardFooter className="pt-0">
        <Link to={`/camp-details/${_id}`}><Button>Details</Button></Link>
          <button className="btn">Join now</button>
        </CardFooter>
        </Card>
    );
  }