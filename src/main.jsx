import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/LayOut/Main';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';
import Grandpa from './Grandpa/Grandpa';
import About from './Components/About/About';
import Contact from './Components/Contactt/Contact';
import Error from './Components/ErrorPage/Error';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('tShirts.json')
      },
      { 
        path:'review',
        element: <OrderReview></OrderReview>
      },
      {
        path:'grandpa',
        element: <Grandpa></Grandpa>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
    ],
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router} />
  </React.StrictMode>,
)
