function encodeAndDecodeMessages() {
   let textAreaOne = document.querySelectorAll('textarea')[0]
   let textAreaOneButton = document.querySelectorAll('button')[0].addEventListener('click',(e)=>{   

      let message = textAreaOne.value 
      let result = ''
      message = message.split('')
     
      for (let char of message) {
          char = String.fromCharCode(char.charCodeAt(0)+1)
          result +=char 
      }
      
      textAreaTwo.textContent = result
      textAreaOne.value = ''

   })
   let textAreaTwo = document.querySelectorAll('textarea')[1]
   let textAreaTwoButton = document.querySelectorAll('button')[1].addEventListener('click', (e)=>{
       let message = textAreaTwo.value
       let result = ''
       message = message.split('')

       for (let char of message) {
           char = String.fromCharCode(char.charCodeAt(0)-1)
           result +=char
           
       }
       textAreaTwo.textContent = result
       
   })
}