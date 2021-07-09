import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';

export default function Vektor({setKoordinat, id}) {
  const [getXY, setXY] = useState([0, 0]);
  const [{xy}, set] = useSpring(()=>({xy: [0, 0]}));
  
  const bind = useDrag(({offset})=> {
    set({xy: offset});
    setXY(offset);
    setKoordinat(id, offset);
  }, { bounds: { left: -700, right: 700, top: -200, bottom: 200 } })

  return (
    <animated.div {...bind()} style={{transform: xy.interpolate((x, y)=>`translate3d(${x}px, ${y}px, 0)`), userSelect:"none"}} className="bg-gray-400 w-6 h-6 z-20 absolute rounded-full cursor-pointer">
      <div className="block transform -translate-y-6 -translate-x-2 text-center">
        <p className=" text-center">({getXY[0]},{getXY[1] * -1})</p>
      </div>
    </animated.div>
    // <animated.div style={{transform: xy.interpolate((x, y)=>`translate3d(${x}px, ${y}px, 0)`), userSelect:"none"}} className="z=10 absolute bg-gray-600 w-4 h-4 rounded-full">
    //   <div onClick={()=>console.log("Hay")}  className=""></div>
    // </animated.div>
  )
}
