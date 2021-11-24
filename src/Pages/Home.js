import React, { useContext } from "react";

import { AppContext } from "../AppContext";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Button from "../Components/Button";
import Icon from "../Components/Icon";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    const { isDark, toggleIsDark } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';



    return(
        <div className={classForApp} >
                <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' padding='20px 40px'>

                    <Span fontSize="24" margin="0px 20px" >Work with us, work with the best.</Span>
                    <Span fontSize="32" margin="5px 20px" >bright coders factory</Span>
                    <Span fontSize="14" margin="0px 0px 20px 20px" >recruit application</Span>

                    <Button 
                        fontSize='20'
                    >
                        login
                    </Button>

                    <Button 
                        fontSize='20'
                    >
                        register
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

export default Home;