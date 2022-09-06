import React, {useState} from 'react'

function ReviewForm() {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const onClickHandler = () => {
        setComments ((comments) => [...comments, comment])
        
    };

    const onChangeHandler = (e) => {
        setComment(e.target.value);
    }

  return (
    <div className='main-container'>
        
        
        <div className='comment-flexbox'>
            <h3>Comments:</h3> 
            <textarea 
                value={comment} 
                onChange= {onChangeHandler} 
                className='textarea' 
                placeholder='What is your feedback?'/>
                <br/>
                <button onClick={onClickHandler} className='feedbackSubmit'>
                    Submit
                </button>

            {comments.map((text) => (
            <div className='comment-container'>{text}</div>
        ))}
        </div>
    </div>
  );
}

export default ReviewForm;