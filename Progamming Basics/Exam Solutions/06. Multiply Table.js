function solve(input) {
    let stotici = input % 10;
    let left1 = (input - stotici)/ 10;
    let desetici = left1 % 10;
    let edenici = (left1 - desetici) / 10;
    
 
    for (let i = 1; i <= stotici; i++) {
        for (let j = 1; j <= desetici; j++) {
            for (let k = 1; k <= edenici; k++) {
                let result = i * j * k;
               console.log(`${i} * ${j} * ${k} = ${result};`);  
                
            }
            
        }
        
    }
    
}
solve(["324"]);
