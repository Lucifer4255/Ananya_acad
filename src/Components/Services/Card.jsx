import React from 'react'

export const Card = ({title,img}) => {
  return (
    <div class="card" style={{ width: '19rem' }}>
        <img src={img} class="card-img-top" alt="..." style={{ height: '18rem' }} />
        <div class="card-body">
            <p class="card-title text-center h5">{title}</p>
            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
  )
}
