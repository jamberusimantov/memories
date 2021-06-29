import React, { useState, useEffect } from "react";
import Post from '../../components/Post'
import useStyle from './style.posts'
import Loader from "../../components/Loader";
import { Grid } from '@material-ui/core';
import actions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux'



const Posts = () => {
    const LoaderSmall = Loader.LoaderSmall;
    const [width, setWidth] = useState(window.innerWidth)
    const classes = useStyle();
    const posts = useSelector((state: any) => state.posts);
    const postActions = actions.posts
    const { getPosts } = postActions;
    const dispatch = useDispatch();

    
    // get posts
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, getPosts])


    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        return () => {
            window.removeEventListener('resize', () => setWidth(window.innerWidth))
        }
    }, [])

    if (!posts.length) return (
        <Grid container justify='center' alignItems='center' spacing={3} className={classes.mainContainer}>
            <LoaderSmall timeout={15000} />
        </Grid>
    )

    return (
        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            {React.Children.toArray(posts.map((post: any) =>
                <Grid item xs={12} sm={width < 700 ? 12 : 6}>
                    <Post post={post} />
                </Grid>))}
        </Grid>
    )
}
export default Posts