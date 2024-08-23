
import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import  Username  from "./components/Username";
import  Password  from "./components/Password";
import  Register  from "./components/Register";
import  Profile  from "./components/Profile";
import  Recovery  from "./components/Recovery";
import  Reset  from "./components/Reset";
import { PageNotFound } from "./components/PageNotFound";
const router=createBrowserRouter([
  {
    path:'/',
    element:<Username></Username>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/Password',
    element:<Password></Password>
  },
  {
    path:'/Recovery',
    element:<Recovery></Recovery>
  },
  {
    path:'/reset',
    element:<Reset></Reset>
  },
  {
    path:'*',
    element:<PageNotFound></PageNotFound>
  },
  {
    path:'/profile',
    element:<Profile></Profile>
  }
 
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
