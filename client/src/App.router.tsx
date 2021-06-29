import React from 'react'
import { Route, Switch } from 'react-router-dom';
import pages from './pages'



export default function AppRouter(props: any) {
    const { PostPage, Posts, PageError } = pages;
    return (
        <Switch>
            <Route exact path="/">
                <Posts />
            </Route>

            <Route path="/post/:id">
                <PostPage />
            </Route>

            <Route>
                <PageError />
            </Route>

        </Switch>

    )
}