import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { FaGoogle } from "react-icons/fa";
import SocialSignIn from "../../Component/SocialSignIn/SocialSignIn";



const SignUp = ( ) => {
  const axiosPublic = useAxiosPublic()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            //console.log('user profile info updated');
            //create user entry into the database
            const userInfo = {
              name: data.name,
              email: data.email
            }
           
            axiosPublic.post('/users', userInfo)
              .then(res => {
               
                if (res.data.insertedId) {
                  console.log('user added to the database ');
                  reset()
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/')
                }
              })

          })
          .catch(error => {
            console.log(error);
          })
      })
  }
  return (
    <>
      <Helmet><title>Bistro boss|SignUp</title> </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-red-500 ">Signup Now! 🍽️</h1>
              <p className="py-6">Savor the finest flavors and enjoy an unforgettable dining experience. We're delighted to have you here—bon appétit!🍽️ </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                  {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="url" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                  {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                  {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" name="password"  {...register("password", {
                    required: true,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/,
                    maxLength: 20,
                    minLength: 6
                  })}
                    placeholder="password" className="input input-bordered " />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600" role="alert ">password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600" role="alert ">password must be 6 characters</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600" role="alert ">password must be less than 20 characters</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600" role="alert ">password must have one upper case,one  lower case,one number and one special characters</p>
                  )}

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>

                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn hover:bg-orange-300 text-white bg-[#D1A054]" name="" value="Sign Up" />

                </div>
              </form>
              <p className="text-center">Have an Account? <Link to='/login'>Login</Link></p>
              <SocialSignIn></SocialSignIn>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;