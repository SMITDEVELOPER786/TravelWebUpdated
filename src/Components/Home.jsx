import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  image_Upload,
  login_user_post_async,
  update_profile_post_async,
} from "../Store/Service/AuthService";
import { Route, Routes } from "react-router-dom";
import AllComp from "./AllComp";
import Partner from "./Partner";
import RewardsTickets from "./RewardsTickets";
import CheckOrders from "./CheckOrders";
import { ClipLoader } from "react-spinners"; // Importing a specific loader
import { Toaster, toast } from "sonner";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <div>
      <Navbar
        openModal={() => setShowModal(true)}
        openModal2={() => setShowModal2(true)}
      />
      <Toaster position="top-right" />

      <Routes>
        <Route path="/page" element={<AllComp />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/rewards" element={<RewardsTickets />} />
        <Route path="/orders" element={<CheckOrders />} />
      </Routes>

      <Modal showModal={showModal} setShowModal={setShowModal} />

      <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} />
    </div>
  );
}

export default Home;

// Modal.js

function Modal({ showModal, setShowModal }) {
  const { user_login_status } = useSelector((state) => state.auth);
  const [login_data, setlogin_data] = useState(null);
  // Use useEffect to retrieve data from Local Storage
  useEffect(() => {
    async function getUserData() {
      const data = await localStorage.getItem("user_data");
      if (data) {
        const parsedData = JSON.parse(data); // Parse JSON data
        setlogin_data(parsedData); // Store data in state
      }
    }
    getUserData();
  }, [user_login_status]); // Empty dependency array to ensure this runs only once on component mount

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-50">
            <h2 className="text-xl font-bold mb-4">Profile Information</h2>
            <img
              src={login_data?.profilePictureUrl}
              alt="Profile Picture"
              className="w-20 h-20 rounded-full object-cover mt-4"
            />
            <p className="text-gray-700">
              <strong>Name:</strong> {login_data?.name}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {login_data?.email}
            </p>

            <p className="text-gray-700">
              <strong>Phone Number:</strong> {login_data?.phoneNumber}
            </p>

            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Modal2({ showModal2, setShowModal2 }) {
  const { userEmail,userPassword } = useSelector((state) => state.banners);
console.log(userEmail,userPassword);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Loading state
const [emailagain,setemailagain]=useState("")
const [passagain,setpassagain]=useState('')

useEffect(()=>{
 const emailagai = localStorage.getItem('user_em')
 setemailagain(emailagai)
 const pass =localStorage.getItem('user_ps')
 setpassagain(pass)
},[])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profilePictureUrl: "",
    phoneNumber: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // Image ke liye alag state
  const [image, setImage] = useState(null);
  const [uploadImageData, setUploadImageData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      // Agar yeh file input hai, toh image state mein set karen
      const selectedImage = files[0]; // Pehli file ko lein
      setImage(selectedImage);
      setLoading(true);
      uploadImage(selectedImage);
    } else {
      // Baqi fields ko formData mein set karen
      setFormData({ ...formData, [name]: value });
    }
  };

  //   const uploadImage = async ()=>{

  //     // console.log(image);
  //     const submitData = new FormData();

  //       submitData.append('image',image);

  //       await dispatch(image_Upload(submitData))
  //       .then((res)=>{

  //         console.log(res);
  //       }).catch((e)=>{
  //         console.log(e);
  //       })

  //   }

  //     const  handleSubmit = async (e) => {
  //       e.preventDefault();

  //   console.log(upload_image_data);
  //       const post_data = {
  //         name: formData.name,
  //         email: formData.email,
  //         profilePictureUrl: upload_image_data ,
  //         phoneNumber: formData.phoneNumber,
  //       }

  // if(upload_image_data){

  //  // You can handle form submission here
  //  try {
  //   await dispatch(update_profile_post_async(post_data)).then((res)=>{
  //     console.log(res);
  //   }).catch((e)=>{
  //     console.log(e);
  //   })

  // } catch (error) {
  //   // Handle any errors
  //   console.error("Error fetching categories:", error);
  // }

  // }else{
  //   console.log("cant Upload image");
  // }

  //       // After handling submission, you may want to close the modal
  //       setShowModal2(false);
  //     };
  const uploadImage = async (img) => {
    const submitData = new FormData();
    submitData.append("image", img); // Append image to form data

    try {
      const result = await dispatch(image_Upload(submitData)).unwrap(); // Use unwrap() to get result
      setUploadImageData(result.url); // Set the uploaded image URL
      console.log(result.url, "me hun naw result");
      if (result) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      setLoading(false);

      throw error; // Throw error if upload fails
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      try {
        // await uploadImage(); // First upload the image
        console.log(uploadImageData);
        const postData = {
          name: formData.name,
          email:emailagain,
          profilePictureUrl: uploadImageData, // Use the uploaded image URL
          phoneNumber: formData.phoneNumber,
        };

        const result = await dispatch(
          update_profile_post_async(postData)
        ).unwrap();
        console.log("Profile updated successfully:", result);
        toast.success('Profile updated successfully');
        if(result){
          handleAgainLogin()
        }
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    } else {
      console.log("Please select an image to upload.");
    }
    setShowModal2(false);
  };

  const handleAgainLogin = async () => {
    // You can handle form submission logic here

   
      const post_data = {
        email: emailagain,
        password: passagain,
      };

      console.log(post_data);

      await dispatch(login_user_post_async(post_data))
        .then((res) => {
          console.log(res);
          
        })
        .catch((e) => {
          console.log(e.message);
        });
    
  };


  return (
    <>
      {showModal2 && (
        <div className="fixed inset-0 flex items-center justify-center z-10 font-quicksand">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-50">
            <h2 className="text-xl font-bold mb-4 font-quicksand">
              Update Profile
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    readOnly
                    value={emailagain}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="profilePictureUrl"
                  >
                    Profile Picture URL:
                  </label>
                  {loading ? (
                    <div style={{ textAlign: "center", padding: "20px" }}>
                      <ClipLoader color="#123abc" loading={loading} size={50} />
                      <h1> Upload Image</h1>
                    </div>
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter profile picture URL"
                    />
                  )}
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  onClick={() => setShowModal2(false)}
                >
                  Close
                </button>
                {uploadImageData ? (
                  <button
                    type="submit"
                    className="bg-[#38bdf8] hover:bg-[#51abd1] text-white font-bold py-2 px-4 rounded"
                  >
                    Update Profile
                  </button>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
