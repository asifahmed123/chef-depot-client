import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';

const Main = () => {
     return (
          <div className='container lg:px-40'>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
               <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
               />
          </div>
     );
};

export default Main;