import React, { useRef } from "react";

import gsap from "gsap";

import 'typeface-roboto';

const NavLink = ({ children, name, handleClick, fontSize, margin }) => {

    const borderRef = useRef();
    const tl = gsap.timeline();

    const styles = {
        position: 'relative',
        margin: `${margin}`,
        padding: '5px',
        fontSize: `${fontSize}px`,
        letterSpacing: '2px',
        fontFamily: 'roboto',
        cursor: 'pointer',
        overflow: 'hidden',
        
        border: {
            position: 'absolute',
            bottom: '0',
            left: '0',
            backgroundColor: 'black',
            height: '2px',
            width: '100%',
            transform: 'translateX(100%)'
        }
    }

    const onAnimation = () => {
        tl.to(borderRef.current, {
            x: '0',
            duration: 0.5
        })
    }

    const offAnimation = () => {
        tl.to(borderRef.current, {
            x: '100%',
            duration: 0.5
        })
    }

    return(
        <div style={styles} onClick={() => handleClick(name)} onMouseEnter={onAnimation} onMouseLeave={offAnimation} >
            {children}
            <div style={styles.border} ref={borderRef}></div>
        </div>
    )
}

export default NavLink;