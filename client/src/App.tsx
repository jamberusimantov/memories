import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './assets/memories.png';
import Posts from './components/Posts'
import Form from './components/Form'
import Login from './components/Login'
import useStyle from './style'
import { useDispatch } from 'react-redux'
import * as postActions from './store/actions/posts'
import * as loginActions from './store/actions/login'
import { useSelector } from 'react-redux';
import browserStorage from './utils/browserStorage.utils'


const App = () => {
    const userData = useSelector((state: any) => state.userData);
    const classes = useStyle();
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(userData.name ? true : false)
    const { getAllPosts } = postActions;
    const { getUser } = loginActions;


    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch, getAllPosts])

    useEffect(() => {
        if (browserStorage.getToken()) { dispatch(getUser(true)); }
    }, [isLogin, dispatch, getUser])

    useEffect(() => {
        setIsLogin(userData.token === browserStorage.getToken());
    }, [userData.token])


    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit' >
                <Typography variant='h2' align='center' className={classes.heading}>Memories</Typography>
                <img src={memories} alt='memories' height='60' className={classes.image} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item  xs={12} sm={8}>
                                {isLogin && <Posts />}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {isLogin ? <Form /> : <Login />}
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;