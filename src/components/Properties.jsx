import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Properties.css";
const Properties=()=>{

const Prop_func=()=>{
    return navigate("/ContactUs");
}

    const navigate=useNavigate();
    const [arr, setArr] = useState([]);

     useEffect(()=>{
         axios.get("http://localhost:8000/get").then((posRes)=>{
          const {data}=posRes;
          setArr(data);
         },(errRes)=>{
            console.log(errRes);
         })
    },[])
    return(
        <>
         <div className="properties">
            {
                arr.map((element,index)=>{
                    return(<div className="child" key={index}>
                         <img src={element.images} alt="error"></img>
                         <div className="child1">
                        <h2>{element.project}</h2>
                        <p>By {element.developedBy} Group</p>
                        <p>{element.sqft} Sqft</p><br />
                      <h6>{element.location}</h6>
                      <h6>{element.description}</h6>
                      <h4>Starts from <i className="fa fa-inr"> {element.cost} cr</i> </h4><br />
                      <button onClick={Prop_func} style={{borderRadius:"10px"}}>Intrested <i className="fa fa-heart"></i></button>
                      </div>
                    </div>)
                })
            }

        </div>
        </>
    )
}
export default Properties;