import React, { useState, useEffect, useContext } from "react";

import { AppContext } from "../AppContext";
import { getdb } from "../firebaseConfig";

import '../Styles/_styles.sass';

import FlexContainer from "../Components/FlexContainer";
import Span from "../Components/Span";
import Icon from "../Components/Icon";
import TopNav from "../Components/TopNav";
import AdminList from '../Containers/AdminList';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import LogInOut from "../Components/LogInOut";

const AdminPanel = () => {

    const [ usersArray, setUsersArray ] = useState([]);

    async function getData(){
        await setUsersArray(getdb('users'));
    }
    
    useEffect( () => {
        getData();
    }, [])

    const { isDark } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';


    return(
        <div className={classForApp}>
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='start' borderBool={true} size='80%'>
                <Span fontSize="34" margin="20px 20px 10px">administration panel</Span>
                    <div className='boxes'>
                        <div className='box box__rightBorder'>
                            <AdminList data={usersArray} />
                        </div>
                        <div className='box'>
                            iks de
                        </div>
                    </div>
                
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

export default AdminPanel;