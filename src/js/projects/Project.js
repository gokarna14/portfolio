import React from "react";
import Parallel from "../animations/Parallel";
import { spacing } from "../essentials";
import { Parallax } from "react-parallax";

import { themeRGB2 } from "../essentials";
import { projects } from "../../db/db";
import { ProjectPortrait } from "../../db/img/img";



const Project =(props)=>{


    const renderProjects=projects.map(
        (i)=>{
            return(
                <div>
                    <h5>
                        <a
                            className="link-light fontColor niceCenter"
                            style={{
                                textDecoration: 'none'
                            }}
                            href={i.link}
                            target='_blank'
                            >
                            ✔ {i.name}
                        </a>
                    </h5>
                </div>
            )
        }
    )


    return(
        <>
            <div style={{
                textAlign: "left"
            }}
            >
                <Parallel
                    r={themeRGB2[props.index].R}
                    g={themeRGB2[props.index].G}
                    b={themeRGB2[props.index].B}
                    text={'Projects'}
                ></Parallel>
            </div>

            <Parallax
                blur={3} 
                bgImage={ProjectPortrait[props.index]} 
                strength={250}                
                >
                    <br />
                    <br />
                    <div className="emphasize"
                        style={{
                            textAlign: 'left'
                        }}
                        >
                        {renderProjects}
                        {spacing}
                    </div>
                
                </Parallax>

        </>
    )

}

export default Project;