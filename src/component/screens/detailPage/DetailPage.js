import axios from 'axios';
import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { useEffect, useReducer, useState } from 'react/cjs/react.development';
import { BsStar, BsStarHalf, BsFillStarFill } from 'react-icons/bs';


const initialState = {
    videoId: "",
    imageUrl: "",
    apiCalled: false,
    title: "",
    year: "",
    rating: "",
    plot: "",
    length: ""
}

function reducer(state, action) {
    const data = action.data;
    switch (action.type) {
        case 'update':
            return (
                {
                    ...state,
                    videoId: data.trailer.id,
                    imageUrl: data.poster,
                    title: data.title,
                    year: data.year,
                    rating: data.rating,
                    plot: data.plot,
                    length: data.length,
                    apiCalled: true,
                }
            )
    }
}

export default function DetailPage() {

    const [state, dispatch] = useReducer(reducer, initialState);

    // destructure
    const { videoId, imageUrl, apiCalled = false, title, year, rating, plot, length } = state;

    const { movieId } = useParams();
    // console.log("params",useParams());

    useEffect(() => {
        getMovieDetail()
    }, []);

    function getMovieDetail() {
        axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movieId}`,
            {
                headers: {
                    "x-rapidapi-key": "9eb3df7d30msh04f1e05230fab8dp1cc16bjsnb29f2d160701",
                    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                    "useQueryString": true
                }
            }
        )
            .then(response => {
                console.log(response.data, response.data.trailer.id);
                // setVidoeId(response.data.trailer.id)
                dispatch({
                    type: "update",
                    data: response.data
                })
            });
    }


    return (
        <Fragment>
            <div className="trailer-container">
                <video controls>
                    <source
                        src={`https://imdb-video.media-imdb.com/${videoId}/1434659607842-pgv4ql-1622122239577.mp4?Expires=1623215810&Signature=mVG5ZxX68b0Xv5ALS5S2HhVDTKUCkio8a0YdTsl6Iwpe0AVq15Zx3nUIfpHpHR8SkLSSsQv4XTdkAfQ2eVR2q23mJIg-aAKGhTtF3aD19NQNg0JmVJHtZdPAIuNtq50kRY19Dq0vQejKBKYNkOLHFYpt6M6ban5D-Uu7T4lREYnlCNU81z98gYI8WqutK-2S2oXloyr5YeflyYw5UIqJ2zUJ6rMGob~6BKDr68eOBLKxI7PBzWURmSxC-ynG-Ru0fIvz~BcXyRpVEoIr70ZbiyVMQnb1TUpChkJi5nOMsPtxiSPlZ09h6rUon9mud7reUqo2K9uFQVAbf-xm7Fwd5Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`}
                    // src={`https://imdb-video.media-imdb.com/${videoId}/1434659607842-pgv4ql-1510969416302.mp4?Expires=1623215504&Signature=ZfdPzDuKhryCueXElipvkfxF8Kosy2JfkrEw~AJOZe87pWZ84O~u1QxHKMSCYHo4GJJkrJD4yGY6PZhiH-g6-TfYEyF8hKdE7biBqE-G~F0pEUP50Eqb6KZIUpIvCnd2tzY-D2CTGe8CuRlwRTc92S2a2vkfm2tbyDKKXKY9Y0dekfAUA8lj4Kw4gqztIjtYQthrlSUwa65Ir8mJhdhE5mkFA2UAZJgqC5Ro4ecBAW46fnOdDxPFeZ3Qj2pyv0FPtLIaiTS1uo8X3ingqWVo6YA0WSsVlQWfNygO3bu3ZDdiw~tXY5tb5hX2k99HLvMiw-eG3gpQ54BFre9uwBcXeg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`}
                    // src={`https://imdb-video.media-imdb.com/${videoId}/1434659607842-pgv4ql-1556354704370.mp4?Expires=1621616022&Signature=rQS3cbl0pcGxa3KMtJi~vj1GqeMVm7zG5DtTmIYSPQa1rQsS6GfeGKVOEYOlBrA6NAlAdxH194SMyepz~kx1XC4ZN1TGryFjDLyllZGj2f5caZUYLjvl~lxuDDBT6aSP~lyCQmWdicF8SMxmiU74x5GaRkERfjm7QG3vZKZ~PtqGoYbcuKmC3Zm-67mdOFGmxQLWvFfFD0rV5IBcp55WIe4Ke28eXfDi4oER7GCnmA31bnTa8M8VT7igJQHQXEC6t4rZp8JDVCr8zpNJUCKIXqIfLfk7I2xb8dFUuOVchSUvCtF93CMCRGkAFyhbr4sHcL~eSchjT3oK10Wgsn84nQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`}
                    />
                </video>
            </div>
            <div className="about-movie">
                <div>
                    <img className="image" src={imageUrl} alt="poster"></img>
                </div>
                <div className="details">
                    <p>title: {title}</p>
                    <p>length: {length}</p>
                    <p>year: {year}</p>
                    <h4>Rating:</h4>
                    <div className="rating">
                        {Array(5).fill().map((item, index) => {
                            const userRating = rating ? rating / 2 : 0;
                            const starNumber = index + 1
                            if (starNumber > userRating) return <BsStar className="empty" />
                            if (starNumber < userRating) return <BsFillStarFill className="fill" />
                            if (starNumber - userRating < 1 && userRating - Math.floor(userRating) > 0.5) return <BsStarHalf className="half" />
                            return <BsStar className="empty" />
                        })}
                        <span style={{ marginLeft: 5 }}>{rating ? rating / 2 : 0}/5</span>
                    </div>
                </div>
                <div className="description">
                    <h2>About:</h2>
                    <p>{plot}</p>
                </div>
                {/* <p>apiCalled: {apiCalled ? "true" : "false"}</p> */}
            </div>
        </Fragment>
    );
}


