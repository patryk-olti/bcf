import React, { useContext } from "react";

import { AppContext } from "../AppContext";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Input from "../Components/Input";
import Button from "../Components/Button";
import LinkElement from "../Components/LinkElement";
import Icon from "../Components/Icon";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Register = () => {

    const { isDark, toggleIsDark } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';

    return(
        <div className={classForApp} >
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' >
                <Span fontSize="34" margin="25px 25px 0px">bright coders factory</Span>
                <Span fontSize="14" margin="0px 20px 10px">register page</Span>

                <Input 
                    placeholder='login'
                    name='login'
                    type='text'
                />
                <Input 
                    placeholder='email'
                    name='login'
                    type='text'
                />
                <Input 
                    placeholder='password'
                    name='password'
                    type='password'
                />
                <Button fontSize='18'>
                    hello
                </Button>

                <Button fontSize='16'>
                    <LinkElement path='/'>
                        back
                    </LinkElement>
                </Button>

                <Icon 
                        iconSun={faSun} 
                        iconMoon={faMoon}
                        isDark={isDark}
                        handleClick={toggleIsDark}     
                    />
            </FlexContainer>
        </div>
    )
}

export default Register;