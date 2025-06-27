import React from 'react'
import TiltText from '../components/TiltText'
import Page1BottomText from '../components/Page1BottomText'
import logo from "../assets/images/logo_avatar.png";

const Page1 = () => {
  return (
    <div className="h-screen p-7 bg-white">
      <div className="shadow-xl shadow-gray-700 h-full bg-cover w-full rounded-[50px] bg-black bg-[url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]">
        <img className="ml-5 h-50 w-60" src={logo}></img>
        <TiltText />
        <Page1BottomText />
      </div>
    </div>
  );
}

export default Page1
