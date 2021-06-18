import React from "react";
import Post from './Post'
// import useStyle from './style'
import { useSelector } from 'react-redux';
import Loader from "../Loader";


const Posts = () => {
    // const classes = useStyle();
    const posts = useSelector((state: any) => state.posts);
    const { LoaderSmall } = Loader;
    return (
        <div>
            {posts.length ? React.Children.toArray(posts.map((post: any) => <Post post={post} />)) : <LoaderSmall />}
        </div>
    )
}
export default Posts