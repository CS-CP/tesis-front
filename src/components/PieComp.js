import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import '../App.css';

const data = {
    labels: [
        'Mosca Blanca',
        'Mosca Minadora',
        'Pulgón verde del melocotonero'
    ],
    datasets: [{
        data: [300, 50, 100],
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


export class PieComp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };


    }

    render() {

        return (
            <div>
                <h2>Resumen del total de imágenes:</h2>
                <Pie data={data} />
            </div>
        );
    }
}
export default PieComp