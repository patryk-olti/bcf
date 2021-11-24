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
        fontFamily: 'roboto'
    }

    return(
        <button style={styles} >
            {children}
        </button>
    )
}

export default Button;