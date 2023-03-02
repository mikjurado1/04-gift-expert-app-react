import React from 'react'

export default function GifItem({id, images, title}) {

  return (
    <div className='card'>
       <img src={images} alt={title}/>
       <p>{title}</p>
    </div>
  )
}
