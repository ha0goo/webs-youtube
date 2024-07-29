import React from 'react'

import { AnimeText } from '../../data/Anime'
import { Link } from 'react-router-dom'

const Anime = () => {
  return (
    <section id='anime'>
      <h2>🐱‍🏍추천 애니메이션을 소개합니다.</h2>
      <div className='video__inner'>
        {AnimeText.map((video, key) => (
          <div className='video' key={key}>
            <div className='video__thumb play__icon'>


              <Link to={`/anime/${video.videoId}`}>
                <img src={video.img} alt={video.title}/>
              
              </Link>
            </div>            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Anime