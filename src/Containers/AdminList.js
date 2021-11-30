import React, { useState, useEffect } from 'react';

import UserListElement from '../Components/UserListElement';

const AdminList = ({ data }) => {

    const [ allUsers, setAllUsers ] = useState([]);
    const [ onlyUsers, setOnlyUsers ] = useState([]);
    const [ allElements, setAllElements ] = useState([]);

    function getEqualUser(input, titleInput){
        let usersTmp = [];
        input.forEach(element => {
            if(element.permission === titleInput){
                usersTmp.push(element);
            }
        });
        return usersTmp;
    }

    function createElement(input){
        return input.map( item => (
            <UserListElement
                key={item.login}
                firstName={item.firstName}
                lastName={item.lastName}
                primarySkill={item.primarySkill}
            />
        ))
    }

    async function createList(){
        await setAllUsers(data)
        await setOnlyUsers(getEqualUser(allUsers, 'user'))
        await setAllElements(createElement(onlyUsers))
    }

    useEffect( () => {
        createList();
    }, [ allElements ])

    const styles = {
        padding: '5px'
    }

    return(
        <ul style={styles}>
            {allElements}
        </ul>
    )
}

export default AdminList;