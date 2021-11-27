import React from "react";

import LinkElement from "./LinkElement";

import 'typeface-roboto';

const LogInOut = ({ boolState, toggleLogged }) => {

    const styles = {
        fontSize: '1em',
        color: 'white',
        letterSpacing: '2px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'roboto',
    }

    const content = boolState ? <LinkElement path="/"> logOut </LinkElement> : <LinkElement path="/login"> logIn </LinkElement>;

    return(
        <button 
            style={styles}
            onClick={toggleLogged}
            >
            {content}
        </button>
    )
}

export default LogInOut;