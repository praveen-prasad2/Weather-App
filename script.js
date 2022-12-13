let button=document.querySelector("#kochi")
let kochitemp=document.querySelector("#kochitemp")
let calicut=document.querySelector("#calicut")
let clttemp=document.querySelector("#clttemp")
function fetchWeather(latitude,longitude){
    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(Response=>Response.json())
    .then(json=>json.current_weather.temperature)
}




button.addEventListener("click",async function(){
    let temp =await fetchWeather(9.94,76.26)
    kochitemp.innerHTML=temp
    })
calicut.addEventListener("click",async function(){
   let temp=await fetchWeather(11.14,75.96)
   clttemp.innerHTML=temp
    })