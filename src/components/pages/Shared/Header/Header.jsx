import React, { useContext, useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const Header = () => {
     const { user, logOut } = useContext(AuthContext);
     const [isOpen, setIsOpen] = useState(false)

     const handleLogout = () => {
          logOut()
               .then(() => { })
               .catch(error => {
                    console.log(error.message);
               })
     }

     return (
          <>
               <Navbar
                    fluid={true}
                    rounded={true}
               >
                    <Navbar.Brand href="https://flowbite.com/">
                         <img
                              src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148983042.jpg?w=740&t=st=1682975487~exp=1682976087~hmac=8f4a9c454f969b185947222e181b343e06178b5938a7829d28fcf15d38955731"
                              className="mr-3 h-10 lg:h-20 rounded-full"
                              alt="Flowbite Logo"
                         />
                         <span className="self-center whitespace-nowrap lg:text-3xl font-bold dark:text-white">
                              Chef-Depot
                         </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                         <Dropdown
                              arrowIcon={false}
                              inline={true}
                         >
                         </Dropdown>
                         {
                              user ? <> <a data-tooltip-id="my-tooltip" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                                   {<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                              </a> <button onClick={handleLogout} className='bg-stone-300 font-bold px-3 py-2 ms-2 rounded'>Logout</button></>
                                   :
                                   <button className='bg-stone-300 font-bold px-3 py-2 rounded'><Link to='/login'>Login</Link></button>
                         }
                         <Tooltip
                              id="my-tooltip"
                              content={user ? user.displayName : ""}
                              isOpen={isOpen}
                         />
                         <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                         <ActiveLink to='/'><span className='lg:text-2xl'>Home</span></ActiveLink>
                         <ActiveLink to='/blog'><span className='lg:text-2xl'>Blog</span></ActiveLink>
                         <ActiveLink to='/login'><span className='lg:text-2xl'>Login</span></ActiveLink>
                    </Navbar.Collapse>
               </Navbar>
               <hr className='border-2'/>
          </>
     );
};

export default Header;