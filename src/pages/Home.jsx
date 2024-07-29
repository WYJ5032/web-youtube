import React from 'react'
import Main from '../components/section/Main'
import Anime from '../components/contents/Anime'
import Portfolio from '../components/contents/Portfolio'
import Today from '../components/contents/Today'
import Movie from '../components/contents/Movie'
import Book from '../components/contents/Book'
import Youtube from '../components/contents/Youtube'
import Music from '../components/contents/Music'

const Home = () => {
  return (
    <Main title="유튜브 채널" description="유튜브 채널 페이지입니다.">
      <Today/>
      <Music/>
      <Movie/>
      <Book/>
      <Anime/>
      <Portfolio/>
      <Youtube/>
    </Main>
  )
}

export default Home