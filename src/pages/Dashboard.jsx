import { Outlet } from "react-router-dom";
import { DefaultSidebar } from "../components/DefaultSidebar";



const Dashboard = () => {
    return (
        <div className="w-11/12 mx-auto mt-4">
            <DefaultSidebar></DefaultSidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;