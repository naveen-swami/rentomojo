import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';

export default function ({ movieId }) {

    console.log(movieId);
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg");
    const [year, setYear] = useState("2019");
    const [rating, setRating] = useState("4.5");

    const history = useHistory();

    useEffect(() => {
        setMovieFields(movieId.split("/")[2]);
    }, [])

    function setMovieFields(id) {
        axios.get("https://imdb8.p.rapidapi.com/title/get-overview-details", {
            headers: {
                "x-rapidapi-key": "9eb3df7d30msh04f1e05230fab8dp1cc16bjsnb29f2d160701",
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "useQueryString": true
            },
            params: {
                "tconst": id
            }
        }).then(response => {
            const data = response.data;
            console.log(data);
            setTitle(data.title.title);
            setImageUrl(data.title.image.url);
            setYear(data.title.year);
            setRating(data.ratings.rating || "N/A");
        })
            .catch(err => console.log("error: ", err))
    }

    const setImageToFallback = () => {
        setImageUrl(
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
        );
    };

    function redirectMoveDetailPage() {
        history.push(`/movie/${movieId.split("/")[2]}`);
    }

    return (
        <div className="card-container" onClick={redirectMoveDetailPage}>
            <div className="image-container">
                <img style={{ maxHeight: '300px', maxWidth: '200px' }} src={imageUrl} alt="poster" onError={setImageToFallback}></img>
            </div>
            <span>{title}</span>
            <div className="year-rating">
                <p>{year}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
}