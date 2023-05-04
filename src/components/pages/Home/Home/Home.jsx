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
                         <img className='rounded-full mx-auto h-80 lg:h-full' src="https://starbelly.bslthemes.com/wp-content/uploads/2022/03/girl.png" alt="" />
                    </div>
               </div>


               <div>
                    <div className='flex justify-between mb-20'>
                         <div>
                              <h2 className='text-5xl font-bold mb-6'>What do you like today?</h2>
                              <p className='text-xl font-normal'>There are varieties of dishes. You can chose any one these dishes you want.</p>
                         </div>
                         <div>
                              <button className='bg-amber-400 flex items-center px-4 py-3'><FaUtensils></FaUtensils><span className='px-2'>Our Menu</span></button>
                         </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-4 mb-20'>
                         <div className='flex gap-10 bg-slate-200 p-2 rounded-md w-full mx-auto'>
                              <img className='w-20' src="https://starbelly.bslthemes.com/wp-content/uploads/2022/05/category-1.png" alt="" />
                              <div>
                                   <h5 className='font-bold text-2xl mb-2'>Starter</h5>
                                   <p className='text-xl font-normal'>Get your best starter pack</p>
                              </div>
                         </div>         
                         <div className='flex gap-10 bg-slate-200 p-2 rounded-md w-full mx-auto'>
                              <img className='w-20' src="https://starbelly.bslthemes.com/wp-content/uploads/2022/05/category-2.png" alt="" />
                              <div>
                                   <h5 className='font-bold text-2xl mb-2'>Main Dishes</h5>
                                   <p className='text-xl font-normal'>Get your best starter pack</p>
                              </div>
                         </div>         
                         <div className='flex gap-10 bg-slate-200 p-2 rounded-md w-full mx-auto'>
                              <img className='w-20' src="https://starbelly.bslthemes.com/wp-content/uploads/2022/05/category-3.png" alt="" />
                              <div>
                                   <h5 className='font-bold text-2xl mb-2'>Drinks</h5>
                                   <p className='text-xl font-normal'>Get your best starter pack</p>
                              </div>
                         </div>         
                         <div className='flex gap-10 bg-slate-200 p-2 rounded-md w-full mx-auto'>
                              <img className='w-20' src="https://starbelly.bslthemes.com/wp-content/uploads/2022/05/category-4.png" alt="" />
                              <div>
                                   <h5 className='font-bold text-2xl mb-2'>Desserts</h5>
                                   <p className='text-xl font-normal'>Get your best starter pack</p>
                              </div>
                         </div>         
                    </div>
               </div>


               <h2 className='text-5xl font-bold text-center mb-6 text-amber-500'>Recipe Gallery</h2>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8'>
                    <img className="h-56 w-72 mx-auto lg:h-96 lg:w-[100%]"
                         src="https://img.freepik.com/premium-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion_2829-3740.jpg?w=1380"
                         alt="..."
                    />
                    <img className="h-56 w-72 mx-auto lg:h-96 lg:w-[100%]"
                         src="https://img.freepik.com/premium-photo/fried-rice-with-vegetables-plate_202769-219.jpg?w=996"
                         alt="..."
                    />
                    <img className="h-56 w-72 mx-auto lg:h-96 lg:w-[100%]"
                         src="https://img.freepik.com/free-photo/thai-food-fried-noodle-with-pork-soy-sauce-vegetable_1150-27841.jpg?w=996&t=st=1683114619~exp=1683115219~hmac=8b82a9cf258e3328c95ef06f55de30d15adefb517836bf407b88418547eb1c20"
                         alt="..."
                    />
                    <img className="h-56 w-72 mx-auto lg:h-96 lg:w-[100%]"
                         src="https://img.freepik.com/free-photo/pad-thai-white-plate-with-lemon-eggs-seasoning-wooden-table_1150-21208.jpg?w=996&t=st=1683114633~exp=1683115233~hmac=8f9ed6e1e3b4c6918109991a355ecf43f6066272b91bc61b41bb112cc3fd7e02"
                         alt="..."
                    />
                    <img className="h-56 w-72 mx-auto lg:h-96 lg:w-[100%]"
                         src="https://img.freepik.com/premium-photo/rice-with-pork-leg_45583-810.jpg?w=996"
                         alt="..."
                    />
               </div>

               <h2 className='text-5xl font-bold text-center mb-6 text-amber-500'>Our Chefs</h2>
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