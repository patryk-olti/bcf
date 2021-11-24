import React from 'react';

import '../Styles/_styles.sass';

const FlexContainer = ({ children, flexDirection, alignItems, justifyContent, padding }) => {

    const styles = {
        display: 'flex',
        flexDirection: `${flexDirection}`,
        alignItems: `${alignItems}`,
        justifyContent: `${justifyContent}`,
        padding: `${padding}`,
        border: '1px solid black',
        borderRadius: '5px',
        boxShadow: `1px 1px 3px 0px rgba(0,0,0,0.75)`
    }

    return(
        <div style={styles} className='flexContainer--lightView'>
            {children}
        </div>
    )
}

export default FlexContainer;