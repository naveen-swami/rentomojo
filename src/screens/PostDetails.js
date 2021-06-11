import React, { useEffect, useState } from 'react';
import { useLoaction, useHistory, useLocation } from 'react-router-dom';

export default function PostDetails() {

    const history = useHistory();
    const { search } = useLocation();

    const urlPrams = new URLSearchParams(search);
    const postId = urlPrams.get("postId")
    const [postData, setPostData] = useState();
    const [comments, setcomments] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + postId).
            then(response => response.json())
            .then(setPostData);
    }, []);

    function loadComments() {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
            .then(response => response.json())
            .then(setcomments);
    }

    function deletePost() {

        // how many ways we can go back to post page. There are following

        // postData.userId
        // 1) Depending on API call which is bad desgin
        
        // history.goBack() 
        // only works, when we have come from posts page

        // passing userId as query param
        // This works best from above two

        // problems with passing userId
        // 1) looks bad!!
        // 2) security

        fetch("https://jsonplaceholder.typicode.com/posts/"+ postId, {
            method: "DELETE"
        }).then(response => response.text()).then(history.push("post/?userId="+postData.userId));
    }


    return (
        <div>
            <p>Post Details 
                <span onClick={deletePost} style={{fontSize:50, marginLeft:'35%', cursor: 'pointer'}}>
                    X
                    </span>
                </p>
            <table>

                {postData &&
                    <tr>
                        <td>{postData.title}</td>
                        <td>{postData.body}</td>
                    </tr>
                }
            </table>

            <h1 style={{ cursor: 'pointer' }} onClick={() => loadComments()}>Load Comments</h1>
            <table>
                {
                    comments &&(
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    )}
                {comments && comments.map(comment => (
                    <tr>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                ))
                }
            </table>
        </div>
    )
}