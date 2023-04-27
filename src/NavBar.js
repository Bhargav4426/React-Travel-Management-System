import React from "react";
import {useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultNavBar from "./DefaultNavBar";
import UpdateSuccessNavBar from "./UpdateSuccessNavBar.";
import RegisterSuccessNavBar from "./RegisterSuccessNavBar";
const NavBar = () => {
    const location = useLocation();
    return (
        <>
         {location.pathname === '/registrationsuccess' ? <RegisterSuccessNavBar/>
        : location.pathname === '/updatesuccess' ? <UpdateSuccessNavBar/> 
        : location.pathname === '/deleteSuccess' ? <UpdateSuccessNavBar/> : <DefaultNavBar/>}
        </>
    )
  
};

export default NavBar;