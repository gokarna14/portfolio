import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

import { NavTopics} from "../../db/navbar/content";
import '../../css/navbar/navbar.css'
import { themeRGB } from '../essentials';



const Navbar =(props)=>{


    const [offset, setOffset] = useState(0);
    const [showNB, setShowNB] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset);
            if(window.scrollY < 200)
                setShowNB(true);
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const styleSquare = useSpring({
        loop: true,
        from: { rotateZ: 0 }, 
        to: { rotateZ: 180 },
      })
    const styleCircle1 = useSpring({
        loop: { reverse: true },
        from: { x: 0 },
        to: { x: 230 },
    })
    const styleCircle2 = useSpring({
        loop: { reverse: true },
        from: { x: 0 },
        to: { x: -230 },
    })


    const navPosition = ['justify-content', 'justify-content-center', 'justify-content-end']

    const[navPositionIndex, setNavPositionIndex] = useState(1)


    const navItems = NavTopics.map(
        (i)=>{
            return <div>
                {/* <Link to={i.path} style={{
                    textDecoration:'none',
                    color:'white'
                    }}>
                    <div className={i.DSlass}>
                        <span className="font-weight-bold" style={{
                    textDecoration:'none',
                    color:'white' 
                    }}>{i.label}</span>
                    </div>
                </Link> */}
                <div className={i.DSlass}>
                    <div>
                        <span className='universalFont navbarFont'>
                            {i.label}
                        </span>
                    </div>
                    </div>
            </div>
        }
    )

    const moveNavbar=(to)=>{  
        // var index = navPosition.index;
        // var temp = navPosition;
        // if(to == 'left' && index > 0){
        //     temp.index = index-1
        // }
        // else if(to == 'right' && index < 2){
        //     temp.index = index+1
        //     console.log(temp)
        // }

        // setNavPosition(temp)
        // console.log(navPosition.index)
        if(to == 'left' && navPositionIndex > 0)
            setNavPositionIndex(navPositionIndex-1)
        else if(to == 'right' && navPositionIndex < 2)
            setNavPositionIndex(navPositionIndex+1)
    }

    const goToTop = (window.scrollY > 200) && <div className="page-item"
    onClick={()=>{window.scrollTo(0, 0)}}
    title="Go to top of the page"
    >
        <div className="btn btn-outline-warning" href="#" aria-label="Previous">
            <span aria-hidden="true"> Go to top ☝</span>
        </div>
    </div>


    return(
        <>
        <div className='fullNav'>
            <div className='shadow-lg'>
                <nav className={"nav-tabs navbar navbar-expand " + navPosition[navPositionIndex]}> {/* end for right */}

                    {navPositionIndex != 0 && <span className="btn"
                    title='Move Left'
                    onClick={()=>{moveNavbar('left')}}
                    >
                        <span aria-hidden="true">👈</span>
                    </span>}
                
                    {navItems}

                    <button 
                    className='btn btn-dark'
                    onClick={props.changeColor}
                    title={"Change the theme of website. Current theme: " + props.index}
                    >Change Theme
                    </button>
                    
                    {goToTop}

                    {navPositionIndex != 2 && <span className="btn"
                    title='Move Right'
                    onClick={()=>{moveNavbar('right')}}
                    >

                        <span aria-hidden="true">👉</span>
                    </span>}
                </nav>
            </div>
        </div>
    </>
    )
}

export default Navbar;