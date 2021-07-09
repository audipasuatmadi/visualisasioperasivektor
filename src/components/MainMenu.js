import React from 'react'

import {ParallaxLayer, Parallax} from 'react-spring/renderprops-addons';
import {Link} from 'react-router-dom';

export default function MainMenu() {
  return (
    <div>
      <Parallax pages={2} className=" bg-blue-500">
        <ParallaxLayer className="z-10" offset={0} speed={0}>
          <div className="  shadow-xl h-screen w-screen flex justify-center items-center" style={{background: "#253237", height: "95vh"}}>
            <div className="text-center">
              <div className=" mt-32">
                <h1 className="text-xl lg:text-3xl font-bold font-sans text-white">Visualisasi Operasi Vektor</h1>
                <p className="text-white font-bold -mt-2">Oleh Kelompok 4 (D)</p>
              </div>
              <div>
                <Link to="/aplikasi"><button className="mt-5 py-1 px-8 lg:font-bold text-white rounded hover:shadow-md hover:bg-white transition-all hover:text-gray-700 border-white duration-200 outline-none focus:outline-none border-2">Fitur Utama</button></Link>
              </div>
              <div>
                <p className=" mt-32 lg:mt-64 text-white font-bold">Data Kelompok Dibawah :)</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
          
        <ParallaxLayer className="h-screen w-screen" offset={1} speed={-0.6}>
          <div className="h-screen w-screen flex justify-center items-center">  
            <div className="block flex items-center flex-col p-2">
              <h1 className=" block font-bold text-white text-3xl">Kelompok 4</h1>
              <p className="font-bold text-white -mt-2 mb-4">Anggota</p>
              <div className=" flex">
                <div className=" mr-2">
                  <h3 className="text-white text-sm ">Anak Agung Angga Aditya</h3>
                  <h3 className="text-white text-sm ">I Gusti Agung Gde Abhirama A.</h3>
                  <h3 className="text-white text-sm ">Putu Audi Pasuatmadi</h3>
                  <h3 className="text-white text-sm ">IGNB Sambu Viswanata</h3>
                </div>
                <div>
                  <h3 className="text-white text-sm ">(1908561093)</h3>
                  <h3 className="text-white text-sm ">(1908561094)</h3>
                  <h3 className="text-white text-sm ">(1908561095)</h3>
                  <h3 className="text-white text-sm ">(1908561096)</h3>
                </div>
              </div>
            </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  </div>
  )
}
