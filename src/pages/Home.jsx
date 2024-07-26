import React from 'react'
import Main from '../components/section/Main'
import Developer from '../components/contents/Developer'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Today from '../components/contents/Today'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <Main title="유튜브 채널" description="유튜브 채널 페이지입니다.">
      <Today/>
      <Developer/>
      <Webd/>
      <Website/>
      <Gsap/>
      <Portfolio/>
      <Youtube/>
    </Main>
  )
}

export default Home