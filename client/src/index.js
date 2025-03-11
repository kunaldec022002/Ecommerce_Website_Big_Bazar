import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Views/Home/Home';
import './index.css'
import Signup from './Views/Signup/Signup';
import Login from './Views/Login/Login';
import Buy from './Views/Buy/Buy';
import MyOrders from './Views/MyOrders/MyOrders';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Contact from './Views/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
  "path":"/",
  "element":<Home/>
  },

  {
    "path":"/contact",
    "element":<Contact/>
  },

  {
    "path":"/signup",
    "element":<Signup/>
  },

  {
    "path":"/login",
    "element":<Login/>
  },

  {
    "path":"/buy/:id",
    "element":<Buy/>
  },

  {
    "path":"/my-orders",
    "element":<MyOrders/>
  }
  
 ])
root.render( <RouterProvider router ={router}/>);


