
import { Outlet } from "react-router-dom";
import Footer from "./SubComponents/Footer";
import Header from "./SubComponents/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../assets/css/style.css';
import '../../assets/css/animate.min.css';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const SiteLayout = () =>{
    return(
        <>
            <Header/>

            <Outlet/>

            <Footer/>
        </>
    );
}
export default SiteLayout;