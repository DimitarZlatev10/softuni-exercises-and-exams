function solve(n,k) {
 let sequence = [1]
 for (let i = 1; i < n; i++) {
     let innerSequence = sequence.slice(-k)
     let sum = 0
     for (let j = 0; j < innerSequence.length; j++) {
         sum+=innerSequence[j]
         
     }
     sequence[i] = sum
 }
 console.log(sequence.join(' '));
}
solve(6,3)