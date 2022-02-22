import { Line } from "react-chartjs-2";

import { convertKwNetEnergy } from '../../../utils/helper'

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                beginAtZero: true,
                },
            },
        ],
    },
};

const index = ({ data }) => {

    const onRenderLineChart = (data) => {

        const monday = data[0]?.netEnergy,
            tuesday = data[1]?.netEnergy,
            wednesday = data[2]?.netEnergy,
            thursday = data[3]?.netEnergy,
            friday = data[4]?.netEnergy,
            saturday = data[5]?.netEnergy,
            sunday = data[6]?.netEnergy

        const dataGraph = {
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            datasets: [
                {
                label: 'Energia KW',
                data: [
                    convertKwNetEnergy(monday),
                    convertKwNetEnergy(tuesday),
                    convertKwNetEnergy(wednesday),
                    convertKwNetEnergy(thursday),
                    convertKwNetEnergy(friday),
                    convertKwNetEnergy(saturday),
                    convertKwNetEnergy(sunday)
                ],
                fill: false,
                backgroundColor: '#F1935C',
                borderColor: 'rgba(241, 147, 92, 0.2)',
                },
            ],
        };

        return dataGraph
    }

    return (
        <>
            <div className='header'>
                <h1 className='title'>Energia</h1>
            </div>
            <Line data={ onRenderLineChart(data) } options={options} />
        </>
    );
}

export default index;