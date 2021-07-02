import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid, IconButton } from '@material-ui/core';
import Router from './App.router'
import './index.css';
import memories from './assets/memories.png';
import { useDispatch, useSelector } from 'react-redux'
import browserStorage from './utils/browserStorage.utils'
import useStyle from './style/style.app'
import components from './components';
import actions from './store/actions';
import { HomeOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";


const App = () => {
    const { MainForm, UserSection } = components;
    const loginActions = actions.login
    const user = useSelector((state: any) => state.user);
    const classes = useStyle();
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(false);
    const [formResponse, setFormResponse] = useState('')
    const history = useHistory();


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
                <div className={classes.relative}>
                    {/* home btn */}
                    <IconButton
                        className={classes.home_button}
                        aria-label="home btn"
                        onClick={() => { history.push('/') }}
                        component="span">
                        HOME
                        <HomeOutlined />
                    </IconButton>
                </div>

                {/* user section  */}
                <UserSection responseHandler={{ formResponse, messageHandler, isLogin, setIsLogin }} />

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

                            {/* form */}
                            <Grid item xs={12} sm={4}>
                                <MainForm responseHandler={{ formResponse, messageHandler, isLogin }} />
                            </Grid>

                            {/* main display */}
                            <Grid
                                item
                                xs={12}
                                sm={8}>
                                <Router/>
                            </Grid>

                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;