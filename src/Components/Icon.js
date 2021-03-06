import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ iconSun, iconMoon }) => {

    const { isDark, toggleIsDark } = useContext(AppContext);

    const styles = {
        color: isDark ? 'white' : 'black',
        cursor: 'pointer',
        fontSize: '2em'
    }

    const renderIcon = isDark ? iconMoon : iconSun;
    
    return(
        <FontAwesomeIcon 
            style={styles}
            icon = {renderIcon}
            onClick={toggleIsDark}    
        />
    )
}

export default Icon;