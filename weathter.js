// Write the function that hit the API -> fetch 
// fun -> that take a location and return the weather data 
// -> location variable -> api url + location (using literal format)
// for that location

function weatherJson() {
    let location = prompt("Location?", '');

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4HZ9NFLDENKLDNGQJ35K9THY5`)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response.currentConditions);
        })
        .catch(function(err) {
            console.log(err);
        })
}

weatherJson();