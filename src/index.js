import Chart from 'chart.js/auto';
import { fetchData } from './src/utils.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=a83d9b96ab954ea4a7b7aaf58f88c70c';
        const data = await fetchData(apiUrl);

        const rate = data.rates.CLP;

        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Tipo de Cambio'],
                datasets: [{
                    label: 'Tipo de Cambio respecto a USD',
                    data: [rate],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
});
