import Chart from 'chart.js/auto';
import { fetchData } from './src/utils.js';

document.addEventListener('DOMContentLoaded', async () => {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Configuración inicial del gráfico de líneas
    const initialData = {
        labels: ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'],
        datasets: [{
            label: 'Tipo de Cambio USD a CLP',
            data: [700, 710, 695, 705, 720],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }],
    };

    const myChart = new Chart(ctx, {
        type: 'line',
        data: initialData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        displayFormats: {
                            day: 'MMM D',
                        },
                    },
                    title: {
                        display: true,
                        text: 'Fecha',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Tipo de Cambio (USD a CLP)',
                    },
                },
            },
        },
    });

    // Función para actualizar el gráfico
    window.updateChart = async () => {
        try {
            const apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=a83d9b96ab954ea4a7b7aaf58f88c70c';
            const data = await fetchData(apiUrl);

            console.log('Datos obtenidos de la API:', data); 


            const rate = data.rates.CLP;

            // Actualizar datos del gráfico de líneas
            const newData = {
                labels: ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'],
                datasets: [{
                    label: 'Tipo de Cambio USD a CLP',
                    data: [700, 710, 695, 705, 720],  // datos ficticios
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false,
                }],
            };

            myChart.data = newData;
            myChart.update();

        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };
});
