import React from 'react'
import {useSpring, animated, interpolate} from 'react-spring';
import Vektor from './Vektor';
import Garis from './Garis';
import VektorDisabled from './VektorDisabled';


export default function Workspace({setKoordinat, koordinat, tipeOperasi}) {
  const [props] = useSpring(()=>({from: {x: 0}, to: {x: -1800}, delay: 400, config:{friction: 100}}));


  return (
    <div className="w-screen" style={{height: "60vh", userSelect:"none"}}>
      
      <animated.div className="w-screen fixed z-40 h-screen" style={{background: "#253237", userSelect: "none", transform: interpolate([props.x], (x)=> `translate3d(${x}px,0,0)`)}}/>
      
      <div className="bg-gray-200 block w-screen h-full flex justify-center items-center relative">
        
        <div className="bg-gray-400 h-full absolute z-0 flex items-center" style={{width:"2px"}} />
        <div className="bg-gray-400 w-full relative translate-x-40 z-0" style={{height:"2px"}} />
        <Vektor setKoordinat={setKoordinat} id={0} />
        <Vektor setKoordinat={setKoordinat} id={1} />
        <VektorDisabled koordinat={koordinat} tipeOperasi={tipeOperasi}  />
        
        <svg className="absolute w-screen h-full ">
          {koordinat.map(({id, xy}, key)=>(<Garis key={key} xy={xy} tipeOperasi={tipeOperasi} id={id} />))}
        </svg>
      </div>
    </div>
  )
}
