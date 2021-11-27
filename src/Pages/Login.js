import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { AppContext } from '../AppContext';

import { getdb } from '../firebaseConfig';

import '../Styles/_styles.sass';
import '../Styles/_forms.sass';

import FlexContainer from '../Components/FlexContainer';
import Span from '../Components/Span';
import LinkElement from '../Components/LinkElement';
import Icon from '../Components/Icon';
import TopNav from "../Components/TopNav";
import LogInOut from "../Components/LogInOut";

import MessageWindow from '../Components/MessageWindow';
import Animation from './Animation';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const [ usersArray, setUsersArray ] = useState([]);
    const [ loginErr, setLoginErr ] = useState(false);
    const toggleLoginErr = () => setLoginErr(prev => !prev);
    const navigate = useNavigate();
    
    useEffect( () => {
        setUsersArray(getdb('users'));
    }, [])

    const { isDark, toggleLogged } = useContext(AppContext);
    const classForApp = isDark ? 'container container--darkView' : 'container container--lightView';

    const SignupSchema = Yup.object().shape({
        loginInput: Yup.string()
            .min(4, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
        passwordInput: Yup.string()
            .min(4, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
    });

    const loginFunction = (data, input) => {
        const login = input.login;
        const findUser = data.find( user => user.login === login);

        if(findUser){
            if(findUser.password === input.password){
                if(findUser.permission === 'user'){
                    console.log('hello user');
                    toggleLogged(true);
                    navigate('/userpage');
                }else if(findUser.permission === 'admin'){
                    console.log('hello admin');
                    toggleLogged(true);
                    navigate('/adminpanel');
                }else{
                    console.log('wrong permission');
                }
            }else{
                setLoginErr(true);
                input.login = '';
            }
        }else{
            setLoginErr(true);
        }
    }

    return(
        <div className={classForApp} >
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' padding='10px' borderBool={true}>

                { loginErr ? <MessageWindow content='wrong login or password' handleClick={toggleLoginErr}/> : null}
                <Animation />
                <Span fontSize='34' margin='25px 25px 0px'>bright coders factory</Span>
                <Span fontSize='14' margin='0px 20px 10px'>login page</Span>

                <Formik
                    initialValues={{
                        loginInput: '',
                        passwordInput: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        const loginObject = {
                            login: values.loginInput,
                            password: values.passwordInput,
                        }

                        loginFunction(usersArray, loginObject)
                    }}
                    >
                    {({ errors, touched }) => (
                        <Form className='form'>
                            <Field name='loginInput' className='textInput' placeholder='login'/>
                            {errors.loginInput && touched.loginInput ? (
                                <div>{errors.loginInput}</div>
                            ) : null}
                            <Field name='passwordInput' className='textInput' type='password' placeholder='password'/>
                            {errors.passwordInput && touched.passwordInput ? (
                                <div>{errors.passwordInput}</div>
                            ) : null}
                            <button type='submit' className={ isDark ? 'button button__darkMode' : 'button button__lightMode'} >
                                login
                            </button>
                            <button type='button' className='button'>
                                <LinkElement path='/'>
                                    back
                                </LinkElement>
                            </button>

                        </Form>
                    )}
                </Formik>
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

export default Login;