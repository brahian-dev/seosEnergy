import { Bar } from "react-chartjs-2";

import { convertKwNetPower } from '../../../utils/helper'

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
    const onRenderGroupedChart = (data) => {

        const mondayGeneration = data[0].generationPower,
            tuesdayGeneration = data[1].generationPower,
            wednesdayGeneration = data[2].generationPower,
            thursdayGeneration = data[3].generationPower,
            fridayGeneration = data[4].generationPower,
            saturdayGeneration = data[5].generationPower,
            sundayGeneration = data[6].generationPower

        const mondayConsum = data[0].consumptionPower,
            tuesdayConsum = data[1].consumptionPower,
            wednesdayConsum = data[2].consumptionPower,
            thursdayConsum = data[3].consumptionPower,
            fridayConsum = data[4].consumptionPower,
            saturdayConsum = data[5].consumptionPower,
            sundayConsum = data[6].consumptionPower

        const mondayPower = data[0].netPower,
            tuesdayPower = data[1].netPower,
            wednesdayPower = data[2].netPower,
            thursdayPower = data[3].netPower,
            fridayPower = data[4].netPower,
            saturdayPower = data[5].netPower,
            sundayPower = data[6].netPower

        const dataGraph = {
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            datasets: [
                {
                    label: 'Generacion KW',
                    data: [
                        convertKwNetPower(mondayGeneration),
                        convertKwNetPower(tuesdayGeneration),
                        convertKwNetPower(wednesdayGeneration),
                        convertKwNetPower(thursdayGeneration),
                        convertKwNetPower(fridayGeneration),
                        convertKwNetPower(saturdayGeneration),
                        convertKwNetPower(sundayGeneration),
                    ],
                    backgroundColor: '#EA907A',
                },
                {
                    label: 'Consumo KW',
                    data: [
                        convertKwNetPower(mondayPower),
                        convertKwNetPower(tuesdayPower),
                        convertKwNetPower(wednesdayPower),
                        convertKwNetPower(thursdayPower),
                        convertKwNetPower(fridayPower),
                        convertKwNetPower(saturdayPower),
                        convertKwNetPower(sundayPower),
                    ],
                    backgroundColor: '#FBC687',
                },
                {
                    label: 'Poder KW',
                    data: [
                        convertKwNetPower(mondayConsum),
                        convertKwNetPower(tuesdayConsum),
                        convertKwNetPower(wednesdayConsum),
                        convertKwNetPower(thursdayConsum),
                        convertKwNetPower(fridayConsum),
                        convertKwNetPower(saturdayConsum),
                        convertKwNetPower(sundayConsum),
                    ],
                    backgroundColor: '#F4F7C5',
                },
            ],
        };

        return dataGraph
    }

    return (
        <>
            <div className='header'>
                <h1 className='title'>Poder</h1>
            </div>
            <Bar data={ onRenderGroupedChart(data) } options={options} />
        </>
    );
}

export default index;