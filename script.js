
const apikey='f00c38e0279b7bc85480c3fe775d518c'
const searchBar=document.getElementById("in")
const searchButton=document.getElementById("button")
const weatherIcon=document.getElementById("srci")
const tempElement=document.getElementById("temp")
const cityElement=document.getElementById("city")
const humidityElement=document.getElementById("sm")
const windElement=document.getElementById("win")

searchButton.addEventListener('click',()=>{
    const city=searchBar.value
    if(!city){
        alert("please enter the city name")
        return
    }
    else{
        getWeather(city)
    }
})

function getWeather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new error("city not found")
        }
        else{
            return response.json()
        }
    })
    .then(data=>{
        cityElement.textContent=`${data.name}`
        tempElement.textContent=`${Math.round(data.main.temp)}°C`
        humidityElement.textContent=`${data.main.humidity}%`
        windElement.textContent=`${data.wind.speed}km/hr`
        weatherIcon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    })
    .catch(error=>{
       alert(error.message) 
    })
}