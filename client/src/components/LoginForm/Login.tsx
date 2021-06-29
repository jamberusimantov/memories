import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signUpUser } from '../../store/actions/login.actions'
import useStyle from './style.login'
import { Typography, TextField, Button, Paper, IconButton } from '@material-ui/core'
import { Lock } from '@material-ui/icons';
import { ILoginFormData, mockLoginFormData } from '../../utils/app.utils';



const Login = (props: any) => {
    const { responseHandler: { formResponse, messageHandler } } = props;

    const dispatch = useDispatch();
    const classes = useStyle();
    const [loginData, setLoginData] = useState<ILoginFormData>(mockLoginFormData)
    const [loginMethod, setLoginMethod] = useState(true)
    const submitHandler = (e: any) => {
        e.preventDefault();
        messageHandler(loginMethod ? 'logging in...' : 'signing up...')
        dispatch(loginMethod ? loginUser(loginData, messageHandler) : signUpUser(loginData, messageHandler));
    }
    const resetHandler = () => { setLoginData(mockLoginFormData); }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.form} ${classes.root}`}
                onSubmit={submitHandler}>

                {/* form Head */}
                <div className={classes.formHead}>
                    {/* form toggle */}
                    <IconButton
                        color="primary"
                        aria-label="sign up log in toggle"
                        component="span"
                        onClick={() => setLoginMethod(!loginMethod)}>
                        {loginMethod ? 'SIGN UP' : 'LOG IN'}
                        <Lock />
                    </IconButton>

                    {/*form title */}
                    <Typography
                        variant='h6'
                        className={classes.formHead_title}
                    >{loginMethod ? 'Log in' : 'Sign up'}</Typography>
                </div>






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
                        {/* password1 */}
                        <TextField
                            name='password1'
                            variant='outlined'
                            label='Password-check'
                            fullWidth
                            value={loginData.password1}
                            onChange={(e: any) => setLoginData({ ...loginData, password1: e.target.value })}>
                        </TextField>

                        {/* name */}
                        < TextField
                            name='name'
                            variant='outlined'
                            label='Name'
                            fullWidth
                            value={loginData.name}
                            onChange={(e: any) => setLoginData({ ...loginData, name: e.target.value })}>
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

                {/* form response */}
                <Typography variant='h6'>{`${formResponse}`}</Typography>

            </form>
        </Paper >
    )
}
export default Login;