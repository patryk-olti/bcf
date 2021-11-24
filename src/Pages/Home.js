import React from "react";

import '../Styles/_home.sass';

import FlexContainer from "../Components/FlexContainer";

const Home = () => {

    return(
        <div className='container container--lightView' >
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' >
                <span>bcf</span>
                <input></input>
                <input></input>
            </FlexContainer>
        </div>
    )
}

export default Home;