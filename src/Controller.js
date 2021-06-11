import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './screens/Home';
import Post from './screens/Post';
import PostDetails from './screens/PostDetails';
import { TopNavBar } from './component/TopNavBar';

function Controller() {
    return (
        <div>
            <BrowserRouter >
                 <TopNavBar />
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    {/* second way */}
                    <Route path="/post" render={() => <Post />} />
                    <Route path="/post-details">
                        <PostDetails />
                    </Route>

                    {/* Third way */}
                    {/* <Link to="/">
                        <Home />
                    </Link>
                    <Link to="/post">
                        <Post />
                    </Link>
                    <Link to="/post-details">
                        <PostDetails />
                    </Link> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Controller