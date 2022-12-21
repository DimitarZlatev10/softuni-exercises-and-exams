function solve() {
  let firstNameInput = document.getElementById("fname");
  let lastNameInput = document.getElementById("lname");
  let emailInput = document.getElementById("email");
  let birthInput = document.getElementById("birth");
  let positionInput = document.getElementById("position");
  let salaryInput = document.getElementById("salary");
  let hireButton = document.getElementById("add-worker");

  let outputTable = document.getElementById("tbody");

  let totalBudget = document.getElementById("sum");
  let budgetSum = 0;

  hireButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      firstNameInput.value === "" ||
      lastNameInput.value === "" ||
      emailInput.value === "" ||
      birthInput.value === "" ||
      positionInput.value === "" ||
      salaryInput.value === ""
    ) {
      return;
    }

    let tr = document.createElement("tr");
    let fNameTd = document.createElement("td");
    fNameTd.textContent = firstNameInput.value;
    let lNameTd = document.createElement("td");
    lNameTd.textContent = lastNameInput.value;
    let emailTd = document.createElement("td");
    emailTd.textContent = emailInput.value;
    let birthTd = document.createElement("td");
    birthTd.textContent = birthInput.value;
    let positionTd = document.createElement("td");
    positionTd.textContent = positionInput.value;
    let salaryTd = document.createElement("td");
    salaryTd.textContent = salaryInput.value;
    let actionTd = document.createElement("td");
    let firedButton = document.createElement("button");
    firedButton.textContent = `Fired`;
    firedButton.className = `fired`;
    let editButton = document.createElement("button");
    editButton.textContent = `Edit`;
    editButton.className = `edit`;
    actionTd.appendChild(firedButton);
    actionTd.appendChild(editButton);

    tr.appendChild(fNameTd);
    tr.appendChild(lNameTd);
    tr.appendChild(emailTd);
    tr.appendChild(birthTd);
    tr.appendChild(positionTd);
    tr.appendChild(salaryTd);
    tr.appendChild(actionTd);
    outputTable.appendChild(tr);

      let fname = firstNameInput.value;
       let lname =lastNameInput.value;
       let email= emailInput.value;
      let  birth = birthInput.value;
      let  position =positionInput.value;
       let salary = salaryInput.value;
    
    let currSum = salaryInput.value
    budgetSum += Number(currSum);
    totalBudget.textContent = budgetSum.toFixed(2);
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    birthInput.value = "";
    positionInput.value = "";
    salaryInput.value = "";
    
    console.log(document.querySelectorAll("#tbody > tr > td")[2].textContent);
    firedButton.addEventListener('click',(e)=>{
        budgetSum -=Number(currSum)
        totalBudget.textContent = budgetSum.toFixed(2)
        e.target.parentNode.parentNode.remove();
    })

    editButton.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    //   let info = document.querySelectorAll("#tbody > tr > td");
    //   firstNameInput.value = info[0].textContent;
    //   lastNameInput.value = info[1].textContent;
    //   emailInput.value = info[2].textContent;
    //   birthInput.value = info[3].textContent;
    //   positionInput.value = info[4].textContent;
    //   salaryInput.value = info[5].textContent;
    //   budgetSum -= Number(info[5].textContent);
       firstNameInput.value = fname;
      lastNameInput.value = lname;
      emailInput.value = email;
      birthInput.value = birth;
      positionInput.value = position;
      salaryInput.value =salary;
      budgetSum -= Number(salary);
      totalBudget.textContent = budgetSum.toFixed(2);
      
      
    });
  });
}
solve();
