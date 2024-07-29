import { MdOutlineSmartDisplay, MdWeb, MdAnimation } from "react-icons/md";
import { FaRegStar, FaDev, FaPortrait } from "react-icons/fa";
import { AiFillGithub, AiFillYoutube, AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title:"My Youtube",
        icon:<MdOutlineSmartDisplay />,
        src:"/"
    },
    {
        title:"추천 영상",
        icon:<FaRegStar />,
        src:"/today"
    },
    {
        title:"추천 음악",
        icon:<FaDev />,
        src:"/music"
    },
    {
        title:"추천 영화",
        icon:<MdWeb />,
        src:"/movie"
    },
    {
        title:"추천 도서",
        icon:<FaPortrait />,
        src:"/book"
    },
    {
        title:"추천 애니",
        icon:<MdAnimation />,
        src:"/anime"
    },
    {
        title:"유튜브 사이트",
        icon:<MdOutlineSmartDisplay />,
        src:"/youtube"
    }
];

export const searchKeyword=[
    {
        title:"MyYoutube",
        src:"/search/myyoutube"
    },
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"CSS",
        src:"/search/css"
    },
    {
        title:"JavaScript",
        src:"/search/javascript"
    },
    {
        title:"React.js",
        src:"/search/react.js"
    },
    {
        title:"JAVA",
        src:"/search/java"
    },
    {
        title:"ORACLE",
        src:"/search/oracle"
    },
    {
        title:"SPRING",
        src:"/search/spring"
    },
    {
        title:"music",
        src:"/search/music"
    },
    {
        title:"Vue.js",
        src:"/search/vue.js"
    }
];

export const snsLink=[
    {
        title:"github",
        url:"https://github.com/",
        icon:<AiFillGithub />
    },
    {
        title:"youtube",
        url:"https://www.youtube.com/",
        icon:<AiFillYoutube />
    },
    {
        title:"google",
        url:"https://www.google.co.kr/",
        icon:<AiFillGoogleCircle />
    },
    {
        title:"instagram",
        url:"https://www.instagram.com/",
        icon:<AiFillInstagram />
    }
];