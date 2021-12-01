import React from 'react';

import SingleUserElement from '../Components/SingleUserElement';

const DetailUser = ({ userInput }) => {

    const styles = {
        height: '70%',
    }

    return(
        <div style={styles}>
            <SingleUserElement user={userInput ? userInput : null} />
        </div>
    )
}
export default DetailUser;