function attachEvents() {
    
    const submitBtn = document.getElementById("submit")
    submitBtn.addEventListener('click', displayForecastInfo )
}

attachEvents();

async function displayForecastInfo(){
    const inputName = document.getElementById("location").value
    let code  = await getLocations(inputName)
    let todayForecast = await getForecastForToday(code)
    let threeDaysForecast = await get3DayForecast(code)
    document.querySelector('.label').textContent = 'Current conditions'
    todayForecast = Object.values(todayForecast)
    document.getElementById("forecast").style.display = 'block'
    let currentConditions = document.getElementById("current")
    let divElement = document.createElement('div')
    divElement.className = 'forecasts'
    divElement.innerHTML = `<span class ='condition symbol'>&#x2600;</span>
    <span class=condition>
    <span class= 'forecast-data'>${todayForecast[1]}</span>
    <span class= 'forecast-data'>${todayForecast[0].low}&#176;/${todayForecast[0].high}&#176;</span>
    <span class='forecast-data'>${todayForecast[0].condition}</span>
    </span>`
    currentConditions.appendChild(divElement)
 

//     let upcomingConditions = document.getElementById("upcoming")
//     let divElement1 = document.createElement('div')
//     divElement1.className = `forecast-info`
//     upcomingConditions.appendChild(divElement1)

//    Object.values(threeDaysForecast).forEach(p=>{
//     let spanElement = document.createElement('span')
//     spanElement.className = 'upcoming'
//     spanElement.innerHTML = `<span class='symbol'></span>
//     <span class='forecast-data'>${p[0].low}/${p[0].high}</span>
//     <span class='forecast-data'>${p[0].condition}</span>`
//     divElement1.appendChild(spanElement)
//    })
   
}

async function getLocations(name){
    try {
        const url = `http://localhost:3030/jsonstore/forecaster/locations`
        
        const res = await fetch(url)
        if(res.status !=200){
            throw new Error('Error')
        }
        const data = await res.json()
    
        const location = data.find(l=> l.name == name)
        
        return location.code
        
    } catch (error) {
        document.getElementById("forecast").style.display = 'block'
        document.querySelector('.label').textContent = 'Error'
    }
}

async function getForecastForToday(code){
    const url = `http://localhost:3030/jsonstore/forecaster/today/` + code
    const res = await fetch(url)
    const data = await res.json()

    return data
}

async function get3DayForecast(code){
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/`+ code
    const res = await fetch(url)
    const data = res.json()

    return data
}