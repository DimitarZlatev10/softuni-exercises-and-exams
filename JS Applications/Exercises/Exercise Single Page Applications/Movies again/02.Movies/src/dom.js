const main = document.querySelector('main')

export function showView(sectionId){
main.replaceChildren(sectionId)
}