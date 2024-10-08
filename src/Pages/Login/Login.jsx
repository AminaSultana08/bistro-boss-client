import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

import SocialSignIn from '../../Component/SocialSignIn/SocialSignIn';

const Login = () => {
    //const [disabled, setDisabled] = useState(true)
    const { signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/' ;
    console.log('state in the location login page', location.state);
    // useEffect(()=>{
    //     loadCaptchaEnginge(6); 
    // } ,[] )
    const handleLogin =e=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
          const user = result.user
          console.log(user);
          console.log();
          Swal.fire({
            title: "User login successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, { replace:true });
        })
    }

    // const handleValidateCaptcha = (e) =>{
    //     const user_captcha_value = e.target.value
    //    if (validateCaptcha(user_captcha_value) ){
    //     setDisabled(false)
    //    }else {
    //     setDisabled(true)
    //    }

    // }
    
    return (
        <div>
      <Helmet><title>Bistro boss|Login</title> </Helmet>

        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold text-red-600">Welcome to Bistro Foodies Zone! 🍽️  </h1>
            <p className="py-6">Savor the finest flavors and enjoy an unforgettable dining experience. We're delighted to have you here—bon appétit!</p>
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {/**<div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                {/* <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required /> */}
               
            
              <div className="form-control  mt-6">
                {/* todo: applye disable for ReCaptcha, disabled={disabled}  */}
                <input disabled={false}  className="btn btn-primary" type="submit" name="" value="Login"/>
              </div>
            </form>
           
            <SocialSignIn></SocialSignIn>
            <p className='text-center pb-5'><small>New Here? <Link to='/signup' className='underline text-blue-500 font-bold' >Create an account</Link> </small></p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;