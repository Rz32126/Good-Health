import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
  } from "@material-tailwind/react";
   
  export default function Profile() {
    return (
      <div className="w-7/12 mx-auto mt-20">
        <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="green"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Update Profile
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Name : " size="lg" />
          <Input label="Contact : " size="lg" />
        </CardBody>
        <CardFooter className="pt-0 flex gap-4">
          <button className="btn bg-green-200">
            Update Profile
          </button>
          <button className="btn bg-red-200">
            Cancel
          </button>
        </CardFooter>
      </Card>
      </div>
    );
  }