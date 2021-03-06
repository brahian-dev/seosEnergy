import { Line } from "react-chartjs-2";

const data = {
    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    datasets: [
        {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

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

const index = () => {
    return (
        <>
            <div className='header'>
                <h1 className='title'>Energia</h1>
            </div>
            <Line data={data} options={options} />
        </>
    );
}

export default index;