import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './assets/memories.png';
import Posts from './components/Posts'
import Form from './components/Form'
import useStyle from './style'
import { useDispatch } from 'react-redux'
import * as postActions from './store/actions/posts'


const App = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const { getAllPosts } = postActions;

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch, getAllPosts])



    
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit' >
                <Typography variant='h2' align='center' className={classes.heading}>Memories</Typography>
                <img src={memories} alt='memories' height='60' className={classes.image} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;