import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import Recipes from '../../Recipes/Recipes';

const ChefRecipes = () => {
     const ChefRecipes = useLoaderData()
     const { chef_name, bio, chef_picture, likes_num, years_of_experience, num_recipes, } = ChefRecipes
     return (
          <div>
               <h2 className='text-5xl font-bold text-center'>About <span className='text-amber-500 underline'>{chef_name}</span></h2>

               <div className='mt-20 flex items-center'>
                    <div className='w-[50%]'>
                         <img className='rounded-full h-96' src={chef_picture} alt="" />
                    </div>
                    <div className='w-[50%]'>
                         <p className='text-xl font-semibold'><span className='text-amber-500 font-bold text-3xl'>Description:</span> {bio}</p>
                         <p className='text-xl font-semibold'><span className='text-amber-500 font-bold text-3xl'>Years Of Experience:</span> {years_of_experience}</p>

                         <p className='flex items-center gap-2 text-xl font-semibold'><span className='text-amber-500 font-bold text-3xl'>Likes:</span> <FaThumbsUp></FaThumbsUp> {likes_num}</p>
                         <p className='text-xl font-semibold'><span className='text-amber-500 font-bold text-3xl'>Recipes: </span> {num_recipes}</p>
                    </div>
               </div>
               <div>
                    <h2 className='text-center text-5xl text-amber-500 font-bold underline mb-10 mt-20'>Recipes:</h2>
                    <div className='grid grid-cols-3'>
                         {
                              ChefRecipes?.recipes.map((recipe, index) => <Recipes
                                   key={index}
                                   recipe={recipe}
                              ></Recipes>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default ChefRecipes;