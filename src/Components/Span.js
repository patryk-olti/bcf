import React from 'react';

import 'typeface-roboto';

const Span = ({ children, fontSize, margin }) => {

    const styles = {
        margin: `${margin}`,
        fontSize: `${fontSize}px`,
        letterSpacing: '2px',
        fontFamily: 'roboto'
    }

    return(
        <span style={styles}>
            {children}
        </span>
    )
}

export default Span;