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
        const data = {
            labels: ['Imagen 1', 'Imagen 2', 'Imagen 3', 'Imagen 4', 'Imagen 5', 'Imagen 6'],
            datasets: [
                {
                    label: 'Cantidad de insectos identificados',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55]
                }
            ]
        };
        return (
            <div>
                <h2>{this.props.insectType}:</h2>
                <Bar
                    data={data}
                    width={50}
                    height={100}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}
export default BarComp