function lockedProfile() {
    document.getElementById('main').addEventListener('click', (e) =>{
        if(e.target.tagName==='BUTTON'){
            let profile = e.target.parentNode
            let isLocked = profile.querySelector('input[type=radio]:checked').value ==='lock'

            if(isLocked){
                return
            }
            let div = profile.querySelector('div')
            let isVisible = div.style.display ==='block'
             
             if(isVisible===false){
                 isVisible = true
                 div.style.display = 'block'
                 e.target.textContent = 'Hide it'
             }else {
                 isVisible = false 
                 div.style.display = 'none'
                 e.target.textContent = 'Show more'
             }
        }
    })
}