function Ratting({ rating, index }) {

    const [ratingValue, setRatingValue] = useState(rating ? rating / 2 : 0);

    return (
        <div className="star">
            {/* {if(index > rating)} */}
            <BsStar className="empty" />
            <BsStarHalf className="halfFull" />
            <BsFillStarFill className="full" />
        </div>
    )
}


// src="https://imdb-video.media-imdb.com/vi4046503961/1434659607842-pgv4ql-1622122239577.mp4?Expires=1623215810&Signature=mVG5ZxX68b0Xv5ALS5S2HhVDTKUCkio8a0YdTsl6Iwpe0AVq15Zx3nUIfpHpHR8SkLSSsQv4XTdkAfQ2eVR2q23mJIg-aAKGhTtF3aD19NQNg0JmVJHtZdPAIuNtq50kRY19Dq0vQejKBKYNkOLHFYpt6M6ban5D-Uu7T4lREYnlCNU81z98gYI8WqutK-2S2oXloyr5YeflyYw5UIqJ2zUJ6rMGob~6BKDr68eOBLKxI7PBzWURmSxC-ynG-Ru0fIvz~BcXyRpVEoIr70ZbiyVMQnb1TUpChkJi5nOMsPtxiSPlZ09h6rUon9mud7reUqo2K9uFQVAbf-xm7Fwd5Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
// src="https://imdb-video.media-imdb.com/vi4046503961/1434659607842-pgv4ql-1510969416302.mp4?Expires=1623215504&Signature=ZfdPzDuKhryCueXElipvkfxF8Kosy2JfkrEw~AJOZe87pWZ84O~u1QxHKMSCYHo4GJJkrJD4yGY6PZhiH-g6-TfYEyF8hKdE7biBqE-G~F0pEUP50Eqb6KZIUpIvCnd2tzY-D2CTGe8CuRlwRTc92S2a2vkfm2tbyDKKXKY9Y0dekfAUA8lj4Kw4gqztIjtYQthrlSUwa65Ir8mJhdhE5mkFA2UAZJgqC5Ro4ecBAW46fnOdDxPFeZ3Qj2pyv0FPtLIaiTS1uo8X3ingqWVo6YA0WSsVlQWfNygO3bu3ZDdiw~tXY5tb5hX2k99HLvMiw-eG3gpQ54BFre9uwBcXeg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"