// import { Outlet } from "react-router-dom";
import { DefaultSidebar } from "../components/DefaultSidebar";
import AddCamp from "../forms/AddCamp";



const Dashboard = () => {
    return (
        <div className="w-11/12 mx-auto mt-4 flex">
            <DefaultSidebar></DefaultSidebar>
            {/* <Outlet></Outlet> */}
            <AddCamp></AddCamp>
        </div>
    );
};

export default Dashboard;