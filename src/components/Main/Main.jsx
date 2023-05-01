import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
     return (
          <div className='container lg:px-40'>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;