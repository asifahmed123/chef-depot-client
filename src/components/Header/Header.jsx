import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Header = () => {
     return (

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
                         label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                         <Dropdown.Header>
                              <span className="block text-sm">
                                   Bonnie Green
                              </span>
                              
                         </Dropdown.Header>
                    </Dropdown>
                    <Navbar.Toggle />
               </div>
               <Navbar.Collapse>
                    <ActiveLink to='/'><span className='lg:text-2xl'>Home</span></ActiveLink>
                    <ActiveLink to='/blog'><span className='lg:text-2xl'>Blog</span></ActiveLink>
               </Navbar.Collapse>
          </Navbar>

     );
};

export default Header;