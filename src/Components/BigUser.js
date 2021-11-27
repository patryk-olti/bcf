import React from "react";

import FlexContainer from "./FlexContainer";

import img from '../img/patryk.jpg';

import '../Styles/_styles.sass';
import Span from "./Span";

const BigUser = ({ firstName, lastName, primarySkill, moreSkills }) => {

    return(
        <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' padding='20px'>
            <div className='img--BigUser--container'>
                <img src={img} alt='img' className='img--BigUser' />
            </div>
            <Span fontSize='24' margin='20px'>
                {firstName} {lastName}
            </Span>
            <Span fontSize='24' margin='0'>
                {primarySkill}
            </Span>
            <Span fontSize='16' margin='10px'>
                tech: {moreSkills.map( skill => <span> {skill}</span>)}
            </Span>
        </FlexContainer>
    )
}

export default BigUser;