function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const input = document.querySelector("#inputs>textarea").value;
    const bestRestrauntP = document.querySelector("#bestRestaurant>p");
    const workersP = document.querySelector("#workers>p");
    let arr = JSON.parse(input);
    let restraunts = {};
    for (let line of arr) {
      line = line.split(" - ");
      let name = line[0];
      let workersArr = line[1].split(", ");
      let workers = [];
      for (let worker of workersArr) {
        let workerTokens = worker.split(" ");
        let salary = Number(workerTokens[1]);
        workers.push({
          name: workerTokens[0],
          salary,
        });
      }
      if (restraunts[name]) {
        workers = workers.concat(restraunts[name].workers);
      }
      workers.sort((a, b) => b.salary - a.salary);
      let bestSalary = Number(workers[0].salary.toFixed(2));
      let averageSalary = Number(
        (
          workers.reduce((sum, worker) => sum + worker.salary, 0) /
          workers.length
        ).toFixed(2)
      );
      restraunts[name] = {
        workers,
        bestSalary,
        averageSalary,
      };
    }
    let bestRestrauntSalary = 0;
    let bestRestraunt = undefined;
    for (const name in restraunts) {
      if (restraunts[name].averageSalary > bestRestrauntSalary) {
        bestRestraunt = {
          name,
          workers: restraunts[name].workers,
          bestSalary: restraunts[name].bestSalary,
          averageSalary: restraunts[name].averageSalary,
        };
        bestRestrauntSalary = restraunts[name].averageSalary;
      }
    }
    bestRestrauntP.textContent = `Name: ${
      bestRestraunt.name
    } Average Salary: ${bestRestraunt.averageSalary.toFixed(
      2
    )} Best Salary: ${bestRestraunt.bestSalary.toFixed(2)}`;
    let workersResult = [];
    bestRestraunt.workers.forEach((worker) => {
      workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary} `);
    });
    workersP.textContent = workersResult.join("");
  }
}
