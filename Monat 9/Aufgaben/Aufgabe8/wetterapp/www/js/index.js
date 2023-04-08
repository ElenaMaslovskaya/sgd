document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
    let apikey = "f33317e6e48bb8de8855b6b47efd6855";
    let wetterURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&exclude=minutely,hourly,daily,alerts&units=metric&lang=de&appid=' + apikey;

    $.getJSON(wetterURL, onWeatherSuccess);
}

function onError(fehler) {
    alert("Ihre Position konnte nicht ermittelt werden");
}

function onWeatherSuccess(results) {
    document.getElementById('temperatur').innerHTML = 'Temperatur: ' + results.current.temp;
    document.getElementById('wind').innerHTML = 'Windgeschwindigkeit: ' + results.current.wind_speed;
    document.getElementById('beschreibung').innerHTML = results.current.weather[0].description;
}

