import React, { useState } from "react";
import { update } from "react-spring";
import Navbar from './navbar/Navbar';
import Home from "./home/Home";
import Project from "./projects/Project";

import { themeRGB, themeRGB2, fontRGB } from "./essentials";
import { rgb } from "@react-spring/shared";


const AlwaysRender = ()=>{
    
    const[themeIndex, setThemeIndex] = useState('normal')


    function changeColor(){

        var index = localStorage.getItem('themeIndex'), themes = Object.keys(themeRGB)
        
        if ( index == null){
            index = 'normal' 
        }
        
        index = themes[(themes.indexOf(index) + 1)%themes.length]
        localStorage.setItem('themeIndex', index)
        
        console.log((themes.indexOf(index) + 1))
        
        
        var color = `rgba(${themeRGB[index].R}, ${themeRGB[index].G}, ${themeRGB[index].B}, ${1 * 1000})`,
        color2 = `rgba(${themeRGB2[index].R}, ${themeRGB2[index].G}, ${themeRGB2[index].B}, ${1 * 1000})`,
        color3 = `rgba(${fontRGB[index].R}, ${fontRGB[index].G}, ${fontRGB[index].B}, ${1 * 1000})`


        var elements = document.getElementsByClassName("fullNav")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=  color;
            elements[i].style.color =  color3;
        }
        elements = document.getElementsByTagName("button")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=  color2;
            elements[i].style.color =  color3;
        }
        elements = document.getElementsByClassName("color2")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=  color2;
        }

        var texts = ["fontColor", "description", "emphasize", "emphasizeBold", "navbarFont", "heading"]

        for (var i=0; i<texts.length; i++){
            var elements = document.getElementsByClassName(texts[i])
            for (var j = 0; j < elements.length; j++) {
                elements[j].style.color=  color3;
            }
        }

        setThemeIndex(index)
    }


    return(
        <>
            <Navbar
                changeColor={changeColor}
                index={themeIndex}
            ></Navbar>
            <Home
                index={themeIndex}
            ></Home>
            <Project
                index={themeIndex}
            ></Project>
        </>
    )
}

export default AlwaysRender;