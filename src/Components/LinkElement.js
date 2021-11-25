import React from "react";

import { Link } from 'react-router-dom';

const LinkElement = ({ children, path }) => {

    const styles = {
        display: 'block',
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