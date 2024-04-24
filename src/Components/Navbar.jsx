import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout_user_post_async } from '../Store/Service/AuthService'
import { Toaster, toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'Become a tiket.com Partner', href: '/home/partner', current: true },
  { name: 'Blibli Rewards Tickets', href: '/home/rewards', current: false },
  { name: 'Check Orders', href: '/home/orders', current: false },
  // { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ openModal, openModal2 }) {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { user_login_status } = useSelector((state) => state.auth);

  const [scrolling, setScrolling] = useState(false);
 // const { login_data } = useSelector((state) => state.auth);
 const [login_data,setlogin_data]=useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 330) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

   

  }, []);



  useEffect(()=>{
    async function getUserData() {
      const data = await localStorage.getItem("user_data");
      if (data) {
        const parsedData = JSON.parse(data); // Parse JSON data
        setlogin_data(parsedData); // Store data in state
      }
    }
    getUserData();
  },[user_login_status])

  const sign_Out = async () => {

    const res = await dispatch(logout_user_post_async());
    if (res) { // Assuming res indicates a successful logout (true)
      toast.success("Logout User!");
      console.log(res, ">>>>>>>>>>");
      setTimeout(() => {
        navigate("/"); // Navigate to the home page after successful logout
      }, 2000); // 2000 milliseconds = 2 seconds (adjust as needed)
    } else {
      toast.error("Somthing wrong!");
    }

  };






  return (
    <Disclosure as="nav" className={`fixed w-full z-50 navbar  backdrop-blur-lg ${scrolling ? 'navbar-scroll-bg' : ''}`}>
      {({ open }) => (
        <>
          <Toaster position="top-right" />

          <div className="mx-auto  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className=" inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-1 mx-2 text-white  hover:text-black focus:outline-none  ">
                  {/* <span className="absolute -inset-0.5" /> */}
                  <span className="sr-only">Open main menu</span>
                  <div >

                    {open ? (
                      <IoMdClose size={25} />

                      // <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <>
                        <IoMdMenu size={25} />
                      </>
                      // <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </div>
                </Disclosure.Button>
              </div>
              <div className="flex flex-shrink-0 items-center">
              <Link to="/home/page">
              
                <h1 className='text-xl text-white'>Travel.Com</h1>
              </Link>
              
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.href}>
                      <span
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-white' : 'text-white  hover:text-white',
                          'rounded-md px-3 py-2 text-xs font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="sm:block w-full hidden  outline-none rounded-3xl border-0 py-1.5 px-7 ml-5 text-gray-900 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
              

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative h-10 w-10 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                          className="h-10 w-10 rounded-full outline-none" 
                          src={login_data?.profilePictureUrl}
                          alt="..."
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            onClick={openModal}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            onClick={openModal2}

                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            onClick={() => sign_Out()}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">

              {navigation.map((item) => (

                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}

                </Disclosure.Button>

              ))}

            </div>
          </Disclosure.Panel>




        </>
      )}
    </Disclosure>





  )
}





