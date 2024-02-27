document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://restcountries.com/v3.1/all';

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => displayCountries(data))
        .catch((error) => console.error('Error en obtener lista:', error));

    function displayCountries(countries) {
        const countriesListElement = document.getElementById('countries-list');
        const searchInput = document.getElementById('search-input');

        const ul = document.createElement('ul');

        countries.forEach((country) => {
            const li = document.createElement('li');
            li.textContent = country.name.common;
            ul.appendChild(li);
        });

        countriesListElement.appendChild(ul);

        // Agregar un evento de escucha al campo de búsqueda
        searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredCountries = countries.filter(country =>
                country.name.common.toLowerCase().includes(searchTerm)
            );

            // Limpiar la lista actual antes de mostrar la lista filtrada
            ul.innerHTML = '';

            // Mostrar la lista filtrada
            filteredCountries.forEach((country) => {
                const li = document.createElement('li');
                li.textContent = country.name.common;
                ul.appendChild(li);
            });
        });
    }
});

