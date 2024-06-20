import React from "react";
import { useState } from "react";
import {Link, Outlet} from "react-router-dom"
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
const Dashboard=()=>{
          
  const Login_func=()=>{
    console.log('Hello');
    return navigate("/LoginRegister")
  }
  const navigate=useNavigate();

    return(
        <>
         <div className="container">
        <div className="parent">
          <div className="p1">
            <img src="https://balajiaws.s3.ap-south-1.amazonaws.com/MY+Estate.png" alt="error" height={100} width={100} style={{borderRadius:50}}></img>
        
          <div className="c2">
            <Link to="" style={{marginRight:80,color:"white"}}>Home</Link>
        <Link to="Properties" style={{marginRight:70,color:"white"}}>Properties</Link>
        <Link to="Projects" style={{marginRight:70,color:"white"}}>Projects</Link>
        <Link to="AboutUs" style={{marginRight:70,color:"white"}}>About Us</Link>
        <Link to="Services" style={{marginRight:70,color:"white"}}>Services</Link>
        <Link to="ContactUs" style={{marginRight:70,color:"white"}}>Contact Us</Link>
         <Link to="PostForm"></Link>
       <button onClick={Login_func} style={{borderRadius:"10px"}}><i className="fa fa-user"> LogIn / SignUp</i></button>         
          </div>
        </div>
        </div>
        </div>
        <br /><br /><br />
        <Outlet></Outlet>
        </>
    )
}
export default Dashboard;