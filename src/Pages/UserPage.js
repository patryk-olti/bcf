import React, { useState, useEffect, useContext } from "react";

import { AppContext } from "../AppContext";

import '../Styles/_styles.sass';

import { getNameElement } from '../firebaseConfig';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Icon from "../Components/Icon";
import TopNav from "../Components/TopNav";
import LogInOut from "../Components/LogInOut";
import NavLink from "../Components/NavLink";

import UserEdit from "../Containers/UserEdit";
import UserTest from '../Containers/UserTest';
import UserRequire from "../Containers/UserRequire";
import UserPreference from "../Containers/UserPreference";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const UserPage = () => {

    const [ actualPage, setActualPage ] = useState('home'); /* home | edit | test | require | preference */

    const { isDark, userName } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';

    const [ dbData, setDbData ] = useState([]);

    async function handleAsync(){
        await setDbData(getNameElement('users', userName));
    }

    useEffect( () => {
        handleAsync();
        console.log(dbData);
    },[dbData])


    const switchPages = ( path ) => {
        switch(path) {
            case 'home':
                return <Span fontSize="34" margin="20px 20px 10px">home: hello {userName} </Span>
            case 'edit':
                return <UserEdit />
            case 'test':
                return <UserTest />
            case 'require':
                return <UserRequire />
            case 'preference':
                return <UserPreference />
            default:
                return <Span fontSize="34" margin="20px 20px 10px">something wrong</Span>
        }
    }

    return(
        <div className={classForApp}>
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='flex-start' borderBool={true} size='80%'>
                <FlexContainer flexDirection='row' alignItems='center' justifyContent='center'>
                    <NavLink name='edit' handleClick={setActualPage} fontSize="20" margin="10px 20px"> edit </NavLink>
                    <NavLink name='test' handleClick={setActualPage} fontSize="20" margin="10px 20px"> example test </NavLink>
                    <NavLink name='require' handleClick={setActualPage} fontSize="20" margin="10px 20px"> work requirements </NavLink>
                    <NavLink name='preference' handleClick={setActualPage} fontSize="20" margin="10px 20px"> work preference </NavLink>
                </FlexContainer>
                
                {switchPages(actualPage)}

                <button onClick={ () => console.log(dbData)}>deBUG me</button>
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

export default UserPage;