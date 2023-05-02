import { Card } from 'flowbite-react';
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chefs = ({ chef }) => {
     const { chef_picture, chef_name, years_of_experience, num_recipes, likes_num, bio, id } = chef
     return (
          <div className="max-w-sm">
               <Card
                    imgSrc={chef_picture}
                    style={{ height: '550px' }}
               >
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                         {chef_name}
                    </h5>
                    <p>Years of experience: {years_of_experience}</p>
                    <p>Number Of Recipes: {num_recipes}</p>
                    <p className='flex items-center gap-2'>Likes: <FaThumbsUp></FaThumbsUp> {likes_num}</p>

                    <div className="flex items-center justify-between">
                         <span className="text-3xl font-bold text-gray-900 dark:text-white">
                              $599
                         </span>
                         <Link
                              to={`/ChefRecipes/${id}`}
                              className="rounded-lg bg-amber-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
                         >
                              View Recipes
                         </Link>
                    </div>
               </Card>
          </div>
     );
};

export default Chefs;