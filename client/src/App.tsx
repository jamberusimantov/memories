import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Router from './App.router'
import './index.css';
import memories from './assets/memories.png';
import { useDispatch, useSelector } from 'react-redux'
import browserStorage from './utils/browserStorage.utils'
import useStyle from './style/style.app'
import components from './components';
import actions from './store/actions';


const App = () => {
    const { MainForm, UserSection, LoginForm, } = components;
    const loginActions = actions.login
    const user = useSelector((state: any) => state.user);
    const Theme = useSelector((state: any) => state.theme);
    const { primaryColor, secondaryColor, emphasizeColor, polygonHeight, polygonWidth, polygonOpacity, fontColor } = Theme;
    const dataToUpdate = { fontColor, primaryColor, secondaryColor, emphasizeColor, polygonHeight, polygonWidth, polygonOpacity }
    const classes = useStyle(dataToUpdate);
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(false);
    const [formResponse, setFormResponse] = useState('')

    // form response msg handler
    const messageHandler = (data: string) => {
        setFormResponse(data);
        setTimeout(() => { setFormResponse(''); }, 3000)
    }

    const { getUser } = loginActions;

    // login using token
    useEffect(() => {
        if (browserStorage.getToken() &&
            browserStorage.getToken() !== user.token) {
            dispatch(getUser(messageHandler));
        }
    }, [dispatch, getUser, user.token])

    // show/hide toggle main display
    useEffect(() => {
        if (!isLogin &&
            user.token && browserStorage.getToken() &&
            user.token === browserStorage.getToken()) {
            setIsLogin(true);
        }
    }, [isLogin, user.token])

    return (
        <div className={classes.root}>
            <Container maxWidth='lg' >
                {isLogin && <UserSection />}

                {/* header */}
                <AppBar className={classes.appBar} position='static' color='inherit' >
                    <Typography variant='h2' align='center' className={classes.heading}>Memories</Typography>
                    <img src={memories} alt='memories' height='60' className={classes.image} />
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid
                            className={classes.main}
                            container
                            justify='center'
                            alignItems='center'
                            spacing={3}>

                            {/* form toggle */}
                            <Grid item xs={12} sm={4}>
                                {isLogin ?
                                    <MainForm responseHandler={{ formResponse, messageHandler }} /> :
                                    <LoginForm responseHandler={{ formResponse, messageHandler }} />}
                            </Grid>

                            {/* main display */}
                            <Grid
                                item
                                xs={12}
                                sm={8}>
                                <Router />
                            </Grid>

                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;