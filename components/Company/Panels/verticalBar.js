import { Bar } from 'react-chartjs-2';
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

const index = ({ data, company }) => {
    const onRenderBarChart = (data) => {
        const mondayGeneration = data[0]?.generationEnergy,
            tuesdayGeneration = data[1]?.generationEnergy,
            wednesdayGeneration = data[2]?.generationEnergy,
            thursdayGeneration = data[3]?.generationEnergy,
            fridayGeneration = data[4]?.generationEnergy,
            saturdayGeneration = data[5]?.generationEnergy,
            sundayGeneration = data[6]?.generationEnergy

        const mondayConsum = data[0]?.consumptionEnergy,
            tuesdayConsum = data[1]?.consumptionEnergy,
            wednesdayConsum = data[2]?.consumptionEnergy,
            thursdayConsum = data[3]?.consumptionEnergy,
            fridayConsum = data[4]?.consumptionEnergy,
            saturdayConsum = data[5]?.consumptionEnergy,
            sundayConsum = data[6]?.consumptionEnergy

        const dataGraph = {
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            datasets: [
                {
                    label: 'Generacion KW',
                    data: [
                        convertKwNetEnergy(mondayGeneration),
                        convertKwNetEnergy(tuesdayGeneration),
                        convertKwNetEnergy(wednesdayGeneration),
                        convertKwNetEnergy(thursdayGeneration),
                        convertKwNetEnergy(fridayGeneration),
                        convertKwNetEnergy(saturdayGeneration),
                        convertKwNetEnergy(sundayGeneration),
                    ],
                    backgroundColor: '#BD574E',
                },
                {
                    label: 'Consumo KW',
                    data: [
                        convertKwNetEnergy(mondayConsum),
                        convertKwNetEnergy(tuesdayConsum),
                        convertKwNetEnergy(wednesdayConsum),
                        convertKwNetEnergy(thursdayConsum),
                        convertKwNetEnergy(fridayConsum),
                        convertKwNetEnergy(saturdayConsum),
                        convertKwNetEnergy(sundayConsum),
                    ],
                    backgroundColor: '#FA877F',
                },
            ],
        };

        return dataGraph
    }

    return (
        <>
            <div className='header'>
                <h1 className='title'>Historial</h1>
            </div>
            <Bar data={ onRenderBarChart(data) } options={options} />
        </>
    );
}

export default index;