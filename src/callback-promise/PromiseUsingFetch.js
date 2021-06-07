import React, { useEffect, useState } from 'react';

export default function PromiseUsingFetch() {

    const [userData, setUserData] = useState();
    const [userName, setUserName] = useState();
    const [userJob, setUserJob] = useState();

    useEffect(() => {
        getUserUsingFetch()
            .then(result => setUserData(result))
            .then(err => console.log("err: ", err));
        // getUserUsingFetch().then(setUserData);  ==== getUserUsingFetch().then(result => setUserData(result)); 
    }, []);

    // fetch return promise
    const getUserUsingFetch = () => {
        // return fetch('https://reqres.in/api/users?page=1?delay=40').then(response => {
        return fetch('https://reqres.in/api/unknown/23').then(response => {
            console.log(response);
            // it is similar like we did in xmlHttpRequest to parse text to object
            // response.json() ===  JSON.parse(this.responseText);  
            //  console.log(response.json()); // it gives promise object
            return response.json();
        }).catch(error => {
            console.log("error: ", error);
        });

        // sort cut way

        // return fetch('https://reqres.in/api/users?page=1?delay=40').then(response => response.json()
        // ).then(
        //     result => console.log(result)
        // );
    }



    const getUserData = (callback) => {

        return new Promise((resolve, reject) => {


            // AJAX ----- asyncronous javasgit gitcript xml

            // XML looks like HTML. It has some restrictuion and it is also heavy
            // so we should use JSON to transfer data and get the data

            // JSON --------------> JavaScript Object Notation
            // JSON is lighweight 

            // XHR -> XML Http Request

            const xhrUserData = new XMLHttpRequest();
            console.log("opening the connection");
            // API methods : PUT, GET, POST, PATCH, DELETE
            xhrUserData.open("GET", "https://reqres.in/api/users?page=1?delay=40");

            console.log("Make the call API");
            xhrUserData.send();

            // ReadyStateChange
            // it will call every time when ready state change
            // it have 4 state 
            // if state == 4 then our api call finished
            xhrUserData.addEventListener("readystatechange", function () {
                console.log("Ready state chnage", this.readyState);
                if (this.readyState === 4) {
                    console.log("status ", this.status);
                    if (this.status !== 200) {
                        reject();
                    } else {

                        // console.log("text: ", this.responseText);
                        // console.log("type of response Text");
                        // console.log(typeof this.responseText);
                        // console.log("type of json resonse type", typeof JSON.parse(this.responseText));
                        // console.log("json resonse type", JSON.parse(this.responseText));
                        const user = JSON.parse(this.responseText);
                        setUserData(user);
                        resolve(user);
                    }
                }
            })
        })
    }

    const postObject = {
        name: userName,
        job: userJob
    }

    function createUserUsingFech() {
        return fetch( "https://reqres.in/api/users" ,{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postObject),
          }).then(response => response.json()).
          then(result => console.log(result)).
          catch(err => console.log("err:", err));
    }

    function createUserClickHandler() {
        console.log("postData", postObject);
        console.log("new user api call");
        console.log(userName, userJob);
        const xhrUserData = new XMLHttpRequest();
        xhrUserData.open("POST", "https://reqres.in/api/users");
        xhrUserData.send(JSON.stringify(postObject));

        xhrUserData.addEventListener("readystatechange", function () {
            console.log("Ready state chnage", this.readyState);
            if (this.readyState === 4) {
                console.log("status ", this.status);
                console.log("text: ", this.responseText);
                console.log("type of response Text");
                console.log(typeof this.responseText);
                console.log("type of json resonse type", typeof JSON.parse(this.responseText));
                console.log("json resonse type", JSON.parse(this.responseText));
                // const user = JSON.parse(this.responseText);
                // setUserData(user);

            }
        })

    }

    function nameOnChangeClickHandler(event) {
        setUserName(event.target.value);

    }

    function jobOnChangeClickHandler(event) {
        setUserJob(event.target.value);
    }

    return (
        <div>
            Here is the data
            <p>{JSON.stringify(userData)}</p>

            <div>
                To add new user
                <label>Name</label>
                <input type="text" id="name" value={userName} onChange={nameOnChangeClickHandler} />
                <label>Job</label>
                <input type="text" id="job" value={userJob} onChange={jobOnChangeClickHandler} />
                <button onClick={createUserClickHandler}>Create User using xmlHttpRequest</button>
                <button onClick={createUserUsingFech}>Create User using fetch </button>
            </div>
        </div>
    )
}
