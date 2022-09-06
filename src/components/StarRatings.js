import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'
import ReviewForm from './ReviewForm';


const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='starRating'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

            return (
                <label>
                    <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                    />
                   
                    <FaStar 
                    className='star'
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    size={25}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                </label>    
            );
        })}
        <p>You have given the movie a rating of {rating}.</p>

        <ReviewForm />

        </div>
    );
};

export default StarRating;