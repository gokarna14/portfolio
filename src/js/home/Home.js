import React from "react";
import { Parallax } from "react-parallax";


import { spacing, profiles, themeRGB, themeRGB2 } from "../essentials";
import '../../css/home/home.css'
import Parallel from "../animations/Parallel";
import { OfficialPortrait } from "../../db/img/img";

const Home = (props)=>{

    

    const renderProfiles = profiles.map(
        (i)=>{
            return(
                <a href={i.link} 
                style={{
                    textDecoration:'none'
                }}
                target="blank"> {i.logo} / </a>
            )
        }
    )



    return(
        <>
            <div className="">
                <Parallax
                blur={0} 
                bgImage={OfficialPortrait[props.index]} 
                strength={250}
                
                >
                {spacing}
                <div className="fullInfo">
                    <div className='niceCenter'>
                        <div className="info">
                            <h1 className="heading">
                                Hi, I am Gokarna Adhikari
                                <hr />
                            </h1>
                            <h className="description">
                                This is Gokarna Adhikari, Prabas. 
                                <br />
                                I am a <span className="emphasizeBold">full stack developer</span>, an AI enthusiast and a life long learner !
                                <br />
                                <hr />
                                Undergrad Student
                                <br />
                                <a 
                                    href="https://pcampus.edu.np/"
                                    title="Go to Pulchowk Campus Website"
                                    className="link-warning emphasize"
                                    target="blank"
                                >
                                    Pulchowk Engineering Campus
                                </a> 
                                <br/>
                                <a 
                                    href="http://doece.pcampus.edu.np/props.index.php/bex-becie/"
                                    title="See course structure"
                                    className="link-warning emphasize"
                                    target="blank"
                                >
                                    Electronics, Communication and Information Engineering 
                                </a>
                                <br />
                                Class of 2023 [ <a 
                                    href="http://doece.pcampus.edu.np/props.index.php/students-bachelor-in-electronics-and-communication-engineering/"
                                    className="link-warning emphasize"
                                    target="blank"
                                >
                                    2075 BATCH
                                </a> ]
                                <hr />
                                    {renderProfiles}
                                <hr />
                                <button 
                                    className="btn btn-dark"
                                    style={{
                                        float: 'left'
                                    }}>
                                        Download CV
                                </button>
                                
                            </h>
                        </div>
                    </div>    
                </div>
                {spacing}
                {spacing}
                </Parallax>
            </div>
        </>
    )
}

export default Home;