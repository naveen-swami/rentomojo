import React, { useEffect, useState, useContext } from 'react';
import { ListGroup, Table } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'
import { UserContex } from '../Controller'
import { connect } from 'react-redux'
import { GET_STUDENT } from '../redux/reducer/studentReducer';

function Home(props) {
    console.log("props:  ",props);
    const studnet = props.reduxState.studnetReducer.student
    // console.log("student:", props.reduxState.studnetReducer.studnet);

    const [userData, setUserData] = useState();
    const history = useHistory();
    const { userId, setUserId } = useContext(UserContex);

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        // console.log("inside use effect for student:")
        props.getStudnet();
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
        setUserId(userId);
        history.push("/post")
    }

    function newName(event) {
        // console.log(event.target.value);
        // console.log(props.updateName);
        props.updateName(event.target.value);
    }

    return (
        <>
            <div>
                { studnet && <h1> Hello { studnet.firstName + " " + studnet.lastName  } </h1> }
                
            </div>
            <div>
                <button onClick={() => props.increment()}>Incremnt</button>
                <button onClick={() => props.decrement()}>Decrement</button>
                <p>{props.reduxState.rootReducer.counter}</p>
                Enter Name: <input onChange={newName} type="text"></input>
                <p>{props.reduxState.userReducer.userState.name}</p>
            </div>
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
                                <td key={index} style={{ cursor: "pointer" }} onClick={() => takeToPost(user.id)}>
                                    Posts
                                    {/* <Link to={"/post?userId=" + user.id} >Posts</Link> */}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    );
}

const mapStateToProps = reduxState => {
    console.log("inside redux state");
    console.log("State from redux", reduxState);
    return { reduxState }
    // return reduxState;
}

const mapDispatchToProps = dispatch => {
      console.log("inside dispatch");
    return {
        increment: () => dispatch({
            type: "increment"
        }),
        decrement: () => dispatch({
            type: "decrement"
        }),
        updateName: (newName) => dispatch({
            type: "updateName",
            name: newName
        }),
        getStudnet: () => dispatch({
            type: GET_STUDENT,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);