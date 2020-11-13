import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import '../App.css';




export class PieComp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };


    }

    render() {
        //console.log("props", this.props);
        const data = {
            labels: [
                'Mosca Blanca',
                'Mosca Minadora',
                'Pulgón verde del melocotonero'
            ],
            datasets: [{
                data: [this.props.dataReporte.cantTotalMB, this.props.dataReporte.cantTotalMM, this.props.dataReporte.cantTotalPV],
                backgroundColor: [
                    '#cad1c9',
                    '#FFA835',
                    '#74cf1f'
                ],
                hoverBackgroundColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)'
                ]
            }]
        };

        return (
            <div>
                <h2 className="title-text">Resumen:</h2>
                <Pie data={data} options={{
                    responsive: true

                }} />
            </div>
        );
    }
}
export default PieComp