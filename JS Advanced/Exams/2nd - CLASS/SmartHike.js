class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (peak in this.goals) {
      return `${peak} has already been added to your goals`;
    }
    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }
  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }
    let difference = this.resources - time * 10;
    if (difference < 0) {
      return "You don't have enough resources to complete the hike";
    }
    this.resources -= time * 10;
    this.listOfHikes.push({
      peak: peak,
      time: time,
      difficultyLevel: difficultyLevel,
    });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }
  rest (time){
    let totalRest = time*10
    if(totalRest+this.resources>=100){
        this.resources = 100
        return `Your resources are fully recharged. Time for hiking!`
    }
    this.resources+=totalRest
    return `You have rested for ${time} hours and gained ${totalRest}% resources`
  }
  showRecord (criteria){
    let result = []
    if(this.listOfHikes.length===0){
        return `${this.username} has not done any hiking yet`
    }
    if(criteria==='hard'){
       let checkForHikes = this.listOfHikes.find(s=> s.difficultyLevel===criteria)
       if(!checkForHikes){
        return `${this.username} has not done any ${criteria} hiking yet`
       }
       this.listOfHikes.sort((a,b)=>b.time - a.time)
       checkForHikes = this.listOfHikes.find(s=> s.difficultyLevel===criteria)

       return `${this.username}'s best ${criteria} hike is ${checkForHikes.peak} peak, for ${checkForHikes.time} hours`
        
    }
    if(criteria==='easy'){
        let checkForHikes = this.listOfHikes.find(s=> s.difficultyLevel===criteria)
        if(!checkForHikes){
           return `${this.username} has not done any ${criteria} hiking yet`
        }
        this.listOfHikes.sort((a,b)=>b.time - a.time)
       checkForHikes = this.listOfHikes.find(s=> s.difficultyLevel===criteria)
       return `${this.username}'s best ${criteria} hike is ${checkForHikes.peak} peak, for ${checkForHikes.time} hours`
    }
    if(criteria==='all'){
        result.push("All hiking records:")
        this.listOfHikes.forEach(info=>{
            result.push(`${this.username} hiked ${info.peak} for ${info.time} hours`)
        })
    }
    return result.join('\n')
  }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
