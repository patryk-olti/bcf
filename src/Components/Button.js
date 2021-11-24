import React from "react";

import 'typeface-roboto';

const Button = ({ children, fontSize }) => {

    const styles = {
        padding: '5px 15px',
        margin: '5px',
        fontSize: `${fontSize}px`,
        letterSpacing: '2px',
        backgroundColor: 'transparent',
        border: '1px solid black',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: 'roboto',
        boxShadow: `1px 1px 2px 0px rgba(0,0,0,0.75)`
    }

    return(
        <button style={styles} >
            {children}
        </button>
    )
}

export default Button;