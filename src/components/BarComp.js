import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import '../App.css';



export class BarComp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };


    }

    render() {
        var lista_mb = [];
        var lista_mm = [];
        var lista_pv = [];
        var cant_img = 0;
        var nombres_img = [];
        var mb = this.props.dataReporte.detalleImgs.map(detalle => {
            lista_mb.push(detalle.MoscaBlanca);
            lista_mm.push(detalle.MoscaMinadora);
            lista_pv.push(detalle.PulgonVerde);
            cant_img += 1;
            nombres_img.push("Imagen N°" + cant_img);
        });

        const data = {
            labels: nombres_img,//['Imagen 1', 'Imagen 2', 'Imagen 3', 'Imagen 4', 'Imagen 5', 'Imagen 6'],
            datasets: [
                {
                    label: this.props.insectType[0],
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: lista_mb,//[65, 59, 80, 81, 56, 55]
                    minBarLength: 2,
                },
                {
                    label: this.props.insectType[1],
                    backgroundColor: 'rgba(255,168,53,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    minBarLength: 2,
                    data: lista_mm//[65, 59, 80, 81, 56, 55]
                },
                {
                    label: this.props.insectType[2],
                    backgroundColor: 'rgba(80,161,12,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    minBarLength: 2,
                    data: lista_pv//[65, 59, 80, 81, 56, 55]
                },
            ]
        };
        return (
            <div>
                <h2 className="title-text">Distribución de los resultados:</h2>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}
export default BarComp