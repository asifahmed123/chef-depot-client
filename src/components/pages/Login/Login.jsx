import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
     const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
     const [error, setError] = useState('')
     const navigate = useNavigate()
     const location = useLocation()
     console.log(location);
     const from = location.state?.from?.pathname || '/';

     const handleLogin = (event) => {
          event.preventDefault()
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);

          signIn(email, password)
               .then(result => {
                    console.log(result.user);
                    navigate(from)
               })
               .catch(error => {
                    setError(error.message)
                    console.log(error.message);
               })
     }

     const handleGoogleSignIn = () => {
          googleSignIn()
               .then(result => {
                    console.log(result.user);
                    navigate(from)
               })
               .catch(error => {
                    console.log(error.message);
               })
     }

     const handleGithubSignIn = () => {
          githubSignIn()
               .then(result => {
                    console.log(result.user);
                    navigate(from)
               })
               .catch(error => {
                    console.log(error.message);
               })
     }
     return (
          <>
               <div className='flex justify-center items-center'>
                    <form onSubmit={handleLogin} className="flex flex-col gap-4 w-[30%]">
                         <h2 className='text-5xl font-bold'>Please Login...</h2>
                         <div>
                              <div className="mb-2 block">
                                   <Label
                                        htmlFor="email1"
                                        value="Your email"
                                   />
                              </div>
                              <TextInput
                                   id="email1"
                                   type="email"
                                   name="email"
                                   required={true}
                              />
                         </div>
                         <div>
                              <div className="mb-2 block">
                                   <Label
                                        htmlFor="password1"
                                        value="Your password"
                                   />
                              </div>
                              <TextInput
                                   id="password1"
                                   name="password"
                                   type="password"
                                   required={true}
                              />
                         </div>
                         <Button type="submit">
                              Login
                         </Button>
                         <p className='text-red-500'>{error}</p>
                         <p>New to this website? please <Link className='text-blue-500' to='/register'>Register</Link></p>
                         <div className='flex'>
                              <button onClick={handleGoogleSignIn} className='flex items-center bg-amber-500 px-3 py-2 rounded'><FaGoogle></FaGoogle><span className='ms-2'>Google Login</span></button>
                              <button onClick={handleGithubSignIn} className='flex items-center bg-stone-300 px-3 py-2 rounded ms-2'><FaGithub></FaGithub><span className='ms-2'>Github Login</span></button>
                         </div>
                    </form>
                    <div className='w-[50%]'>
                         <img className='' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1683040097~exp=1683040697~hmac=50ffbf1ce8d488f8acdcd9d1a8de05873998ce46261c0aaa00420a842137a18f" alt="" />
                    </div>
               </div>
          </>
     );
};

export default Login;