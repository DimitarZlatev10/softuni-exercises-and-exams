function solve() {
 let recipientInput = document.getElementById("recipientName")
 let titleInput = document.getElementById("title")
 let messageInput = document.getElementById("message")
 let addButton = document.getElementById("add")
 let resetButton = document.getElementById("reset")
 let listOfMails = document.getElementById("list")
 let sendMails = document.querySelector('.sent-list')
 let deletedMails = document.querySelector('.delete-list')
 resetButton.addEventListener('click',(e)=>{
     e.preventDefault()
     recipientInput.value = ''
     titleInput.value = ''
     messageInput.value = ''
 })
 addButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(recipientInput.value===''||titleInput.value===''||messageInput.value===''){
        return
    }
    let recipientName = recipientInput.value
    let title = titleInput.value
     let li = document.createElement('li')
     let h4Title = document.createElement('h4')
     h4Title.textContent = `Title: ${titleInput.value}`
     let h4Recipient = document.createElement('h4')
     h4Recipient.textContent = `Recipient Name: ${recipientInput.value}`
     let span = document.createElement('span')
     span.textContent = messageInput.value
     let div = document.createElement('div')
     div.id = 'list-action'
     let sendButton = document.createElement('button')
     sendButton.textContent = `Send`
     sendButton.id = 'send'
     let deleteButton = document.createElement('button')
     deleteButton.textContent = `Delete`
     deleteButton.id = 'delete'
     div.appendChild(sendButton)
     div.appendChild(deleteButton)
     li.appendChild(h4Title)
     li.appendChild(h4Recipient)
     li.appendChild(span)
     li.appendChild(div)
     listOfMails.appendChild(li)
     recipientInput.value = ''
     titleInput.value = ''
     messageInput.value = ''
     deleteButton.addEventListener('click',(e)=>{
        listOfMails.removeChild(li)
        let li2 = document.createElement('li')
        let toSpan = document.createElement('span')
        toSpan.textContent = `To: ${recipientName} `
        let titleSpan = document.createElement('span')
        titleSpan.textContent = ` Title: ${title}`
        li2.appendChild(toSpan)
        li2.appendChild(titleSpan)
        deletedMails.appendChild(li2)

     })
     sendButton.addEventListener('click',(e)=>{
         listOfMails.removeChild(li)
         let li1 = document.createElement('li')
         let toSpan = document.createElement('span')
         toSpan.textContent = `To: ${recipientName} `
         let titleSpan = document.createElement('span')
         titleSpan.textContent = ` Title: ${title}`
         let div = document.createElement('div')
         div.className = 'btn'
         let deleteButton = document.createElement('button')
         deleteButton.className ='delete'
         deleteButton.textContent = `Delete`
         div.appendChild(deleteButton)
         li1.appendChild(toSpan)
         li1.appendChild(titleSpan)
         li1.appendChild(div)
         sendMails.appendChild(li1)
         deleteButton.addEventListener('click',(e)=>{ 
        li1.removeChild(div)
        deletedMails.appendChild(li1)
         })
     })

 })
}
solve()