import React from "react";

import { Link } from 'react-router-dom';

const LinkElement = ({ children, path }) => {

    const styles = {
        display: 'block',
        padding: '5px 15px',
        textDecoration: 'none',
        color: 'black'
    }

    return(
        <Link 
            to={path} 
            style={styles}
        >
            { children }
        </Link>
    )
}

export default LinkElement;