import React from "react";

const Input = ({ placeholder, name, type }) => {

    const styles = {
        fontSize: '16px',
        padding: '4px',
        margin: '5px',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid gray',
        textAlign: 'center'
    }

    return(
        <input
            style={styles}
            placeholder={placeholder}
            name={name}
            type={type}

        />
    )
}

export default Input;