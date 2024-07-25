import { GiMiner } from "react-icons/gi";
import { FaPhotoVideo, FaPastafarianism, FaPortrait, FaYoutube } from "react-icons/fa";
import { SiReactos } from "react-icons/si";
import { TbDeviceHeartMonitorFilled } from "react-icons/tb";
import { AiFillGithub, AiFillYoutube, AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";

export const headerMenus = [
{
    title:"my Youtube",
    icon: <GiMiner/>,
    src:'/'
},
{
    title:"추천 영상",
    icon: <FaPhotoVideo/>,
    src:'/today'
},
{
    title:"추천 개발자",
    icon: <SiReactos/>,
    src:'/developer'
},
{
    title:"웹디자인",
    icon: <TbDeviceHeartMonitorFilled/>,
    src:'/webd'
},
{
    title:"GSAP",
    icon: <FaPastafarianism/>,
    src:'/gsap'
},
{
    title:"포트폴리오 사이트",
    icon: <FaPortrait/>,
    src:'/port'
},
{
    title:"유튜브 사이트",
    icon: <FaYoutube/>,
    src:'/youtube'
}

];

export const searchKeyword=[
    {
        title:"myYoutube",
        src:"/search/myyoutube"
    },
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"CSS",
        src:"/search/CSS"
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
        icon: <AiFillGithub/>
    },
    {
        title:"youtube",
        url:"https://www.youtube.com/",
        icon: <AiFillYoutube/>
    },
    {
        title:"google",
        url:"https://www.google.com/",
        icon: <AiFillGoogleCircle/>
    },
    {
        title:"instagram",
        url:"https://www.instagram.com/",
        icon: <AiFillInstagram/>
    }
];