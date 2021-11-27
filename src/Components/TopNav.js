import React from "react";

const TopNav = ({ children }) => {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '1em',
        right: '1em',
        padding: '5px'
    }

    return(
        <div style={styles}>
            {children}
        </div>
    )
}

export default TopNav;