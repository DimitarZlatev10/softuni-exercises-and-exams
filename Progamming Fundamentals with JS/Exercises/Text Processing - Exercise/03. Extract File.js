function solve(input){
let lastIndex = input.lastIndexOf('\\')
let fileLocation = input.substring(lastIndex+1).split('.')
let extension = fileLocation.pop()
let template = fileLocation.join('.')
console.log(`File name: ${template}`);
console.log(`File extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')