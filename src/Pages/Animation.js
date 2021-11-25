import React, { useEffect, useRef } from "react";

import { gsap } from 'gsap';

const Animation = () => {

    const styles = {
        background: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#120C6B'
        },
        square: {
            width: '40px',
            height: '40px',
            border: '5px solid white',
            overflow: 'hidden'
        },
        squareBackground: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            transform: 'translateY(100%)'
        }
    }

    const squareRef = useRef();
    const squareBackgroundRef = useRef();
    const backgroundRef = useRef();
    const tl = gsap.timeline();

    useEffect( () => {
        tl.to(squareRef.current, {
            rotate: 360,
            duration: 0.6
        })
        .to(squareBackgroundRef.current, {
            y: 0,
            duration: 0.6
        })
        .to(squareRef.current, {
            rotate: 0,
            duration: 0.6
        })
        .to(squareBackgroundRef.current, {
            y: '100%',
            duration: 0.6
        })
        .to(squareRef.current, {
            rotate: 360,
            duration: 0.6
        })
        .to(squareBackgroundRef.current, {
            y: 0,
            duration: 0.6
        })
        .to(squareRef.current, {
            rotate: 0,
            duration: 0.6
        })
        .to(squareBackgroundRef.current, {
            y: '100%',
            duration: 0.6
        })
        .to(backgroundRef.current, {
            y: '-100%',
            duration: 1
        })
    })

    return(
        <div style={styles.background} ref={backgroundRef} >
            <div style={styles.square} ref={squareRef} >
                <div style={styles.squareBackground} ref={squareBackgroundRef} >
                </div>
            </div>
        </div>
    )
}

export default Animation;