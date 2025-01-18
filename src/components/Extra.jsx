import React from "react";
 
// @material-tailwind-react
import {
  Card,
  Avatar,
  Button,
  CardBody,
  Typography,
} from "@material-tailwind/react";
 
const imgs = [
    "https://i.ibb.co.com/WzQXZYY/luis-sanchez-x-Yi-OWr-Q7n7-M-unsplash.jpg",
    "https://i.ibb.co.com/NpcPJqX/Screenshot-2025-01-19-035038.png",
    "https://i.ibb.co.com/zm7gZsY/Screenshot-2025-01-19-041909.png",
];
 
export function Extra() {
  return (
    <Card className="overflow-hidden border border-gray-300 shadow-sm">
      <CardBody className="p-4">
        <Typography
          color="blue-gray"
          className="mb-1 text-blue-700 text-center text-3xl font-semibold"
        >Our Emergency Health Care
        <p className="text-xl mt-4 mb-4 text-black">You can find some emergency health care. We are now 24 hours in call with different doctors and specialist. Contact us and take consultation from your needed doctors.</p>
        
        </Typography>
        <div className="grid grid-cols-3 gap-2">
          {imgs.map((img, key) => (
            <img
              key={key}
              src={img}
              className="h-full w-full rounded-xl object-cover"
              alt="imgs"
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
 
export default Extra;