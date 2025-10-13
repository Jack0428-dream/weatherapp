// Write the function that hit the API -> fetch 
// fun -> that take a location and return the weather data 
// -> location variable -> api url + location (using literal format)
// for that location
const text = document.querySelector('#location');
const button = document.querySelector('button');
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
const cityname = document.createElement('div');
cityname.classList.add('city');



const loader = document.createElement('div');
loader.classList.add('loader');
body.appendChild(loader);


async function showWeather() {
    cityname.textContent = "";
    container.textContent = "";
    body.appendChild(cityname);
    body.appendChild(container);
    let location = text.value;

    try {
        let weatherApi = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4HZ9NFLDENKLDNGQJ35K9THY5`)
        let json = await weatherApi.json();
        let address = await json.address;
        let days = await json.days;
        
        console.log(json);
        console.log(days);

        for(let i = 0; i <= 6; i++) {
            const div = document.createElement('div');
            div.classList.add('card');
            const datetime = document.createElement('div');
            const conditions = document.createElement('img');
            const descriptions = document.createElement('div');
            descriptions.classList.add('description');
            const temp = document.createElement('div');
            const feelslike = document.createElement('div');

            container.appendChild(div);
            div.appendChild(datetime);
            div.appendChild(conditions);
            div.appendChild(descriptions);
            div.appendChild(temp);
            div.appendChild(feelslike);

            cityname.textContent = `Location: ${address}`
            datetime.textContent = days[i].datetime;
            conditions.setAttribute('src', `/WeatherIcons/PNG/2nd Set - Color/${days[i].icon}.png`);
            conditions.classList.add('icon');
            descriptions.textContent = days[i].description;
            temp.textContent = `Current Temp(°C): ${FtoC(days[i].temp)}`;
            feelslike.textContent = `Feels like(°C): ${FtoC(days[i].feelslike)}`;
        }
    } catch(err) {
        throw new Error('Check the code again');
    } finally {
        loader.style.display = "none";
    }

    

} 


button.addEventListener('click', () => {
    showWeather();
    loader.style.display = "block";
    text.value = "";
})

function FtoC(temp) {
    let cel = (temp-32) * (5/9);
    return cel.toFixed(1);
}

