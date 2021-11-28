import React from "react";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";

const UserRequire = () => {

    const styles = {
        mainContainer: {
            width: '100%',
            height: '100%',
            padding: '10px 0',
            borderTop: '1px solid black'
        },
        container: {
            height: '100%',
            width: '40%',
        }
    }

    return(
        <div style={styles.mainContainer} >
            <FlexContainer flexDirection='row' alignItems='center' justifyContent='space-around' size='100%'>
                <div style={styles.container} >
                    <Span fontSize="34" margin="20px 20px 10px">Require</Span>


                </div>
            </FlexContainer>
        </div>
    )
}

export default UserRequire;