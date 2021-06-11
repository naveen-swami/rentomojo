import React, { useEffect, useState } from 'react';
import { ListGroup, Table } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'
function Home({userId, userSetter}) {

    const [userData, setUserData] = useState();
    const history = useHistory();

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {

        // fetch("https://jsonplaceholder.typicode.com/users").
        // then(response => response.text()).
        // then(y => console.log(JSON.parse(y)))

        // then(response => response.text()).then(y => console.log(JSON.parse(y))) === then(response => response.json())


        fetch("https://jsonplaceholder.typicode.com/users").
            then(response => response.json())
            .then(setUserData);

        // console.log(userData);
        // .then(jsonResponse => setUserData(jsonResponse)) ===     .then(setUserData)
    }

    function takeToPost(userId) {
        userSetter(userId);
        history.push("/post")
    }

    return (
        <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
                {userData &&
                    userData.map((user, index) => (
                        // {console.log(user.name)}
                        <tr>
                            <th scope="row" key={index}>{user.id}</th>
                            <td key={index}>{user.name}</td>
                            <td key={index}>{user.company.name}</td>
                            <td key={index} style={{cursor:"pointer"}} onClick={() => takeToPost(user.id)}>
                                Posts
                                {/* <Link to={"/post?userId=" + user.id} >Posts</Link> */}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
}

export default Home;