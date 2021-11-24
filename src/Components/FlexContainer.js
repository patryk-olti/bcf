import React from 'react';

import '../Styles/_styles.sass';

const FlexContainer = ({ children, flexDirection, alignItems, justifyContent }) => {

    const styles = {
        display: 'flex',
        flexDirection: `${flexDirection}`,
        alignItems: `${alignItems}`,
        justifyContent: `${justifyContent}`,
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px'
    }

    return(
        <div style={styles} className='flexContainer--lightView'>
            {children}
        </div>
    )
}

export default FlexContainer;