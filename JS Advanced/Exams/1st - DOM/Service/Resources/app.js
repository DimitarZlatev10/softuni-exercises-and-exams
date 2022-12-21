window.addEventListener('load', solve);

function solve() {
     let productType = document.getElementById("type-product")
     let problemDescription = document.getElementById("description")
     let clientName = document.getElementById("client-name")
     let clientPhoneNumber = document.getElementById("client-phone")
     let sendFormButton = document.querySelector("#right > form > button ")

let clearOrderedButton = document.querySelector('#completed-orders > button')
clearOrderedButton.addEventListener('click',(e)=>{
    let containers = document.querySelectorAll('#completed-orders > div')
    for (let container of containers) {
     container.remove()
    }
    
})
     sendFormButton.addEventListener('click',(e)=>{
         e.preventDefault()
         clientInfo(productType.value,problemDescription.value,clientName.value,clientPhoneNumber.value)
        clearInputFields()
        
     })
     

     function clientInfo(productType,problemDescription,clientName,clientPhoneNumber){
         if(problemDescription===''||clientName===''||clientPhoneNumber===''){
             return
         }
        let div = document.createElement('div')
        div.className = 'container'
        let h2 = document.createElement('h2')
        h2.textContent = `Product type for repair: ${productType}`
        let h3 = document.createElement('h3')
        h3.textContent = `Client information: ${clientName}, ${clientPhoneNumber}`
        let h4 = document.createElement('h4')
        h4.textContent = `Description of the problem: ${problemDescription}`
        let startRepairButton = document.createElement('button')
        startRepairButton.className = `start-btn`
        startRepairButton.textContent = `Start repair`
        let finishRepairButton = document.createElement('button')
        finishRepairButton.className = `finish-btn`
        finishRepairButton.textContent = `Finish repair`
        finishRepairButton.disabled = true


        startRepairButton.addEventListener('click',(e)=>{
            startRepairButton.disabled = true
            finishRepairButton.disabled = false
        })

        finishRepairButton.addEventListener('click',(e)=>{
            let completedOrders = document.getElementById("completed-orders")
            completedOrders.appendChild(div)
            div.removeChild(startRepairButton)
            div.removeChild(finishRepairButton)
        })

        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(startRepairButton)
        div.appendChild(finishRepairButton)
        let receivedOrder = document.getElementById("received-orders")
        receivedOrder.appendChild(div)

     }

     function clearInputFields() {
         problemDescription.value = ''
         clientName.value = ''
         clientPhoneNumber.value = ''
     }

     
}