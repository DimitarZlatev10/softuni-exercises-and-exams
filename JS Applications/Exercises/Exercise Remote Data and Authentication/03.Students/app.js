const tbody = document.querySelector('tbody')
document.getElementById('submit').addEventListener('click', onCreateStudent)
loadStudents()

async function onCreateStudent(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("form"));
  
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const facultyNumber = formData.get("facultyNumber");
    const grade = formData.get("grade");


  
    const result = await createStudent({ firstName, lastName, facultyNumber , grade });
  
    document.getElementById('form').reset();
    loadStudents();
  }


async function createStudent(student){
    const result = await request(
        "http://localhost:3030/jsonstore/collections/students",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        }
      );
    
      return result;
}

async function loadStudents(){
    const students = await request(
        "http://localhost:3030/jsonstore/collections/students"
      );
    
      const result = Object.entries(students).map(([id, student]) => createRow(id, student));
      tbody.replaceChildren(...result);
}

function createRow(id,student) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.facultyNumber}</td>
    <td>${student.grade}</td>`
  
    tbody.appendChild(row)
    return row;
  }

  async function request(url, options) {
    const response = await fetch(url, options);
  
    if (response.ok != true) {
      const error = await response.json();
      alert(error.message);
      throw new Error(error.message);
    }
  
    const data = response.json();
  
    return data;
  }