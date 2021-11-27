import React, { useState, useEffect, useContext } from 'react';

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

import Animation from './Animation';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ usersArray, setUsersArray ] = useState([]);
    
    useEffect( () => {
        setUsersArray(getdb('users'));
    }, [])

    const { isDark, toggleIsDark } = useContext(AppContext);
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

    return(
        <div className={classForApp} >
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' padding='10px'>

                <Animation />
                <Span fontSize='34' margin='25px 25px 0px'>bright coders factory</Span>
                <Span fontSize='14' margin='0px 20px 10px'>login page</Span>

                <Formik
                    initialValues={{
                        loginInput: login,
                        passwordInput: password,
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        setLogin(values.loginInput);
                        setPassword(values.passwordInput);
                        console.log(values);
                        console.log(login, password);
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
                            <button type='submit' className='button'>login</button>
                            <button type='button' className='button'>
                                <LinkElement path='/'>
                                    back
                                </LinkElement>
                            </button>

                        </Form>
                    )}
                </Formik>
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

export default Login;