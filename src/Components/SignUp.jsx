import React,{useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Loginpic from "../Components/Assits/loginpic.jpg";
import Input from "../Common/Input";
import { useDispatch, useSelector } from "react-redux";
import { image_Upload, register_user_post_async } from "../Store/Service/AuthService";

import { Toaster, toast } from 'sonner'
import { asyncStatus } from "../Utils/Async_Status";


function SignUp() {

const nav = useNavigate()
  const dispatch = useDispatch()
   
  




  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };






  const handleSubmit = async () => {
    // You can handle form submission logic here


    if(formData.fullName && formData.email && formData.password && formData.confirmPassword){



if(formData.password === formData.confirmPassword){

  if(formData.fullName && formData.email && formData.password && formData.confirmPassword && formData.phoneNumber){

    const post_data = {
      email:formData.email,
      name:formData.fullName,
      password:formData.password,
      passwordRepeat:formData.confirmPassword,
      phoneNumber:formData.phoneNumber,
      profilePictureUrl:formData.profileImage ? formData.profileImage : "https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg" ,
      role: "user",
    }
    
    
    console.log(post_data)
    
    
    await dispatch(register_user_post_async(post_data))
    .then(res => {
      toast.success("Account has been Created please Login")

    console.log(res,">>>>>>>>>>")
    })
    .catch(e => {
    
      console.log(e.message);
    });
    
    
    
    
    
    }





}else{
  toast.error("Please Enter Same Password")
}

}else{
  toast.error("Please Enter Data in All Fields")

}













  };








  return (
    <>
      <section>
      <Toaster position="top-right" />
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
          <div className="flex items-center justify-center h-screen px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-xl font-bold leading-tight text-black sm:text-4xl">
                Sign up
              </h2>
              <p className="my-5 text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-black transition-all duration-200 hover:underline"
                >
                  Sign In
                </Link>
              </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-900"
                      >
                        Full Name
                      </label>
                      <div className="mt-2">
                        <Input placeholder="Full Name" type="text" name={"fullName"}  onChange={handleChange} />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-900"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <Input placeholder="Phone Number" type="number"  name={"phoneNumber"} onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <Input placeholder="Email" type="email" name={"email"}  onChange={handleChange} />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2"> 
                        <Input placeholder="Password" type="password" name={"password"} onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-2">
                        <Input placeholder="confirm Password" type="password" name={"confirmPassword"} onChange={handleChange} />
                      </div>
                    </div>

                 
                  </div>


     
                  <div>
                    <button
                    onClick={handleSubmit}
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Create Account{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              <div className="mt-3 space-y-3"></div>
            </div>
          </div>
          <div className="h-screen md:block hidden w-full">
            <img
              className="mx-auto h-screen w-[100%] rounded-md object-fill"
              src={Loginpic}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
