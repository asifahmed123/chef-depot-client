import { Card } from 'flowbite-react';
import React from 'react';

const Recipes = ({ recipe }) => {
     const { img, name, rating, ingredients, method } = recipe
     console.log(ingredients);
     return (
          <div className="max-w-sm">
               <Card imgSrc={img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                         {name}
                    </h5>
                    <div className='flex'>
                         <div className="w-[50%]">
                              <p>Ingredients:
                                   {
                                        ingredients.map(i => <li>{i}</li>)
                                   }
                              </p>
                         </div>
                         <div className="w-[50%]">
                              <p>Cooking Method:
                                   {
                                        method.map(m => <li>{m}</li>)
                                   }
                              </p>
                         </div>
                    </div>
                    <div>
                         <p>Rating</p>
                    </div>
               </Card>
          </div>
     );
};

export default Recipes;