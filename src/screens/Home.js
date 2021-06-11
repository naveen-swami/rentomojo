import React, { useEffect, useState } from 'react';
import { ListGroup, Table } from 'reactstrap';
import { Link } from 'react-router-dom'
function Home() {

    const [userData, setUserData] = useState();

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
                            <td key={index}>
                                <Link to={"/post?userId=" + user.id} >Posts</Link>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
}

export default Home;