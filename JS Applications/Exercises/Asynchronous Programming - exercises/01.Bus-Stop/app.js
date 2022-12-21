async function getInfo() {
   
  const stopId = document.getElementById('stopId').value
  let stopName = document.getElementById("stopName")
  let busStops = document.getElementById("buses")

  let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

   try {
    busStops.replaceChildren()
    const res = await fetch(url)
    if(res.status !=200){
        throw new Error('Stop ID not found')
    }
    const data = await res.json()
    
    console.log(Object.entries(data.buses));
    stopName.textContent = data.name
    for (let bus of Object.entries(data.buses)) {
        let liElement = document.createElement('li')
        liElement.innerHTML = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
        busStops.appendChild(liElement)   
    }
   } catch (error) {
       stopName.textContent = 'Error'

   }
}