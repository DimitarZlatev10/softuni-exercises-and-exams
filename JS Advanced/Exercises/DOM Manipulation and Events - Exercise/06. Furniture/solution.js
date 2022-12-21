function solve() {
let textareas = document.querySelectorAll('textarea')
let buttons = document.querySelectorAll('button')
let body = document.querySelector('tbody')
buttons[0].addEventListener('click', (e)=>{
  let input = JSON.parse(textareas[0].value)

  for (let el of input) {
     let row = document.createElement('tr')
     let imageCell = document.createElement('td')
     let image = document.createElement('img')   
     image.setAttribute('src',el.img) 
     imageCell.appendChild(image)

     let cellName = document.createElement('td')
     let cellP = document.createElement('p')
     cellP.textContent = el.name 
     cellName.appendChild(cellP)

     let cellPrice = document.createElement('td')
     let cellPriceP = document.createElement('p')
     cellPriceP.textContent = el.price 
     cellPrice.appendChild(cellPriceP)

     let cellFactor = document.createElement('td')
     let cellFactorP = document.createElement('p')
     cellFactorP.textContent = el.decFactor
     cellFactor.appendChild(cellFactorP)

     let cellCheck = document.createElement('td')
     let input = document.createElement('input')
     input.setAttribute('type','checkbox')
     cellCheck.appendChild(input)
      
     row.appendChild(imageCell)
     row.appendChild(cellName)
     row.appendChild(cellPrice)
     row.appendChild(cellFactor)
     row.appendChild(cellCheck)

     body.appendChild(row)
  }
  
})
buttons[1].addEventListener('click', (e)=> {
    let furniture =  Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
    let purchasedFurniture = []
    let totalPrice = 0 
    let totalFactor = 0

    for (let line of furniture) {
     
     line = line.parentNode.parentNode.children
     purchasedFurniture.push(line[1].textContent)
     totalPrice+= Number(line[2].textContent)
     totalFactor +=Number(line[3].textContent)
    }
    textareas[1].textContent = `Bought furniture: ${purchasedFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalFactor/purchasedFurniture.length}`

    
})
  
}