import React, {useEffect} from 'react'
import {useSpring, animated} from 'react-spring';

export default function Garis({xy, id, tipeOperasi}) {

  const [{XY}, set] = useSpring(()=>({XY: [0, 0]}));
  const checkJikaVisualisasi = () => {
    if (id === 2 && tipeOperasi === "visualisasi") {
      return 'hidden'
    } else {
      return '';
    }
  }
  useEffect(()=>{
    if (XY !== xy) {
      set({XY: xy})
    }
  }, [xy, XY, set])

  return (
    <animated.line x1="0" y1="0" x2={XY.interpolate((x, y)=>x)} y2={XY.interpolate((x, y)=>y)} strokeWidth="2" stroke="black" className={"absolute " + checkJikaVisualisasi()} style={{transform:"translate(50%, 50%)"}}/>
  )
}
