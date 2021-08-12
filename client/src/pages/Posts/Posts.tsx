import React from "react";
import Post from '../../components/Post'
import useStyle from './style.posts'
import Loader from "../../components/Loader";
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux'



const Posts = (props: any) => {
    const { utils: { originHome } } = props;
    const LoaderSmall = Loader.LoaderSmall;
    const classes = useStyle();
    const posts = useSelector((state: any) => state.posts);

    if (!posts.length) return (
        <Grid
            container
            justify='center'
            alignItems='center'
            spacing={3}
            className={classes.mainContainer}>
            <LoaderSmall timeout={15000} />
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