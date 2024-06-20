import Home from "./Home";
import Dashboard from "./Dashboard.jsx";
import Properties from "./Properties";
import Projects from "./Projects";
import Aboutus from "./AboutUs";
import Services from "./Services.jsx";
import ContactUs from "./ContactUs.jsx";
import { Route,Routes } from "react-router-dom";
import LoginRegister from "./LoginRegister.jsx";
import PostForm from "./PostForm.jsx";

const Master=()=>{
    return(
        <>
        <Routes>
        <Route path="" element={<Dashboard></Dashboard>}>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="PostForm" element={<PostForm></PostForm>}></Route>
            <Route path="Properties" element={<Properties></Properties>}></Route>
            <Route path="Projects" element={<Projects></Projects>}></Route>
            <Route path="AboutUs" element={<Aboutus></Aboutus>}></Route>
            <Route path="Services" element={<Services></Services>}></Route>
            <Route path="ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="LoginRegister" element={<LoginRegister></LoginRegister>}></Route>
            <Route path="LoginRegister" element={<LoginRegister></LoginRegister>}></Route>
            </Route>
        </Routes>
        </>
    )
}
export default Master;