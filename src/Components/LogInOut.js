import React, { useContext } from "react";

import { AppContext } from "../AppContext";

import LinkElement from "./LinkElement";

import 'typeface-roboto';

const LogInOut = () => {

    const { logged, toggleLogged } = useContext(AppContext);

    const styles = {
        fontSize: '1em',
        letterSpacing: '2px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'roboto'
    }

    const content = logged ? <LinkElement path="/"> logOut </LinkElement> : <LinkElement path="/login"> logIn </LinkElement>;

    return(
        <button 
            style={styles}
            onClick={logged ? toggleLogged : null}
            >
            {content}
        </button>
    )
}

export default LogInOut;