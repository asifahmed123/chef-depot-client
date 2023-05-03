import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../DetailsPages/ChefRecipes/ChefRecipes";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/ErrorPage/Error";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          errorElement: <Error></Error>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://chef-depot-server-asifahmed123.vercel.app/chefs/')
               },
               {
                    path: '/ChefRecipes/:id',
                    element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://chef-depot-server-asifahmed123.vercel.app/chefs/${params.id}`)
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/register',
                    element: <Register></Register>
               }
          ]
     },
]);

export default router;