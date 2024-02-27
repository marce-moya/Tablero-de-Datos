document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://restcountries.com/v3.1/all';

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => displayCountriesChart(data))
        .catch((error) => console.error('Error en obtener lista:', error));

    function displayCountriesChart(countries) {
        const ctx = document.getElementById('myChart').getContext('2d');

        // Extrae los datos necesarios para el gráfico, por ejemplo, nombres de países y poblaciones
        const countryNames = countries.map(country => country.name.common);
        const populations = countries.map(country => country.population);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: countryNames,
                datasets: [{
                    label: 'Población',
                    data: populations,
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
    }
});


