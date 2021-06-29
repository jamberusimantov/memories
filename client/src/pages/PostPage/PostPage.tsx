import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Post from '../../components/Post';
import actions from '../../store/actions';
import { Grid } from '@material-ui/core';
import Loader from '../../components/Loader';
import useStyle from './style.postPage';



export default function PostPage() {
    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch();
    const postActions = actions.posts
    const { getPost } = postActions;
    const posts = useSelector((state: any) => state.posts);
    const LoaderSmall = Loader.LoaderSmall;
    const classes = useStyle();
    // get posts
    useEffect(() => {
        dispatch(getPost({ _id: id }))
    }, [dispatch, getPost, id])

    return (
        <Grid container
            className={classes.mainContainer}
            spacing={3} >
            <Grid
                item
                className={classes.item}
                xs={12}
                sm={12}>
                {!posts.length ? <LoaderSmall timeout={15000} /> : <Post post={posts[0]} isUserPage={true} />}
            </Grid>
        </Grid >
    )
}
