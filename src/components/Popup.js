import React from 'react'
import StarRating from './StarRatings'

function Popup( { selected, closePopup}) {
  return (
    <section className='popup'>
        <div className='content'>
            <h2>{ selected.Title } <span>({ selected.Year })</span></h2>
            <div className='plot'>
                <img src={selected.Poster} />
                <p>{selected.Plot}</p>
            </div>

          <div>
            <StarRating />
          </div> 
          
            <button className='close' onClick={closePopup}>Close</button>
        </div>
    </section>
  )
}

export default Popup