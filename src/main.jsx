import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import ChefDetails from './components/ChefRecipes/ChefRecipes.jsx';
import ChefRecipes from './components/ChefRecipes/ChefRecipes.jsx';

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
        loader: ({params}) => fetch(`https://chef-depot-server-asifahmed123.vercel.app/chefs/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
