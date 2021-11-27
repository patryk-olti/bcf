import React, { useState, useEffect, useContext } from "react";

import { AppContext } from "../AppContext";
import { getdb } from "../firebaseConfig";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Icon from "../Components/Icon";
import BigUser from "../Components/BigUser";
import TopNav from "../Components/TopNav";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import LogInOut from "../Components/LogInOut";

const AdminPanel = () => {

    const [ usersArray, setUsersArray ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect( () => {
        setUsersArray(getdb('users'));
        setTimeout( () => {
            setLoading(false)
        }, 2000)
    }, [])

    const { isDark } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';

    const usersElements = usersArray.map(user => (
        <BigUser
            key={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
            primarySkill={user.primarySkill}
            moreSkills={user.moreSkills}
        />
    ))

    return(
        <div className={classForApp}>
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' borderBool={true}>
                <Span fontSize="34" margin="20px 20px 10px">administration panel</Span>
                <FlexContainer flexDirection='row' alignItems='center' justifyContent='center' >
                    { !loading ? usersElements : <Span fontSize="34" margin="20px 20px 10px">loading users</Span> }
                </FlexContainer>
                
                <TopNav>
                    <LogInOut />
                    <Icon 
                        iconSun={faSun} 
                        iconMoon={faMoon}
                    />
                </TopNav>
            </FlexContainer>
        </div>
    )
}

export default AdminPanel;