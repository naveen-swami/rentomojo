import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../common/card/Card';

export default function Movies() {

    const [movieData, setMovieData] = useState();

    useEffect(() => {
        getMoveTitles();
    }, [])

    function getMoveTitles() {
        return axios.get("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre", {
            headers: {
                "x-rapidapi-key": "9eb3df7d30msh04f1e05230fab8dp1cc16bjsnb29f2d160701",
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "useQueryString": true
            },
            params: {
                "genre": "/chart/popular/genre/adventure",
            }
        })
            .then(response => setMovieData(response.data))
            .catch(err => console.log("error: ", err));
    }

    return (
        <div className="movie-controller">
            {movieData && Array(30).fill().map((item, index) => (
                // <Card key={index} movieId={movieData[index]}/>
                <Card key={index}
                    imageUrl="https://m.media-amazon.com/images/M/MV5BOThlNjdhZmQtNzlkOS00M2VjLWI0ZjUtZDExZDI1MjRhZGFkXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
                    title={movieData[index]} year="2019" rating="5" />
            ))}
        </div>
    )

}



// notes

// export default function Movies() {
//     const [userData, setUserData] = useState();
//     const [userName, setUserName] = useState();
//     const [userJob, setUserJob] = useState();

//     useEffect(() => {
//         // syncronous 
//         // here second function called after first function completed
//         // this structe called as callback hell
//          getUserData(function() { // 1st level
//              console.log("first level api");
//              getUserData(function() {  // 2nd level
//                  console.log("second level API");
//                   getUserData(function() {  // 3rd level
//                       console.log("Third level API");
//                   })
//              })
//          });

//          // asyncrouns 
//          // here second function call while first function running
//          getUserData()
//          getUserData();
//          getUserData();
//     },[])

//     const getUserData = (callback) => {

//         // AJAX ----- asyncronous javasgit gitcript xml

//         // XML looks like HTML. It has some restrictuion and it is also heavy
//         // so we should use JSON to transfer data and get the data

//         // JSON --------------> JavaScript Object Notation
//         // JSON is lighweight 

//         // XHR -> XML Http Request

//         const xhrUserData = new XMLHttpRequest();
//         console.log("opening the connection");
//         // API methods : PUT, GET, POST, PATCH, DELETE
//         xhrUserData.open("GET","https://reqres.in/api/users?page=1?delay=40");

//         console.log("Make the call API");
//         xhrUserData.send();

//         // ReadyStateChange
//         // it will call every time when ready state change
//         // it have 4 state 
//         // if state == 4 then our api call finished
//         xhrUserData.addEventListener("readystatechange",function() {
//             console.log("Ready state chnage", this.readyState);
//             if(this.readyState === 4) {
//                 console.log("status ", this.status);
//                 console.log("text: ", this.responseText);
//                 console.log("type of response Text");
//                 console.log(typeof this.responseText);
//                 console.log("type of json resonse type",typeof JSON.parse(this.responseText));
//                 console.log("json resonse type",JSON.parse(this.responseText));
//                 const user = JSON.parse(this.responseText);
//                 setUserData(user);
//                 if(callback){
//                     callback();
//                 }
//             }
//         })

//     }

//     const postObject = {
//         name:userName,
//         job:userJob
//     }
//     function createUserClickHandler() {
//         console.log("postData", postObject);
//         console.log("new user api call");
//         console.log(userName, userJob);
//         const xhrUserData = new XMLHttpRequest();
//         xhrUserData.open("POST","https://reqres.in/api/users");
//         xhrUserData.send(JSON.stringify(postObject));

//         xhrUserData.addEventListener("readystatechange",function() {
//             console.log("Ready state chnage", this.readyState);
//             if(this.readyState === 4) {
//                 console.log("status ", this.status);
//                 console.log("text: ", this.responseText);
//                 console.log("type of response Text");
//                 console.log(typeof this.responseText);
//                 console.log("type of json resonse type",typeof JSON.parse(this.responseText));
//                 console.log("json resonse type",JSON.parse(this.responseText));
//                 // const user = JSON.parse(this.responseText);
//                 // setUserData(user);

//             }
//         })

//     }

//     function nameOnChangeClickHandler(event){
//         setUserName(event.target.value);

//     }

//     function jobOnChangeClickHandler(event){
//             setUserJob(event.target.value);        
//     }

//     return(
//         <div>
//              Here is the data
//             <p>{JSON.stringify(userData)}</p>

//             <div>
//                 To add new user
//                 <label>Name</label>
//                 <input type="text" id="name" value={userName} onChange={nameOnChangeClickHandler}/>
//                 <label>Job</label>
//                 <input type="text" id="job" value={userJob} onChange={jobOnChangeClickHandler}/>
//                 <button onClick={createUserClickHandler}>Create User</button>
//             </div>
//         </div>
//     )
// } 
