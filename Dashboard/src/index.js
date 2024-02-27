// Llamada a la API
const apiUrl = 'https://covid.ourworldindata.org/data/owid-covid-data.json';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('Datos globales de COVID-19:', data);
    
    // Creación del gráfico
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
  })
  .catch(error => console.error('Error al obtener datos:', error));