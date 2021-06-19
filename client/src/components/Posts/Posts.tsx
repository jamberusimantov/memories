import React from "react";
import Post from './Post'
import useStyle from './style'
import { useSelector } from 'react-redux';
import Loader from "../Loader";
import { Grid } from '@material-ui/core';

const Posts = () => {
    const classes = useStyle();
    const posts = useSelector((state: any) => state.posts);
    const { LoaderSmall } = Loader;

    if (!posts.length) return (
        <Grid container justify='center' alignItems='center' spacing={3} className={classes.mainContainer}>
            <LoaderSmall />
        </Grid>
    )
    return (
        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            {React.Children.toArray(posts.map((post: any) =>
                <Grid item xs={12} sm={6}>
                    <Post post={post} />
                </Grid>))}
        </Grid>
    )
}
export default Posts