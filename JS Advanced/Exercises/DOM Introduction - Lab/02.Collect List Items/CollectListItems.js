function extractText() {
    let itemList = document.querySelectorAll('#items li')
    let result = ''
    for (let line of itemList) {
        result+= line.textContent.trim() + '\n'
    }
   let resultElements = document.getElementById('result')
   resultElements.textContent = result.trim()
}