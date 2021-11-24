import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ iconSun, iconMoon, isDark, handleClick }) => {

    const styles = {
        position: 'absolute',
        top: '1em',
        right: '1em',
        color: isDark ? 'white' : 'black',
        cursor: 'pointer',
        fontSize: '2em'
    }

    const renderIcon = isDark ? iconMoon : iconSun;
    
    return(
        <FontAwesomeIcon 
            style={styles}
            icon = {renderIcon}
            onClick={handleClick}    
        />
    )
}

export default Icon;