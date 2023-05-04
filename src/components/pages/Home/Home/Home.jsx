import React from 'react';
import { FaChevronRight, FaUtensils } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';

const Home = () => {
     const chefs = useLoaderData()
     return (
          <>
               <div className='lg:flex mx-auto justify-center items-center mb-20 mt-20'>
                    <div className='lg:w-[50%] text-center lg:text-start'>
                         <h2 className='text-4xl lg:text-7xl  font-bold mb-7'>We do not cook, <br />
                              we create your <br />
                              emotions!
                         </h2>
                         <p className='lg:text-xl mb-7'>There are thousand of cooks around the world, among them, you will find the best ones here.</p>
                         <div className='flex justify-center lg:justify-start'>
                              <button className='bg-amber-400 flex items-center px-4 py-3'><FaUtensils></FaUtensils><span className='px-2'>Our Menu</span></button>
                              <button className='bg-stone-300 flex items-center px-4 py-3 ms-2'><FaChevronRight></FaChevronRight><span className='px-2'>About Us</span></button>
                         </div>
                    </div>
                    <div className='lg:h-full lg:w-[50%]'>
                         <img className='rounded-full mx-auto h-80 lg:h-full'  src="https://starbelly.bslthemes.com/wp-content/uploads/2022/03/girl.png" alt="" />
                    </div>
               </div>

               <div className='grid lg:grid-cols-3 gap-2 ps-2 mb-10'>
                    {
                         chefs.map(chef => <Chefs
                              key={chef.id}
                              chef={chef}>
                         </Chefs>)
                    }
               </div>
          </>
     );
};

export default Home;