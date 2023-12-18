import { Outlet } from "react-router-dom";
import Footer from "./SubComponents/Footer";
import SideBar from "./SubComponents/SideBar";

const UserLayout = () =>{
    return(
        <>
            <SideBar/>

            <Outlet/>

            <Footer/>
        </>
    );
}
export default UserLayout;