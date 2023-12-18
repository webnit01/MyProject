import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Components/AdminLayout/AdminLayout";
import AdminDashboard from "./Components/AdminLayout/Pages/AdminDashboard";
import About from "./Components/SiteLayout/Pages/About";
import Error from "./Components/Error/Error";
import Home from "./Components/SiteLayout/Pages/Home";
import SiteLayout from "./Components/SiteLayout/SiteLayout";
import Profile from "./Components/UserLayout/Pages/Profile";
import UserDashboard from "./Components/UserLayout/Pages/UserDashboard";
import UserLayout from "./Components/UserLayout/UserLayout";


const App = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<SiteLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path="about" element={<About/>} />
                </Route>
                <Route path="/dashboard" element={<UserLayout/>}>
                    <Route index element={<UserDashboard/>} />
                    <Route path="profile" element={<Profile/>} />
                </Route>
                <Route path="/admindashboard" element={<AdminLayout/>}>
                    <Route index element={<AdminDashboard/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </>
    );
}
export default App;