import React from 'react'

export default function Profile({image,name,title,status}) {
  return (
    <div className='profile'>
      <div className="profile-inner">
        {status && <div className="badge">new</div>}
        <img className='photo'
         src={image}
         alt="" />
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
    </div>
  )
}
