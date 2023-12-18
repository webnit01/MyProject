import { Outlet } from "react-router-dom";
import Footer from "./SubComponents/Footer";
import SideBar from "./SubComponents/SideBar";

const AdminLayout = () =>{
    return(
        <>
            <SideBar/>

            <Outlet/>

            <Footer/>
        </>
    );
}
export default AdminLayout;