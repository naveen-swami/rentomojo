import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { UserContex, PostContex } from "../Controller";
export default function Post() {

    const [posts, setPosts] = useState();
    const { userId } = useContext(UserContex);
    const postContex = useContext(PostContex);

    // const { search } = useLocation();
    // const userId = search.split("=")[1];
    const history = useHistory();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId).
            then(response => response.json()).
            then(jsonResonse => setPosts(jsonResonse));
    }, []);

    const takeToPostDetails = (postId) => {
        // props.postSetter(postId);
        postContex.setPostId(postId);
        history.push("/post-details")
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.map(post => (
                        // <div onClick={() => history.push("/post-details?postId="+ post.id)}>
                        <tr style={{ cursor: 'pointer', border: '1px solid black' }}
                            onClick={() => takeToPostDetails(post.id)}>
                            {/* onClick={history.push("/post-details?postId="+ post.id)} */}
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                        // </div>
                    ))}
                </tbody>
            </table>
        </div>
    )
}