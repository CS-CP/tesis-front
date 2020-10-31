import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";

import '../App.css';




export class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };


  }

  render() {
    var imgs = [];
    var cant_img = 0;
    var nombres_img = [];
    var mb = this.props.dataReporte.detalleImgs.map(detalle => {
      imgs.push(detalle.imgB64);
      cant_img += 1;
      nombres_img.push("Imagen N°" + cant_img);
    });
    /*
    <div>
  <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
  <p className="legend">Legend 1</p>
</div>
<div>
  <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
  <p className="legend">Legend 2</p>
</div>
<div>
  <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
  <p className="legend">Legend 3</p>
</div>
<div>
  <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
  <p className="legend">Legend 4</p>
</div>
     */

    return (<div>
      <Carousel>
        {imgs.map((img, index) => (
          <div className="container-centered">
            <img alt="" src={img} />
            <p className="legend">{nombres_img[index]}</p>
          </div>
        ))}
      </Carousel></div>
    );
  }
}
export default CarouselComp