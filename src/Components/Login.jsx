import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginpic from "../Components/Assits/loginpic.jpg";
import Input from "../Common/Input";
import { useDispatch } from "react-redux";
import { setEmail, setPassword } from "../Store/Slice/BannerSlice"; // Naye Redux actions

import { login_user_post_async } from "../Store/Service/AuthService";
import { Toaster, toast } from "sonner";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Redux state mein email aur password ko update karna
    if (name === "email") {
      dispatch(setEmail(value));
      localStorage.setItem("user_em",value)
    } else if (name === "password") {
      dispatch(setPassword(value));
      localStorage.setItem("user_ps",value)

    }


  };

  const handleSubmit = async () => {
    // You can handle form submission logic here

    if (formData.email && formData.password) {
      const post_data = {
        email: formData.email,
        password: formData.password,
      };

      console.log(post_data);

      await dispatch(login_user_post_async(post_data))
        .then((res) => {
          console.log(res);
          if (res.error) {
            toast.warning(res.error.message);
          } else {
            toast.success(res.payload.message);
        
        // Wait for a short delay before navigating
        setTimeout(() => {
          navigate("/home/page", { replace: true }); 
        }, 2000); // 2000 milliseconds = 2 seconds (adjust as needed)
          }
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  };

  return (
    <section>
      <Toaster position="top-right" />

      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex items-center justify-center h-screen px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                <Link to="/signup"> Create a free account</Link>
              </a>
            </p>
            <div className="space-y-5 mt-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <Input
                    placeholder={"Email"}
                    onChange={handleChange}
                    name={"email"}
                    type={"email"}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <Input
                    placeholder={"Password"}
                    onChange={handleChange}
                    name={"password"}
                    type={"password"}
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen md:block hidden w-full">
          <img
            className="mx-auto h-screen w-[100%] rounded-md object-fill"
            src={loginpic}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default Login;
