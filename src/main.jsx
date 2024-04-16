import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.jsx';
import Resume from "./pages/Resume.jsx";
import Blog from './pages/Blog.jsx';
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<About/>,
       
      },
      {
        path:"/resume",
        element:<Resume/>,
       
      },
      {
        path:"/blog",
        element:<Blog/>,
       
      },
      {
        path:"/portfolio",
        element:<Portfolio/>,
       
      },
      {
        path:"/contact",
        element:<Contact/>,
       
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
