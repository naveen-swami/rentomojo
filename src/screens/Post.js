import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function Post() {

    const [posts, setPosts] = useState();

    const { search } = useLocation();
    const userId = search.split("=")[1];
    const history = useHistory();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId).
            then(response => response.json()).
            then(jsonResonse => setPosts(jsonResonse));
    }, []);

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
                            <tr style={{cursor: 'pointer', border: '1px solid black'}} onClick={ () => history.push("/post-details?postId="+ post.id)}>
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