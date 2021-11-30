import React from 'react';

import '../Styles/_styles.sass';

const FlexContainer = ({ children, flexDirection, alignItems, justifyContent, padding, borderBool, size }) => {

    const styles = {
        display: 'flex',
        flexDirection: `${flexDirection}`,
        alignItems: `${alignItems}`,
        justifyContent: `${justifyContent}`,
        padding: `${padding}`,
        border: `${borderBool ? '1px solid black' : null}`,
        borderRadius: '5px',
        boxShadow: `${borderBool ? '1px 1px 3px 0px rgba(0,0,0,0.75)' : null}`,
        minHeight: `${size}`,
        minWidth: `${size}`
    }

    return(
        <div style={styles} className='flexContainer--lightView'>
            {children}
        </div>
    )
}

export default FlexContainer;