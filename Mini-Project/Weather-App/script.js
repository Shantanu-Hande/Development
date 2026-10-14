let url = "https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.88&daily=uv_index_max,weather_code,temperature_2m_min,temperature_2m_max&current=temperature_2m,apparent_temperature,wind_speed_10m,weather_code,relative_humidity_2m&timezone=auto"
async function getData(){
    try{
        let res = await fetch(url)
        if(!res.ok){
            throw new Error(`HTTP error, status: ${res.status}`)
        }
        let data = await res.json()
        console.log(data.daily)
        console.log(data.current)
        currWeather(data)
        change
    }
    catch(e){
        console.log(`error , ${e}`)
    }
}
getData();

// let btn = document.querySelector("#searchBtn");
// btn.addEventListener('click',currWeather)

function currWeather(data){
    let h3 = document.querySelector("#cityName")
    let pd = document.querySelector("#date")
    let pt = document.querySelector("#temp")
    let pc = document.querySelector("#condition")

    pt.innerText = `${data.current.temperature_2m}°` 

}