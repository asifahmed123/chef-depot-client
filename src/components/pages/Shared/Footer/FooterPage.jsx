import { Footer } from 'flowbite-react';
import React from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterPage = () => {
     return (
          <Footer container={true}>
               <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                         <div>
                              {/* <Footer.Brand
                                   href="https://flowbite.com"
                                   src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148983042.jpg?w=740&t=st=1682975487~exp=1682976087~hmac=8f4a9c454f969b185947222e181b343e06178b5938a7829d28fcf15d38955731"
                                   alt="Flowbite Logo"
                                   name="Flowbite"
                              /> */}
                              <img className='w-40 rounded-full mb-8' src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148983042.jpg?w=740&t=st=1682975487~exp=1682976087~hmac=8f4a9c454f969b185947222e181b343e06178b5938a7829d28fcf15d38955731" alt="" />
                         </div>
                         <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                              <div>
                                   <Footer.Title title="about" />
                                   <Footer.LinkGroup col={true}>
                                        <Footer.Link href="#">
                                             Flowbite
                                        </Footer.Link>
                                        <Footer.Link href="#">
                                             Tailwind CSS
                                        </Footer.Link>
                                   </Footer.LinkGroup>
                              </div>
                              <div>
                                   <Footer.Title title="Follow us" />
                                   <Footer.LinkGroup col={true}>
                                        <Footer.Link href="#">
                                             Github
                                        </Footer.Link>
                                        <Footer.Link href="#">
                                             Discord
                                        </Footer.Link>
                                   </Footer.LinkGroup>
                              </div>
                              <div>
                                   <Footer.Title title="Legal" />
                                   <Footer.LinkGroup col={true}>
                                        <Footer.Link href="#">
                                             Privacy Policy
                                        </Footer.Link>
                                        <Footer.Link href="#">
                                             Terms & Conditions
                                        </Footer.Link>
                                   </Footer.LinkGroup>
                              </div>
                         </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                         <Footer.Copyright
                              href="#"
                              by="Flowbite™"
                              year={2022}
                         />
                         <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                              <Footer.Icon
                                   href="#"
                                   icon={FaFacebook}
                              />
                              <Footer.Icon
                                   href="#"
                                   icon={FaInstagram}
                              />
                              <Footer.Icon
                                   href="#"
                                   icon={FaTwitter}
                              />
                              <Footer.Icon
                                   href="#"
                                   icon={FaGithub}
                              />
                              <Footer.Icon
                                   href="#"
                                   icon={FaDribbble}
                              />
                         </div>
                    </div>
               </div>
          </Footer>
     );
};

export default FooterPage;