import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signUpUser } from '../../store/actions/login'
import useStyle from './style'
import { Typography, TextField, Button, Paper, IconButton } from '@material-ui/core'
import { useState } from "react";
import { LockOpen, Lock } from '@material-ui/icons';
import { useSelector } from 'react-redux';


const Login = () => {
    interface ILogin {
        email: string,
        name?: string,
        password: string,
        password1?: string,
        phone?: string,
    }
    const mockLogin = {
        email: '',
        password: '',
    }
    const userData = useSelector((state: any) => state.userData);
    const dispatch = useDispatch();
    const classes = useStyle();
    const [loginData, setLoginData] = useState<ILogin>(mockLogin)
    const [loginMethod, setLoginMethod] = useState(true)
    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(loginMethod ? loginUser(loginData) : signUpUser(loginData))
    }
    const resetHandler = () => { setLoginData(mockLogin); }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={submitHandler}>
                <IconButton
                    color="primary"
                    aria-label="sign up log in toggle"
                    component="span"
                    onClick={() => setLoginMethod(!loginMethod)}>
                    {loginMethod ? <Lock /> : <LockOpen />}
                    <Typography variant='h6'>{loginMethod ? 'Log in' : 'Sign up'}</Typography>
                </IconButton>
                {/* email */}
                <TextField
                    name='email'
                    variant='outlined'
                    label='Email'
                    fullWidth
                    value={loginData.email}
                    onChange={(e: any) => setLoginData({ ...loginData, email: e.target.value })}>
                </TextField>
                {/* password */}
                <TextField
                    name='password'
                    variant='outlined'
                    label='Password'
                    fullWidth
                    value={loginData.password}
                    onChange={(e: any) => setLoginData({ ...loginData, password: e.target.value })}>
                </TextField>
                {!loginMethod &&
                    <>
                        {/* name */}
                        < TextField
                            name='name'
                            variant='outlined'
                            label='Name'
                            fullWidth
                            value={loginData.name}
                            onChange={(e: any) => setLoginData({ ...loginData, name: e.target.value })}>
                        </TextField>
                        {/* password1 */}
                        <TextField
                            name='password1'
                            variant='outlined'
                            label='Password-check'
                            fullWidth
                            value={loginData.password1}
                            onChange={(e: any) => setLoginData({ ...loginData, password1: e.target.value })}>
                        </TextField>
                        {/* phone */}
                        <TextField
                            name='phone'
                            variant='outlined'
                            label='Phone'
                            fullWidth
                            value={loginData.phone}
                            onChange={(e: any) => setLoginData({ ...loginData, phone: e.target.value })}>
                        </TextField>
                    </>
                }
                {/* submit */}
                <Button
                    type='submit'
                    className={classes.buttonSubmit}
                    fullWidth
                    size='large'
                    color='primary'
                    variant='contained'>
                    Send
                </Button>
                {/* reset */}
                <Button
                    type='reset'
                    className={classes.buttonReset}
                    fullWidth
                    size='small'
                    color='secondary'
                    variant='contained'
                    onClick={resetHandler}>
                    Reset
                </Button>
            </form>
        </Paper >
    )
}
export default Login;