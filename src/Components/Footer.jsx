import React from "react";
import travel from "../Components/Assits/travel.png";

function Footer() {
  return (
    <>
      {/*  companies section start */}
      <div className="w-full flex lg:flex-row flex-col  sm:p-20 p-5 border-t-2 gap-10">
        <div className="lg:w-[40%] w-full flex flex-wrap flex-col justify-center items-center lg:text-start text-center">
          <h1 class="text-2xl font-bold my-3">
            We’re just keep growing with 6.3k trusted companies
          </h1>
          <p className="">
            Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean
            quis luctus ert nulla quam augue.
          </p>
        </div>

        <div className="lg:w-[60%] w-full flex lg:justify-start justify-center">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-2">
            <div className="flex flex-wrap justify-center items-center  bg-[#f8f8f8]">
              <img
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/08/25102028/Turkish-Airlines-Logo.png"
                alt=""
              />
            </div>

            <div className="flex flex-wrap justify-center items-center bg-[#f8f8f8]">
              <img
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/08/25104239/Qatar-Airways-Logo.png"
                alt=""
              />
            </div>

            <div className="flex flex-wrap justify-center items-center ">
              <img
                src="https://airhex.com/images/airline-logos/alt/emirates.png"
                alt=""
              />
            </div>

            <div className="flex flex-wrap justify-center items-center  ">
              <img
                src="https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg"
                alt=""
              />
            </div>

            <div className="flex flex-wrap justify-center items-center   ">
              <img
                src="https://beebom.com/wp-content/uploads/2018/12/Malaysia-airlines.jpg"
                alt=""
              />
            </div>

            <div className="flex flex-wrap justify-center items-center ">
              <img
                src="https://beebom.com/wp-content/uploads/2015/02/airline-logos-british-e1424575595222.jpg"
                alt=""
              />
            </div>

            <div className="flex flex-wrap justify-center items-center  ">
              <img
                src="https://1000logos.net/wp-content/uploads/2023/06/Belle-Air-Logo.jpg"
                alt=""
              />
            </div>

            <div className="flex flex-wrap justify-center items-center  ">
              <img
                src="https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*  companies section End*/}

      <footer class=" bg-black  ">
        <div class="   flex md:items-center lg:items-start lg:flex-row  md:flex-nowrap flex-wrap flex-col">
          {/*  Footer Images section start */}

          <div class=" md:w-[40%] bg-res-400 ">
            <div class="grid grid-cols-2  relative justify-items-center items-center">
              <div>
                <img
                  class="h-60  w-full "
                  src="https://media.istockphoto.com/id/1458771594/photo/two-happy-people-having-fun-on-the-beach-sitting-on-blue-sunbed-with-hands-raised-up-spending.webp?b=1&s=170667a&w=0&k=20&c=z3YZuNsM-1dhGxHeajJw0Z0XKadFkoMU2F8DeAryCIw="
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-60  w-full"
                  src="https://media.istockphoto.com/id/1476789145/photo/parents-kids-and-beach-sand-vacation-family-holiday-and-summer-sea-travel-together-in.jpg?s=612x612&w=0&k=20&c=sSECLx9iJXuUZyIay1XbikuZq4oYG3PfQ12Nu6tMG94="
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-60 w-full "
                  src="https://www.travelandleisure.com/thmb/_9nXniA6GZsRPV4UwaNrXhbKs00=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sandals-royal-caribbean-villas-ALLINC0522-3429e86c9d2841b38c7ef9757220ed1c.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-60  w-full"
                  src="https://www.hiltongrandvacations.com/-/media/aprimo/2019/11/12/00/22/d7c1646b_1ea0_4678_b2bd_a9c500030d65-892x501.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/*  Footer Images section End*/}

          {/*  Footer Links section start */}

          <div class="md:p-10 p-5 ">
            <div className="w-full flex md:flex-row flex-col items-center justify-around py-10">
              <div className="w-[60%]">
                <img className="md:w-[50%]" src={travel} alt="" />
              </div>
              <div className="flex  gap-x-5  my-3 justify-center">
                <svg
                  className="border-2 p-1"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m0 0h24v24h-24z"
                    fill="#ffffff"
                    opacity="0"
                    transform="matrix(-1 0 0 -1 24 24)"
                  />
                  <path
                    d="m17 3.5a.5.5 0 0 0 -.5-.5h-2.5a4.77 4.77 0 0 0 -5 4.5v2.7h-2.5a.5.5 0 0 0 -.5.5v2.6a.5.5 0 0 0 .5.5h2.5v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0 -.48-.63h-3.35v-2.7a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"
                    fill="#ffffff"
                  />
                </svg>
                <svg
                  className="border-2 p-1"
                  fill="#ffffff"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m31.937 6.093c-1.177.516-2.437.871-3.765 1.032 1.355-.813 2.391-2.099 2.885-3.631-1.271.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 .521.063 1.021.172 1.495-5.453-.255-10.287-2.875-13.52-6.833-.568.964-.891 2.084-.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-.031-2.083-.328-2.968-.817v.079c0 3.181 2.26 5.833 5.26 6.437-.547.145-1.131.229-1.724.229-.421 0-.823-.041-1.224-.115.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-.521 0-1.041-.025-1.563-.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-.276 0-.557-.021-.839 1.287-.917 2.401-2.079 3.281-3.396z" />
                </svg>
                <svg
                  className="border-2 p-1"
                  width="32"
                  height="32"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.5 6.51L17.51 6.49889"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className="border-2 p-1"
                  fill="#ffffff"
                  width="32"
                  height="32"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m100.28 448h-92.88v-299.1h92.88zm-46.49-339.9c-29.7 0-53.79-24.6-53.79-54.3a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zm394.11 339.9h-92.68v-145.6c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7v148.1h-92.78v-299.1h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3v164.3z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-row flex-col justify-between mx-auto max-w-screen-lg border-b px-4 py-8">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h2 className="title-font font-medium text-white text-xl mb-3 text-center md:text-left">
                  Our Stories
                </h2>
                <nav className="list-none leading-10 text-center md:text-left">
                  <li>
                    <a className="text-white hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>

              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3 text-center md:text-left">
                  Useful Links
                </h2>
                <nav className="list-none leading-10 text-center md:text-left">
                  <li>
                    <a className="text-white hover:text-gray-800">New York</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-800">London</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-800">Canada</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-800">
                      Washington DC
                    </a>
                  </li>
                </nav>
              </div>

              <div className="w-full md:w-1/3">
                <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3 text-center md:text-left">
                  Footer Menu
                </h2>
                <nav className="list-none leading-10 text-center md:text-left">
                  <li>
                    <a className="text-white hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-white hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
            </div>

            <div className="text-center my-5">
              <h1 className=" text-center text-gray-500">
                © 2024 Travel.Com Theme. All Rights Reserved.
              </h1>
            </div>
          </div>

          {/*  Footer Links section End*/}
        </div>
      </footer>
    </>
  );
}

export default Footer;
