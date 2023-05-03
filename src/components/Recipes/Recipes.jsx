import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { HiHeart } from "react-icons/hi";
import { toast } from 'react-toastify';


const Recipes = ({ recipe }) => {
     const [active, setActive] = useState(true)
     const handleAccepted = () => {
          setActive(false)
          toast('Added To Favorite')
     }
     const { img, name, rating, ingredients, method } = recipe

     return (
          <div className=''>
               <Card imgSrc={img} style={{ height: '60rem' }}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                         {name}
                    </h5>
                    <div className='flex'>
                         <div className="w-[50%]">
                              <p>Ingredients:
                                   {
                                        ingredients.slice(0, 5).map((i, index) => <li key={index}>{i}</li>)
                                   }
                              </p>
                         </div>
                         <div className="w-[50%]">
                              <p>Cooking Method:
                                   {
                                        method.slice(0, 5).map((m, index) => <li key={index} className=''>{m}</li>)
                                   }
                              </p>
                         </div>
                    </div>
                    <div className='flex justify-between'>
                         <div className='flex items-center gap-4'>
                              <Rating
                                   style={{ maxWidth: 120 }}
                                   value={Math.round(rating || 0)}
                                   readOnly
                              />
                              <span>{rating}</span>
                         </div>

                         <div>
                              <button onClick={handleAccepted} disabled={!active} ><HiHeart className={!active ? 'text-slate-400 text-4xl' : 'text-red-500 text-4xl'}></HiHeart></button>
                         </div>
                    </div>
               </Card>
          </div>
     );
};

export default Recipes;