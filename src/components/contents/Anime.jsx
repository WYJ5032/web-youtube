import React from 'react'
import { AnimeText } from '../../data/anime'
import { Link } from 'react-router-dom'

const Anime = () => {
  return (
    <section id='movie'>
      <h2>🖼추천 애니메이션을 소개합니다.</h2>
      <div className='video__inner'>
        {AnimeText.map((anime, i)=>(
          <div className='video' key={i}>
            <div className='video__thumb play__icon'>
              <Link to={`/anime/${anime.videoId}`}>
                <img src={anime.img} alt={anime.title}/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Anime