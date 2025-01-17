import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
// import { useState } from "react";
import { Link } from "react-router-dom";
   
  export function AvailableCard({camp}) {
    // const [totalParticipant, setTotalParticipant] = useState(0)
    const {_id,photo,date,fee,name,health,location,count} = camp || {}
    const participantCount = parseInt(count);
    return (
        <Card className="mt-6 w-96">
        <CardHeader className="relative mt-3">
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
          {/* <Typography>
            <span className="font-semibold">Description:</span> {description}
          </Typography> */}
          <p className="font-semibold">Camp Fee: ${fee}</p>
          <p className="font-semibold">Date & Time:{date}</p>
          <p className="font-semibold">Location: {location}</p>
          <p className="font-semibold">HealthCare Name: {health}</p>
          {/* value={totalParticipant} onChange={(e) => setTotalParticipant(e.target.value)} */}
          <p className="font-semibold">Participant Count: {participantCount}</p>
          
        </CardBody>
        <CardFooter className="pt-0">
        <Link to={`/camp-details/${_id}`}><Button>Details</Button></Link>
          <button className="btn">Join now</button>
        </CardFooter>
        </Card>
    );
  }