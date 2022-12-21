function solve(array) {
  let tourists = array.shift();
  tourists = Number(tourists);
  let wagonSpaces = array.shift().toString().split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < wagonSpaces.length; i++) {
      if(count===tourists){
          break
      }
    for (let j = tourists; j > 0; j--) {
        if(wagonSpaces[i]===4){
            break
        }
        if(count===tourists){
            break
        }
      wagonSpaces[i] += 1;
      count++;
      if (wagonSpaces[i] === 4) {
        break;
      }
    }
  }
  let leftTourists = tourists - count 
  let freeSpaces = wagonSpaces.filter(a=>a<4).map(Number)
  if(freeSpaces.length>0){
    freeSpaces = wagonSpaces.filter(a=>a<4).map(Number).reduce((a,b)=> a+b)
  }
  if(leftTourists>0){
      console.log(`There isn't enough space! ${leftTourists} people in a queue!`);
      console.log(wagonSpaces.join(' '));
  }else if (freeSpaces>0){
      console.log(`The lift has empty spots!`);
      console.log(wagonSpaces.join(' '));
  }else if (leftTourists===0&&freeSpaces.length===0){
      console.log(wagonSpaces.join(' '));
  }
}
// solve([ "20",
// "0 2 0"
// ]);
// solve(["15",
// "0 0 0 0 0"
// ])
solve(['1', '4 3'])
