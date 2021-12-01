import React from 'react';

import { faEnvelope, faUserEdit, faClock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import SingleToolIcon from '../Components/SingleToolIcon';

const ToolBar = ({ actions }) => {

    const allIcons = [faEnvelope, faUserEdit, faClock, faSignOutAlt];

    const styles = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '30%'
    }

    const iconsElements = actions.map( (icon, index) => <SingleToolIcon key={icon} icon={allIcons[index]} name={icon} /> )

    return(
        <div style={styles}>
            {iconsElements}
        </div>
    )
}

export default ToolBar;