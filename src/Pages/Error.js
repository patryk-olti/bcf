import React, { useContext } from "react";

import { AppContext } from "../AppContext";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Icon from "../Components/Icon";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Error = () => {

    const { isDark, toggleIsDark } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';

    return(
        <div className={classForApp}>
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' >
                <Span fontSize="34" margin="20px 20px 10px">that's no funny</Span>
                <Span fontSize="34" margin="10px 20px 10px">please go to the home page</Span>
                <Span fontSize="34" margin="10px 25px 20px">bright coders factory</Span>
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

export default Error;