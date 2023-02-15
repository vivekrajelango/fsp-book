import React from "react";
import { useRoutes } from "react-router-dom";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Post from "./Components/Post";


const AppRoute=()=>{
    let Routes = useRoutes([
        {
            path:'/',
            element: <Home />
        },
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/profile/:id',
            element: <Profile />
        },
        {
            path:'/post',
            element: <Post />
        }
    ])
    return Routes
}

export default AppRoute