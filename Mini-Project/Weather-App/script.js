let searchBox = document.querySelector("#searchBox")
let searchBtn = document.querySelector("#searchBtn")

searchBtn.addEventListener("click", searchLocation)
searchBox.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        searchLocation()
    }
})

async function searchLocation() {
    let city = searchBox.value.trim()
    if(city === ""){
        return
    }

    let geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`

    try{
        let res = await fetch(geoUrl)
        if(!res.ok){
            throw new Error(`HTTP error, status: ${res.status}`)
        }
        let data = await res.json()

        if(!data.results){
            document.querySelector("#cityName").innerText = "City not found"
            return
        }

        const place = data.results[0]
        getData(place.latitude, place.longitude, place.name, place.country_code)
    }
    catch(e){
        console.log(e)
    }
}

getData(19.07, 72.88, "Mumbai", "IN")


async function getData(latitude,longitude,name,countryCode){

    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max,weather_code,temperature_2m_min,temperature_2m_max&current=temperature_2m,apparent_temperature,wind_speed_10m,weather_code,relative_humidity_2m&timezone=auto`

    try{
        let res = await fetch(url)
        if(!res.ok){
            throw new Error(`HTTP error, status: ${res.status}`)
        }
        let data = await res.json()
        currWeather(data,name,countryCode)
        currStats(data)
        fiveDaysForecast(data)
    }
    catch(e){
        console.log(`error , ${e}`)
    }
}

function currWeather(data,name,countryCode){
    let cityName = document.querySelector("#cityName")
    let date = document.querySelector("#date")
    let temp = document.querySelector("#temp")
    let condition = document.querySelector("#condition")
    let icon = document.querySelector("#icon")

    let weatherCode = data.current.weather_code
    let weather = weatherMap[weatherCode] || { text: "Unknown", icon: "🌡️" }
    let highTemp = data.daily.temperature_2m_max[0]
    let lowTemp = data.daily.temperature_2m_min[0]

    cityName.innerText = `${name}, ${countryCode}`
    temp.innerText = `${Math.round(data.current.temperature_2m)}°`
    icon.innerText = weather.icon
    condition.innerText = `${weather.text}. H ${Math.round(highTemp)}°. L ${Math.round(lowTemp)}°`

    let today = new Date(data.current.time)
    date.innerText = today.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long"
    })
}

function currStats(data){
    let fl = document.querySelector("#feelsLike")
    let hd = document.querySelector("#humidity")
    let wd = document.querySelector("#wind")
    let uv = document.querySelector("#uvIndex")

    fl.innerText = `${data.current.apparent_temperature}°`
    hd.innerText = `${data.current.relative_humidity_2m}%`
    wd.innerText = `${data.current.wind_speed_10m} km/h`
    uv.innerText = `${Math.round(data.daily.uv_index_max[0])}`
}

function fiveDaysForecast(data){
    let cards = document.querySelectorAll(".forecast .card")
    
    for(let i = 0 ; i <= 4 ; i++){
        let day = cards[i].querySelector(".day")
        let icon = cards[i].querySelector(".icon")
        let temp = cards[i].querySelector(".temp")

        let weatherCode = data.daily.weather_code[i]
        let weather = weatherMap[weatherCode] || { text: "Unknown", icon: "🌡️" }


        icon.innerText = weather.icon
        temp.innerText = `${Math.round(data.daily.temperature_2m_max[i])}°`
        let today = new Date(data.daily.time[i])
        day.innerText = today.toLocaleDateString("en-GB", {
            weekday: "short",
        })
    } 
}


