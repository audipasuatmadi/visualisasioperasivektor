import React, { Component } from 'react'
import Workspace from './Workspace';
import Operasi from './Operasi';


export default class Aplikasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operasi: "visualisasi",
      koordinat:[
        {id: 0, xy: [0, 0]},
        {id: 1, xy: [0, 0]},
        {id: 2, xy: [0, 0]}
      ]
    }
  }


  onCoordinateChange = () => {
    const operasi = this.state.operasi;
    if (operasi === "pertambahan" || operasi === "pengurangan") {
      let newKoordinat02;
      if (operasi === "pertambahan") {
        newKoordinat02 = [this.state.koordinat[0].xy[0] + this.state.koordinat[1].xy[0], this.state.koordinat[0].xy[1] + this.state.koordinat[1].xy[1]];
      } else {
        newKoordinat02 = [this.state.koordinat[0].xy[0] - this.state.koordinat[1].xy[0], this.state.koordinat[0].xy[1] - this.state.koordinat[1].xy[1]];
      }
      const newState = {...this.state, koordinat: this.state.koordinat.map((koords)=>{
        if (koords.id === 2) {
          koords.xy = newKoordinat02;
          return koords;
        } else {
          return koords;
        }
      })}
      this.setState(newState);
    } else if (operasi === "proyeksiortogonal") {
      const koordinat = this.state.koordinat;
      const koordinat01 = koordinat[0].xy;
      const koordinat02 = koordinat[1].xy;
      
      if (koordinat02 !== [0, 0]) {
        const step1 = ((koordinat01[0] * koordinat02[0]) + (koordinat01[1] * koordinat02[1]))/((koordinat02[0]**2) + koordinat02[1]**2);
        const step2 = [koordinat02[0] * step1, koordinat02[1] * step1];

        const newState = {...this.state, koordinat: this.state.koordinat.map((koords)=>{
          if (koords.id === 2) {
            koords.xy = step2;
            return koords;
          } else {
            return koords;
          }
        })}

      this.setState(newState);
      }
    }
  }

  setKoordinat = (id, xy)=> {
    if (id === null) return;
    const updatedKoordinat = this.state.koordinat.map((kords)=> {
      if (kords.id === id) {
        kords.xy = xy;
        return kords;
      } else {
        return kords;
      }
    })
    const newState = {...this.state, koordinat: updatedKoordinat};
    this.setState(newState, ()=>{this.onCoordinateChange()});
  }

  changeOperasi = (e) => {
    const operasi = e.target.value;
    const newState = {...this.state, operasi};
    this.setState(newState, this.onCoordinateChange);
  }

  render() {
    return (
      <div>
        <Workspace setKoordinat={this.setKoordinat} koordinat={this.state.koordinat} tipeOperasi={this.state.operasi}/>
        <Operasi koordinat={this.state.koordinat} changeOperasi={this.changeOperasi} tipeOperasi={this.state.operasi} />
      </div>
    )
  }
}
