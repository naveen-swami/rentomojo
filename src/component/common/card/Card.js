import React from 'react';

export default function ({ imageUrl, title, year, rating }) {

    console.log(imageUrl);

    return (
        <div className="card-container">
            <div className="image-container">
                <img style={{ maxHeight: '300px', maxWidth: '200px' }} src={imageUrl}></img>
            </div>
            <span>{title}</span>
            <div className="year-rating">
                <p>{year}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
}