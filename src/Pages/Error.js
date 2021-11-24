import React from "react";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";

const Error = () => {

    return(
        <div className='container container--lightView' >
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' >
                <Span fontSize="34" margin="20px 20px 10px">this in no funny</Span>
                <Span fontSize="34" margin="10px 20px 10px">please go to the home page</Span>
                <Span fontSize="34" margin="10px 25px 20px">bright coders factory</Span>
            </FlexContainer>
        </div>
    )
}

export default Error;