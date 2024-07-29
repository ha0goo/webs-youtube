import React from 'react'

import { BookText } from '../../data/book'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <section id='book'>
      <h2>🤓추천 책을 소개합니다.</h2>
      <div className='video__inner'>
        {BookText.map((video, key) => (
          <div className='video' key={key}>
            <div className='video__thumb play__icon'>


              <Link to={`/book/${video.videoId}`}>
                <img src={video.img} alt={video.title}/>
              
              </Link>
            </div>            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Book