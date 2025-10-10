// Write the function that hit the API -> fetch 
// fun -> that take a location and return the weather data 
// -> location variable -> api url + location (using literal format)
// for that location
const text = document.querySelector('#location');
const button = document.querySelector('button');
const body = document.querySelector('body');


async function showWeather() {
    const container = document.createElement('div');
    container.classList.add('container');
    
    let location = text.value;

    let weatherApi = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4HZ9NFLDENKLDNGQJ35K9THY5`)
    let json = await weatherApi.json();
    let days = await json.days;
    
    console.log(days);
    
    for(let i = 0; i <= 6; i++) {
        const div = document.createElement('div');
        div.classList.add('card');
        const datetime = document.createElement('div');
        const conditions = document.createElement('div');
        const descriptions = document.createElement('div');
        const temp = document.createElement('div');
        const feelslike = document.createElement('div');

        body.appendChild(container);
        container.appendChild(div);
        div.appendChild(datetime);
        div.appendChild(conditions);
        div.appendChild(descriptions);
        div.appendChild(temp);
        div.appendChild(feelslike);

        datetime.textContent = days[i].datetime;
        conditions.textContent = days[i].conditions;
        descriptions.textContent = days[i].description;
        temp.textContent = `Current Temp: ${days[i].temp}`;
        feelslike.textContent = `Feels like: ${days[i].feelslike}`;
    }
} 


button.addEventListener('click', () => {
    showWeather();
    text.value = "";
})

