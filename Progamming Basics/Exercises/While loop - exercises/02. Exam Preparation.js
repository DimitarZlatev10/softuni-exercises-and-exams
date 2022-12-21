function solve(input){
       let badGrades = Number(input[0])
       let badGrade= 0
       let comand = 1
       let currentProblem = input[comand]
       let comand1 = 2
       let currentGrade = Number(input[comand1])
       let averageScore = 0
       let numberOfProblems = 0

     while(currentProblem!=='Enough'){
       
       if(currentGrade<=4){
           badGrade++
           averageScore +=currentGrade
           numberOfProblems++
           if(badGrade==badGrades){
               console.log(`You need a break, ${badGrade} poor grades.`);
               break;
           }
       }else{
           averageScore +=currentGrade
           numberOfProblems++
       }
       comand+=2
       comand1+=2
       currentProblem = input[comand]
       currentGrade = Number(input[comand1])
       if(currentProblem=='Enough'){
           console.log(`Average score: ${(averageScore/numberOfProblems).toFixed(2)}`);
           console.log(`Number of problems: ${numberOfProblems}`);
           console.log(`Last problem: ${input[comand-2]}`);
       }
     }

}
solve (["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
solve (["2", "Income", "3", "Game Info", "6", "Best Player", "4"])