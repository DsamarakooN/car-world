export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'b317b29462msh70baf5b4266caabp1139cdjsn877a48f0a0bc',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {
        headers: headers,
    });

    const result = await response.json();

    return result;
}