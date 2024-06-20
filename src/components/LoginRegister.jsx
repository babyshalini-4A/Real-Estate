import React, { useState, useRef } from 'react';
import './LoginRegister.css';
import { ImUserTie } from "react-icons/im";
import { HiMiniLockClosed } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";

const LoginRegister = () => {

  const ref1=useRef(null);
  const ref2=useRef(null);
  const ref3=useRef(null);
  const ref4=useRef(null);
  const ref5=useRef(null);

  const [data,setData]=useState();
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = (event) => {
    event.preventDefault();
    setIsRegistering(!isRegistering);
  };

  const register=()=>{
    axios.post("http://localhost:8000/register",{"name":ref1.current.value,"username":ref2.current.value,"email":ref3.current.value,"password":ref4.current.value,"role":ref5.current.value}).then((posRes)=>{
        const {data}=posRes; 
        const {Register} =data;
    })
    return navigate("/");
}

  return (
    <>
      <div className={`Wrapper ${isRegistering? 'active' : ''}`}>
        <div className='form-box login'>
          <form >
            <h1>Login</h1>
            <div className='input-box'>
              <input type="text" placeholder='Username' required />
              <ImUserTie className='icon' />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' required />
              <HiMiniLockClosed className='icon' />
            </div>
            <div className='remember-forgot'>
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
              <p>Don't have an account? <a href="#" onClick={toggleForm}>Register</a></p>
            </div>
          </form>
        </div>
        <div className='form-box register'>
          <form >
            <h1>Registration</h1>
            <div className='input-box'>
              <input type="text" placeholder='name' ref={ref1}  required />
              <ImUserTie className='icon' />
            </div>
            <div className='input-box'>
              <input type="text" placeholder='username' ref={ref2}  required />
              <ImUserTie className='icon' />
            </div>
            <div className='input-box'>
              <input type="email" placeholder='Email' ref={ref3}  required />
              <MdMarkEmailRead className='icon' />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' ref={ref4}  required />
              <HiMiniLockClosed className='icon' />
            </div>
            <div className='input-box-radio'>
            <input type="radio" name='user_type' ref={ref5} />Admin     <input type="radio" name='user_type' ref={ref5}  />User
            </div>
            <div className='remember-forgot'>
              <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>
            <button type='submit' onClick={register}>Register</button>
            <div className='register-link'>
              <p>Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginRegister;