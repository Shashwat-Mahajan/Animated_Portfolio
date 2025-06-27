import React from 'react'

const TiltText = (props) => {
  return (
    <div ref={props.tiltRef} className="relative ml-14 mt-20" id="tiltDiv">
      <h1 className="text-[4.2vw] font-[anzo2] text-white leading-[4vw] word-tight">
        I AM{" "}
        <span className="text-black">
          DARK MODE<sup>TM</sup>
        </span>
      </h1>
      <h1 className="text-white font-[anzo1]  text-[10vw] leading-[7vw]">
        DEVELOPER
      </h1>
      <h1 className="text-[4.2vw] font-[anzo2] leading-[4vw] text-white">
        TO HIRE
      </h1>
    </div>
  );
}

export default TiltText
