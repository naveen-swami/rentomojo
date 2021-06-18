import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './screens/Home';
import Post from './screens/Post';
import PostDetails from './screens/PostDetails';
import { TopNavBar } from './component/TopNavBar';
import rSore from "./store";
import {Provider} from 'react-redux'

const UserContex = React.createContext(null);
const PostContex = React.createContext();
export { UserContex, PostContex };

function Controller() {

    const [userId, setUserId] = useState(1);
    const [postId, setPostId] = useState(1);
    const { Provider: UserProvider } = UserContex;
    const { Provider: PostProvider } = PostContex;

    return (
        <div>
            <BrowserRouter >
                <TopNavBar />
                <div style={{ margin: 8 }}>
                    <Provider store={rSore()}>
                        {/* currentUser:{userId} */}
                        <UserProvider value={{ userId, setUserId }}>
                            <Switch>
                                <Route exact path="/" render={() => <Home />} />
                                {/* second way */}
                                <PostProvider value={{ postId, setPostId }}>
                                    <Route path="/post" render={() => <Post />} />
                                    <Route path="/post-details">
                                        <PostDetails />
                                    </Route>
                                </PostProvider>

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
                        </UserProvider>
                    </Provider>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Controller