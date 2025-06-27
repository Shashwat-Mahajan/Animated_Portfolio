import React, { useRef ,useState } from 'react'
import TiltText from '../components/TiltText'
import Page1BottomText from '../components/Page1BottomText'
import logo from "../assets/images/logo_avatar.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Page1 = () => {

  const tiltRef = useRef(); 
  const [xval, setxval] = useState();
  const [yval, setyval] = useState();
  const mouseMoving = (e) => {
    setxval((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2)/70);
    setyval(
      -(e.clientY -
      tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().width / 2)/20
    );
    // tiltRef.current.style.transform = `rotateX(${yval}deg) rotateY(${xval}deg)`;
  }

  useGSAP(()=>{
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yval}deg) rotateY(${xval}deg)`,
      duration: 5,
      ease: "elastic.out(1,0.1)",
    });
  },[xval,yval]);

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen p-7 bg-white relative"
    >
      <div
        id="page1-in"
        className="relative shadow-xl shadow-gray-700 h-full bg-cover w-full rounded-[50px] bg-black bg-[url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]"
      >
        <img className="ml-5 h-50 w-60" src={logo}></img>
        <TiltText tiltRef={tiltRef} />
        <Page1BottomText />
      </div>
    </div>
  );
}

export default Page1
