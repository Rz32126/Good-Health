import { SiHomepage } from "react-icons/si";
import {
    Card,
    Typography,
    List,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useRole from "../hooks/useRole";
import AdminMenu from "./AdminMenu";
import ParticipantMenu from "./ParticipantMenu";
   
  export function DefaultSidebar() {
    const [role, isLoading] = useRole()
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl bg-red-100 shadow-blue-gray-900/5">
        <Link to="/" className=" p-4 ">
          <Typography className="ml-7 mt-4 flex gap-4" variant="h5" color="blue-gray">
          <SiHomepage />Home Page
          </Typography>
        </Link>
        <div className="divider"></div>
        <List className="text-green-900">
         {role === 'admin' && <AdminMenu></AdminMenu>}
         {role === 'participant' && <ParticipantMenu></ParticipantMenu>}
        </List>
      </Card>
    );
  }