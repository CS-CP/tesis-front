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
        console.log("props", this.props);
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
                    '#f0ec9c',
                    '#74cf1f'
                ],
                hoverBackgroundColor: [
                    '#1890ff',
                    '#1890ff',
                    '#1890ff'
                ]
            }]
        };

        return (
            <div>
                <h2 className="title-text">Resumen:</h2>
                <Pie data={data} />
            </div>
        );
    }
}
export default PieComp