import React from "react";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Login = () => {

    return(
        <div className='container container--lightView' >
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' >
                <Span fontSize="34" >
                    bcf
                </Span>
                <Input 
                    placeholder='login'
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

export default Login;