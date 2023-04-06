let data = [
	{ name: "Name", age: 0, email: "#" },
	
];


let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let firstNameInput = document.getElementById("firstNameInput");
  let lastNameInput = document.getElementById("lastNameInput");
  let ageInput = document.getElementById("ageInput");
  let emailInput = document.getElementById("emailInput");

  let newData = {
    firstName: firstNameInput.value,
	lastName: lastNameInput.value,
    age: ageInput.value,
    email: emailInput.value
  };

  data.push(newData);

  let table = document.getElementById("myTable");
  let newRow = document.createElement("tr");


 //number counter
  let counterCall = document.createElement('td');
  counterCall.innerHTML = newData.counterCall;
  newRow.appendChild(counterCall);


  let firstNameCell = document.createElement("td");
  firstNameCell.innerText = newData.firstName;
  newRow.appendChild(firstNameCell);

  let lastNameCell = document.createElement("td");
  lastNameCell.innerText = newData.lastName;
  newRow.appendChild(lastNameCell);

  let ageCell = document.createElement("td");
  ageCell.innerText = newData.age;
  newRow.appendChild(ageCell);

  let emailCell = document.createElement('td');
  emailCell.innerText = newData.email;
  newRow.appendChild(emailCell);

  table.appendChild(newRow);

  let list =document.getElementById('list')
});






 


































