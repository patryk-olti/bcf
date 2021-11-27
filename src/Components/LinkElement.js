import React, { useContext } from "react";

import { AppContext } from "../AppContext";

import { Link } from 'react-router-dom';

const LinkElement = ({ children, path }) => {

    const { isDark } = useContext(AppContext);

    const styles = {
        display: 'block',
        textDecoration: 'none',
        color: isDark ? 'white' : 'black'
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