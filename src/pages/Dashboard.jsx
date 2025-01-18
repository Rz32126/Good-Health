import { Outlet } from "react-router-dom";
import { DefaultSidebar } from "../components/DefaultSidebar";




const Dashboard = () => {
    return (
        <div className="w-11/12 mx-auto mt-4 flex">
            <DefaultSidebar></DefaultSidebar>
            <div className="flex-1">
              <Outlet></Outlet> 
            </div>
        </div>
    );
};

export default Dashboard;