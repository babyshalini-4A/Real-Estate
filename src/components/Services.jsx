import React from 'react'
import "./Services.css";
const Services = () => {
       
  const submit=()=>{
    return alert('ThankYou for your response..! Our customer Executive will assist you within 24Hrs.');
   }

  return (
    <div className='servicesection'>
    <div className='container2'>
      <h1 style={{marginBottom:'25px'}}>SERVICES</h1>
      <div className="mainService">
        <div className="stype">
           <p>Please Select service Type  :</p>
           <div className='dropdown'>
           <select className='select'>
            <option value="legal">Legal</option>
            <option value="survey">Survey</option>
            <option value="technical">Technical</option>
            <option value="government">Government Works Related to Property</option>
            <option value="security">Security (Wall/Fencing) for Property</option>
           </select>
           </div>
        </div>
        <div className="exp">
            <p>Explain Detail   :</p>
            <textarea name="text" placeholder='Explain Issue briefly...'></textarea>
        </div>
            <button style={{backgroundColor:"green", borderRadius:"10px"}} onClick={submit}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Services;