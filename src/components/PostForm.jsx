import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./PostForm.css"

const PostForm=()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_y5633oq', 'template_hatlcoh', form.current, 'Oi8dE1Oh_0YrHMuxV')
        .then((result) => {
            console.log(result.text);
            alert("ThankYou for your Intrest.. Our Representative will reach you out within 24 Hrs..😊");
        }, (error) => {
            console.log(error.text);
            alert("Failed to Send Message");
        });
    };
    return(
        <>
        <form className="post" ref={form} onSubmit={sendEmail}>
            <h3 style={{marginBottom:"30px"}}>POST YOUR PROPERTY DETAILS</h3>
            <label htmlFor="projectname">User_Email</label>
            <input type="email" id="email" name="from_email" placeholder="Enter Email.." required />
            <label htmlFor="projectname">Project_Name</label>
            <input type="text" placeholder="Enter Project name" name="project_name"/>
            <br />
            <label>Project Developed_By</label>
            <input type="text"  placeholder="Enter developed_by" name="developed_by"/><br />
            <label>Project Cost</label>
            <input type="text" placeholder="enter project cost" name="cost" /><br />
            <label>Project sqft</label>
            <input type="text" placeholder="enter project sqft" name="sqft"/><br />
            <label>Project Images</label>
            <input type="text" placeholder="add project images" name="images"/><br />
            <label>Project Location</label>
            <input type="text" placeholder="enter project location" name="location"/><br />
            <label>Project Description</label>
            <textarea type="text" placeholder="enter project description" name="description"/><br />
            <input type="submit" value="submit" style={{width:"150px",height:"60px",borderRadius:"10px"}}/>
        </form>
        </>
    )
}
export default PostForm;