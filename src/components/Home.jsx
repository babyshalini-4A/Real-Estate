import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./PostForm.jsx"
import "./Home.css"

const Home=()=>{

  const navigate=useNavigate();

  const func_sell=()=>{
    return navigate("PostForm")
  }

const func_one=()=>{ 
return navigate("/Properties") 
}
const func_two=()=>{
  return navigate("/Projects")
}
const flat_one=()=>{
  return navigate("ContactUs")
}
const flat_two=()=>{
  return navigate("ContactUs")
}
const flat_three=()=>{
  return navigate("ContactUs")
}

    return(
        <>
        <div className="home">
        <div className="container10">
      <div className="H1">
        <div className="c1">
        <h2 style={{fontSize:"50px"}}>LANSUM ETERNA.</h2>
        <h3>by MY HOME GROUP..</h3>
        <br />
        <p>2300sqft - 2500sqft</p>
        <p>Jubilee Hills, Hyderabad..</p>
        <p>Starting from  <i className="fa fa-inr"></i> 1.80cr</p>
      <br />
        <button className="btn-success" style={{backgroundColor:"green", borderRadius:"10px"}}>Explore Now</button>
        </div>
      </div>
      <div className='h2'>
            <h2 className="heading">
                Find Your Perfect Home
            </h2>
            <input type='text' placeholder= 'Enter Locality, builder or project' style={{width:"500px", height:"60px", borderRadius:"10px", margin:"10px"}}/> <button  style={{backgroundColor:"green", borderRadius:"10px"}}>Search</button>
        </div>
        <div className='h3'>
          <h3>Explore all properties</h3>
        </div>
        <div className="button-container">
          <button style={{backgroundColor:"orange",borderRadius:"10px"}} onClick={func_sell}>SELL PROPERTY</button>
          <button style={{backgroundColor:"orange",borderRadius:"10px"}} onClick={func_one}>ALL PROPERTIES</button>
          <button style={{backgroundColor:"orange", borderRadius:"10px"}} onClick={func_two}>RENT PROPERTY</button>
      </div>
      <div className="h4">
        <div className="flat1">
          <img src="https://balajiaws.s3.ap-south-1.amazonaws.com/Real_Estate/ATS+knightsbridge+Noida.jpg" alt="error" style={{height:"300px", width:"420px"}}></img>
          <h2>My Home Mangala</h2>
          <p>By MyHome Group <br /><br />
          2,3,3.5 BHK Apartments</p>
          <p>Madhapur, Hyderabad.</p><br />
          <h2><i className="fa fa-inr"> 95.05 L - 2.05 cr</i></h2>
          <button onClick={flat_one} style={{borderRadius:"10px"}}>Intrested <i className="fa fa-heart"></i></button>
        </div>
        <div className="flat2">
          <img src="https://balajiaws.s3.ap-south-1.amazonaws.com/Real_Estate/Project_Villas/Real+estate+projects+images/IMG-20240527-WA0029.jpg" alt="error" style={{height:"300px", width:"420px"}}></img>
          <h2>DSR Hills </h2>
          <p>By DSR Group <br /><br />
          4 BHK Villa</p>
          <p>Jubilee Hills, Hyderabad.</p><br />
          <h2><i className="fa fa-inr"> 2.05 cr - 4 cr</i></h2>
          <button onClick={flat_two} style={{borderRadius:"10px"}}>Intrested <i className="fa fa-heart"></i></button>
        </div>
        <div className="flat3">
          <img src="https://balajiaws.s3.ap-south-1.amazonaws.com/Real_Estate/IMG-20240527-WA0010.jpg" alt="error" style={{height:"300px", width:"420px"}}></img>
          <h2>Urban Heights</h2>
          <p>By Urban Group <br /><br />
          2,3 BHK Apartments</p>
          <p>Kokapet, Hyderabad.</p><br />
          <h2><i className="fa fa-inr"> 1.20 cr - 2.10 cr</i></h2>
          <button onClick={flat_three} style={{borderRadius:"10px"}}>Intrested <i className="fa fa-heart"></i></button>
        </div>
      </div>
      <div className='view'>
      <img src="https://media.licdn.com/dms/image/C4D12AQE0gxMlKxSjrg/article-cover_image-shrink_600_2000/0/1651256037066?e=1723075200&v=beta&t=tQM44W6l2L6QHSECTGIhkRJVJhdleJ8SGmSXTk5mG0M" alt="error" width={1500} height={500} />
    </div>
     <div className='footerSection'>
      <div className="firstRow">
        <ul>
            <li><a href='#'>Real Estate in Madhapur</a></li>
            <li><a href='#'>Real Estate in Kukatpally</a></li>
            <li><a href='#'>Real Estate in Gachibowli</a></li>
            <li><a href='#'>Real Estate in Manikonda</a></li>
            <li><a href='#'>Real Estate in Kondapur</a></li>
        </ul>
      </div>
      <div className="secondRow">
        <ul>
            <li><a href='#'>Flats in Madhapur</a></li>
            <li><a href='#'>Flats in Gachibowli</a></li>
            <li><a href='#'>Flats in Manikonda</a></li>
            <li><a href='#'>Flats in Kondapur</a></li>
            <li><a href='#'>Flats in Kukatpally</a></li>
        </ul>
      </div>
      <div className="thirdRow">
        <ul>
            <li><a href='#'>Flats for Rent in Madhapur</a></li>
            <li><a href='#'>Flats for Rent in Gachibowli</a></li>
            <li><a href='#'>Flats for Rent in Manikonda</a></li>
            <li><a href='#'>Flats for Rent in Kondapur</a></li>
            <li><a href='#'>Flats for Rent in Kukatpally</a></li>
        </ul>
      </div>
      <div className="fourthRow">
        <ul>
            <li><a href='#'>New Projects in Madhapur</a></li>
            <li><a href='#'>New Projects in Gachibowli</a></li>
            <li><a href='#'>New Projects in Manikonda</a></li>
            <li><a href='#'>New Projects in Kondapur</a></li>
            <li><a href='#'>New Projects in Kukatpally</a></li>
        </ul>
      </div>
      <div className="fifthRow">
        <ul>
            <li><a href='#'>Commercial Property in Madhapur</a></li>
            <li><a href='#'>Commercial Property in Gachibowli</a></li>
            <li><a href='#'>Commercial Property in Manikonda</a></li>
            <li><a href='#'>Commercial Property in Kondapur</a></li>
            <li><a href='#'>Commercial Property in Kukatpally</a></li>
        </ul>
      </div>
    </div>
    <div className="contact">
        <div className="footerImage">
            <img src="https://balajiaws.s3.ap-south-1.amazonaws.com/MY+Estate.png" alt="error" />
        </div>
        <div className="company">
          <ul>
            <ul><h3>COMPANY</h3></ul>
            <div className="cdetails"><a href='#'>About us</a></div>
            <div className="cdetails"><a href='#'>Contact us</a></div>
            <div className="cdetails"><a href='#'>Carrers</a></div>
            </ul>
        </div>
        <div className="quick">
          <ul>
            <ul><h3>QUICK LINKS</h3></ul>
            <div className="qlinks"><a href='#'>Terms and Conditions</a></div>
            <div className="qlinks"><a href='#'>Privacy Policies</a></div>
            <div className="qlinks"><a href='#'>Become our partner</a></div>
            </ul>
        </div>
        <div className="contactus">
            <ul><h3>CONTACT US</h3></ul>
            <div className="cont"><a href='#'>+91 9876543210</a></div>
            <div className="cont"><a href='#'>info@myestate.in</a></div>
            <div className="cont"><a href='#'>Madhapur</a></div>
        </div>
        <div className="followus">
            <div className="follow"><h3>FOLLOW US ON</h3></div>
            <div className='fdiv'>
            <div className="follow"><img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/></div>
            <div className="follow"><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></div>
            <div className="follow"><img width="48" height="48" src="https://img.icons8.com/color/48/twitter-circled--v1.png" alt="twitter-circled--v1"/></div>
            </div>
        </div>
    </div> 
    </div>
    </div>
    </>
  )
}
export default Home;