import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../DetailsPages/ChefRecipes/ChefRecipes";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://chef-depot-server-asifahmed123.vercel.app/chefs/')
               },
               {
                    path: '/ChefRecipes/:id',
                    element: <ChefRecipes></ChefRecipes>,
                    loader: ({ params }) => fetch(`https://chef-depot-server-asifahmed123.vercel.app/chefs/${params.id}`)
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               }
          ]
     },
]);

export default router;