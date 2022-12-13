let button=document.querySelector("#kochi")
let kochitemp=document.querySelector("#kochitemp")
button.addEventListener("click",function(){
    fetchWeather(9.94,76.26, ' Kochi')
    })
function fetchWeather(latitude,longitude,place){
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(Response=>Response.json())
    .then(json=>{
        kochitemp.innerHTML=json.current_weather.temperature+place
    })
}