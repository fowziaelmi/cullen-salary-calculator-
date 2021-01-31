console.log('in js');
$(document).ready(onReady);
function onReady() {
  console.log('im ready');
}
let employeeData = [];
// When submit button is pressed, it will take the input.
//Store input into an array
$(document).on('click', '#addItemButton', onAddItem);
$(document).on('click', '#deleteBtn', onDeleteItem);

// Create a function that deletes the employee information when delete button is clicked
function onDeleteItem() {
  console.log('in delete item');
}

function onAddItem() {
  console.log('in add item');
  event.preventDefault();

  //Grab input data from the Dome

  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let employeeId = $('#idInput').val();
  let role = $('#roleInput').val();
  let monthlySalary = $('#monthlySalaryInput').val();

  // create an item object
  let item = {
    firstName: firstName,
    lastName: lastName,
    employeeId: Number(employeeId),
    role: role,
    monthlySalary: Number(monthlySalary),
  };

  console.log('got and item', item);

  //push each item into an array

  employeeData.push(item);
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idInput').val('');
  $('#roleInput').val('');
  $('#monthlySalaryInput').val('');
  displayInDom();
}

function displayInDom() {
  console.log('in display');

  let el = $('#employeeDataTable');
  el.empty();

  for (let info of employeeData) {
    el.append(`<tr> 
    <td>${info.firstName} </td>
    <td>${info.lastName} </td>
    <td>${info.employeeId} </td>
    <td>${info.role} </td>
    <td> ${info.monthlySalary}</td>
    <td> <button id="deleteBtn"> Delete </button> </td>
    
    
    </tr>`);
  }
}
