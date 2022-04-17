import React from "react";
import Home from "./home/Home";
import Navbar from './navbar/Navbar';



const AlwaysRender = ()=>{
    return(
        <>
            <Navbar></Navbar>
            <Home></Home>
        </>
    )
}

export default AlwaysRender;