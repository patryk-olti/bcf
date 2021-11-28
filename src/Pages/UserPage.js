import React, { useState, useContext } from "react";

import { AppContext } from "../AppContext";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Icon from "../Components/Icon";
import TopNav from "../Components/TopNav";
import LogInOut from "../Components/LogInOut";
import NavLink from "../Components/NavLink";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const UserPage = () => {

    const [ actualPage, setActualPage ] = useState('home'); /* home | edit | test | require | preference */

    const { isDark } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';

    const switchPages = ( path ) => {
        switch(path) {
            case 'home':
                return <Span fontSize="34" margin="20px 20px 10px">home</Span>
            case 'edit':
                return <Span fontSize="34" margin="20px 20px 10px">edit</Span>
            case 'test':
                return <Span fontSize="34" margin="20px 20px 10px">test</Span>
            case 'require':
                return <Span fontSize="34" margin="20px 20px 10px">require</Span>
            case 'preference':
                return <Span fontSize="34" margin="20px 20px 10px">preference</Span>
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