import React from 'react'
import Main from '../components/section/Main'
import Portfolio from '../components/contents/Portfolio'
import Today from '../components/contents/Today'
import Youtube from '../components/contents/Youtube'
import Music from '../components/contents/Music'
import VideoSlider from '../components/video/VideoSlider'
import { movieText } from '../data/movie'
import { BookText } from '../data/book'
import { AnimeText } from '../data/anime'

const Home = () => {
  return (
    <Main title="유튜브 채널" description="유튜브 채널 페이지입니다.">
      <Today/>
      <Music/>
      <VideoSlider videos={movieText} title='🎞추천 영화를 소개합니다.' id='movie'/>
      <VideoSlider videos={BookText} title='📖추천 도서를 소개합니다.' id='book'/>
      <VideoSlider videos={AnimeText} title='🖼추천 애니메이션을 소개합니다.' id='anime'/>
      
      <Portfolio/>
      <Youtube/>
    </Main>
  )
}

export default Home