import React, { useEffect } from "react";
import actions from '../../store/actions';
import { useDispatch } from 'react-redux'
import Posts from "../Posts";


export default function Home(props: any) {
    const postActions = actions.posts
    const { getPosts } = postActions;
    const dispatch = useDispatch();


    // get posts
    useEffect(() => {
        dispatch(getPosts(undefined, undefined, 10))
    }, [dispatch, getPosts])


    return (
        <div>
            <Posts utils={{ originHome: true }} />
        </div>
    )
}
