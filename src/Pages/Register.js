import React, { useState, useContext } from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { AppContext } from '../AppContext';

import '../Styles/_styles.sass';
import '../Styles/_forms.sass';

import FlexContainer from '../Components/FlexContainer';
import Span from '../Components/Span';
import LinkElement from '../Components/LinkElement';
import Icon from '../Components/Icon';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Register = () => {

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

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
        passwordInput2: Yup.string()
            .min(4, 'Too Short!')
            .max(30, 'Too Long!')
            .oneOf([Yup.ref('passwordInput'),null],'Passwords must match')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        accept: Yup.bool()
    });

    return(
        <div className={classForApp} >
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='center' padding='10px'>
                <Span fontSize='34' margin='25px 25px 0px'>bright coders factory</Span>
                <Span fontSize='14' margin='0px 20px 10px'>registration page</Span>

                <Formik
                    initialValues={{
                        loginInput: login,
                        passwordInput: password,
                        passwordInput2: password,
                        email: email,
                        accept: false
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {

                        if(values.accept){
                            setLogin(values.loginInput);
                            setPassword(values.passwordInput);
                            setEmail(values.email);
                            console.log(values);
                        }
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

                            <Field name='passwordInput2' className='textInput' type='password' placeholder='password'/>
                                {errors.passwordInput2 && touched.passwordInput2 ? (
                                    <div>{errors.passwordInput2}</div>
                                ) : null}

                            <Field name='email' className='textInput' type='email' placeholder='email'/>
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}

                            <label className='label'>
                                <Span fontSize='16'> accept regulations </Span>
                                <Field name='accept' className='checkbox' type='checkbox' />
                                {errors.accept && touched.accept ? (
                                    <div>{errors.accept}</div>
                                ) : null}
                            </label>

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

export default Register;