import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './screens/Home';
import Post from './screens/Post';
import PostDetails from './screens/PostDetails';
import { TopNavBar } from './component/TopNavBar';

function Controller() {

    const [userId, setUserId] = useState(1);
    const [postId, setPostId] = useState(1);

    return (
        <div>
            <BrowserRouter >
                <TopNavBar />
                {/* currentUser:{userId} */}
                <Switch>
                    <Route exact path="/" render={() => <Home userId={userId} userSetter={setUserId} />} />
                    {/* second way */}
                    <Route path="/post" render={() => <Post userId={userId} postId={postId} postSetter={setPostId}/>} />
                    <Route path="/post-details">
                        <PostDetails userId={userId} postId={postId}/>
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