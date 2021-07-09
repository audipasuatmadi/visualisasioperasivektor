import React, {useState, useEffect} from 'react'
import {useSpring, animated} from 'react-spring';

export default function VektorDisabled({koordinat, tipeOperasi}) {
  const [getXY, setXY] = useState([0, 0]);
  const [{xy}, set] = useSpring(()=>({xy: [0, 0]}));

  const tentukanRender = () => {
    return tipeOperasi !== "visualisasi" ? "" : "hidden";
  }

  useEffect(()=>{
    if (tipeOperasi !== "visualisasi") {
      set({xy: koordinat[2].xy})
      setXY(koordinat[2].xy);
    }
  }, [koordinat, tipeOperasi, set, setXY])
  

  return (
    <animated.div style={{transform: xy.interpolate((x, y)=>`translate3d(${x}px, ${y}px, 0)`), userSelect:"none"}} className={" absolute bg-yellow-400 w-6 h-6 z-10 absolute rounded-full cursor-pointer " + tentukanRender()}>
      <div className="block transform -translate-y-6 -translate-x-2 text-center">
        <p className=" text-center">({Math.ceil(getXY[0])},{Math.ceil(getXY[1]) * -1})</p>
      </div>
    </animated.div>
    // <animated.div style={{transform: xy.interpolate((x, y)=>`translate3d(${x}px, ${y}px, 0)`), userSelect:"none"}} className="z=10 absolute bg-gray-600 w-4 h-4 rounded-full">
    //   <div onClick={()=>console.log("Hay")}  className=""></div>
    // </animated.div>
  )
}
