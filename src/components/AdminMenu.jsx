import {
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    InboxIcon,
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AdminMenu = () => {
    return (
        <div>
            <ListItem>
          <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to='/dashboard'>My Profile</Link> 
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to='add-camp'>Add a Camp</Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to='manage-camp'>Manage Camps</Link>
          </ListItem>
          <ListItem>
          <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to='manage-register'>Manage Registered Camps</Link>
          </ListItem>
        </div>
    );
};

export default AdminMenu;