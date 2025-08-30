import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {RouterProvider , createBrowserRouter } from "react-router-dom";
import Bag from "./components/Bag.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/>/* , loader: postLoader*/ },
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
