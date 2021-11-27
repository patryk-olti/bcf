import React, { useContext } from "react";

import { AppContext } from "../AppContext";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Button from "../Components/Button";
import LinkElement from "../Components/LinkElement";
import Icon from "../Components/Icon";
import TopNav from "../Components/TopNav";
import LogInOut from "../Components/LogInOut";

import Animation from "./Animation";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    const { isDark } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';

    return(
        <div className={classForApp} >
                <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' padding='20px 40px' borderBool={true}>

                    <Animation />
                    <Span fontSize="24" margin="0px 20px" >Work with us, work with the best.</Span>
                    <Span fontSize="32" margin="5px 20px" >bright coders factory</Span>
                    <Span fontSize="14" margin="0px 0px 20px 20px" >recruit application</Span>

                    <Button fontSize='20' >
                        <LinkElement path="login">
                            login
                        </LinkElement>
                    </Button>

                    <Button fontSize='20' >
                        <LinkElement path="register">
                            register
                        </LinkElement>
                    </Button>

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

export default Home;