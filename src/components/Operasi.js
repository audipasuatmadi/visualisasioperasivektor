import React from 'react'

export default function Operasi({koordinat, changeOperasi, tipeOperasi}) {
  
  const DisplayVektorTiga = () => {
    if (tipeOperasi !== "visualisasi") {
      return (<div className=" border-2 rounded px-4 py-4 text-center">
      <p className="text-gray-700 font-bold mb-4">Vektor Hasil</p>
      <p className="bg-gray-300 block w-16 rounded-sm py-1 text-center">{Math.ceil(koordinat[2].xy[0])}</p>
      <p className="bg-gray-300 block w-16 rounded-sm py-1 mt-1 text-center">{Math.ceil(koordinat[2].xy[1]) * -1}</p>
    </div>);
    } else {
      return (<div></div>)
    }
  }

  return (
    <div className="w-screen">
        <div className="flex justify-center">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl font-bold mt-4 text-blue-700 capitalize">{tipeOperasi}</h1>
              <select onChange={changeOperasi} className="bg-gray-400 rounded-sm px-6 py-2 text-gray-800 font-bold focus:outline-none">
                <option value="visualisasi">Visualisasi</option>
                <option value="pertambahan">Pertambahan</option>
                <option value="pengurangan">Pengurangan</option>
                <option value="proyeksiortogonal">Proyeksi Ortogonal</option>
              </select>
            </div>

            <div className="flex justify-evenly mx-20 mt-10">
              <div>
                <div className=" border-2 rounded px-4 py-4 text-center">
                  <p className="text-gray-700 font-bold mb-4">Vektor 1</p>
                  <p className="bg-gray-300 block w-16 rounded-sm py-1 text-center">{koordinat[0].xy[0]}</p>
                  <p className="bg-gray-300 block w-16 rounded-sm py-1 mt-1 text-center">{koordinat[0].xy[1] * -1}</p>
                </div>
              </div>

              <div>
                <div className=" border-2 rounded px-4 py-4 text-center">
                  <p className="text-gray-700 font-bold mb-4">Vektor 2</p>
                  <p className="bg-gray-300 block w-16 rounded-sm py-1 text-center">{koordinat[1].xy[0]}</p>
                  <p className="bg-gray-300 block w-16 rounded-sm py-1 mt-1 text-center">{koordinat[1].xy[1] * -1}</p>
                </div>
              </div>

              <div>
                <DisplayVektorTiga/>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-blue-700 mt-6 flex justify-center items-center">  
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
    </div>
  )
}
