function refreshWeather(response){
    let temperatureElement= document.querySelector("#temperature");
    let temperature= response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
}


function searchCity(city){
    
}