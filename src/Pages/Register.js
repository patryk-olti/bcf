import React from "react";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Register = () => {

    return(
        <div className='container container--lightView' >
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
                <Button 
                    fontSize='18'
                >
                    hello
                </Button>
            </FlexContainer>
        </div>
    )
}

export default Register;