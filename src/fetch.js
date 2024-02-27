export async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            
            const errorMessage = `Error al obtener datos. Código de estado: ${response.status}, ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error al procesar la solicitud: ${error.message}`);
    }
}
