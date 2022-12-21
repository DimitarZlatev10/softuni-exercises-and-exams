function solve(input){
    let n= Number(input[0])
    let output = ''
    
    for(let i = 1; i<=10; i++){
      output += `${i} * ${n} = ${i * n}\n`
    }

    console.log(output);
    }
    solve(['5'])