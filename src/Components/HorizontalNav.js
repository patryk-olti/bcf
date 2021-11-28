import React from 'react';

const HorizontalNav = ({ children }) => {

    const styles = {
        display: 'flex',
    }

    return(
        <div>
            { children }
        </div>
    )
}

export default HorizontalNav;