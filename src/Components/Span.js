import React from 'react';

const Span = ({ children, fontSize, margin }) => {

    const styles = {
        margin: `${margin}`,
        fontSize: `${fontSize}px`,
        letterSpacing: '2px'
    }

    return(
        <span style={styles}>
            {children}
        </span>
    )
}

export default Span;