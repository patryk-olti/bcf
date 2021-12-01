import React, { useRef } from 'react';

import gsap from 'gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleToolIcon = ({ icon, name }) => {

    const tl = gsap.timeline();
    const iconRef = useRef();

    const styles = {
        icon: {
            fontSize: '60px',
            cursor: 'pointer'
        }
    }

    const mouseOnElement = () => {
        tl.to(iconRef.current, {
            x: 5,
            duration: 0.1
        }).to(iconRef.current, {
            x: -5,
            duration: 0.1
        }).to(iconRef.current, {
            x: 5,
            duration: 0.1
        }).to(iconRef.current, {
            x: -5,
            duration: 0.1
        }).to(iconRef.current, {
            x: 0,
            duration: 0.1
        })
    }

    return(
        <div ref={iconRef} onMouseEnter={mouseOnElement} >
            <FontAwesomeIcon style={styles.icon} icon={icon}  />
        </div>
    )
}

export default SingleToolIcon;