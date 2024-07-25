import React from 'react'

import { MdOutlineSmartDisplay, MdWeb, MdAnimation } from "react-icons/md";
import { FaRegStar, FaDev, FaPortrait } from "react-icons/fa";
import { AiFillGithub, AiFillYoutube, AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";


const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header__logo'>
        <a href='/'>
          <em aria-hidden='true'></em>
          <span>My<br/>youtube</span>
        </a>
      </h1>
      <nav className='header__menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><MdOutlineSmartDisplay />My Youtube</a>
          </li>
          <li>
            <a href='/today'><FaRegStar />추천 영상</a>
          </li>
          <li>
            <a href='/developer'><FaDev />추천 개발자</a>
          </li>
          <li>
            <a href='/webd'><MdWeb />웹디자인</a>
          </li>
          <li>
            <a href='/gsap'><MdAnimation />GSAP</a>
          </li>
          <li>
            <a href='/port'><FaPortrait />포트폴리오 사이트</a>
          </li>
          <li>
            <a href='/youtube'><MdOutlineSmartDisplay />유튜브 사이트</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
            <a href='/search/myyoutube'>MyYoutube</a>
          </li>
          <li>
            <a href='/search/html'>HTML</a>
          </li>
          <li>
            <a href='/search/css'>CSS</a>
          </li>
          <li>
            <a href='/search/javascript'>JavaScript</a>
          </li>
          <li>
            <a href='/search/react.js'>React.js</a>
          </li>
          <li>
            <a href='/search/java'>JAVA</a>
          </li>
          <li>
            <a href='/search/oracle'>ORACLE</a>
          </li>
          <li>
            <a href='/search/spring'>SPRING</a>
          </li>
          <li>
            <a href='/search/music'>music</a>
          </li>
          <li>
            <a href='/search/vue.js'>Vue.js</a>
          </li>
        </ul>
      </nav>
      <div className='header__sns'>
        <ul>
          <li>
            <a href='https://github.com/' rel='noopener noreferrer'>
              <AiFillGithub />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='https://www.youtube.com/' rel='noopener noreferrer'>
              <AiFillYoutube />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='https://www.google.co.kr/' rel='noopener noreferrer'>
              <AiFillGoogleCircle />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='https://www.instagram.com/' rel='noopener noreferrer'>
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header