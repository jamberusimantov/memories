import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signUpUser } from '../../store/actions/login.actions'
import useStyle from './style.login'
import { Typography, TextField, Button, IconButton } from '@material-ui/core'
import { Lock } from '@material-ui/icons';
import { ILoginFormData, mockLoginFormData } from '../../utils/app.utils';


const Login = (props: any) => {
    const { responseHandler: { formResponse, messageHandler, handleMenuClose } } = props;
    const dispatch = useDispatch();
    const classes = useStyle();
    const [loginData, setLoginData] = useState<ILoginFormData>(mockLoginFormData)
    const [loginMethod, setLoginMethod] = useState(true)

    const submitHandler = (e: any) => {
        e.preventDefault();
        loginMethod ? dispatch(loginUser(loginData, messageHandler)) :
            dispatch(signUpUser(loginData, messageHandler));

        messageHandler(loginMethod ? 'logging in...' : 'signing up...');
        handleMenuClose();
    }
    const resetHandler = () => { setLoginData(mockLoginFormData); }

    return (
        <form
            autoComplete='off'
            onSubmit={submitHandler}
            className={`${classes.form} ${classes.root}`}
        >

            {/* form Head */}
            <div className={classes.formHead}>
                {/* form toggle */}
                <IconButton
                    color="primary"
                    className={classes.formHead_button}
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
                required
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
                required
                type='password'
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
                        required={!loginMethod}
                        type='password'
                        value={loginData.password1}
                        onChange={(e: any) => setLoginData({ ...loginData, password1: e.target.value })}>
                    </TextField>

                    {/* name */}
                    < TextField
                        name='name'
                        variant='outlined'
                        label='Name'
                        fullWidth
                        required={!loginMethod}
                        value={loginData.name}
                        onChange={(e: any) => setLoginData({ ...loginData, name: e.target.value })}>
                    </TextField>

                    {/* phone */}
                    <TextField
                        name='phone'
                        variant='outlined'
                        label='Phone'
                        fullWidth
                        required={!loginMethod}
                        value={loginData.phone}
                        onChange={(e: any) => setLoginData({ ...loginData, phone: e.target.value })}>
                    </TextField>
                </>
            }

            {/* submit */}
            <Button
                className={classes.btn}
                fullWidth
                size='large'
                variant='contained'
                type='submit'
            >
                Send
            </Button>

            {/* reset */}
            <Button
                type='reset'
                className={classes.btn}
                fullWidth
                size='small'
                variant='contained'
                onClick={resetHandler}
            >
                Reset
            </Button>

            {/* form response */}
            <Typography variant='h6'>{`${formResponse}`}</Typography>

        </form>
    )
}
export default Login;