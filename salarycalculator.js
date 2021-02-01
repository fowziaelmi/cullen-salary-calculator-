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

  for (i in employeeData) {
    if (employeeData[i].employeeId === Number(this.value)) {
      employeeData.splice(i, 1);
      $(this).closest(`tr`).empty();
    }
  }
}

function onAddItem() {
  console.log('in add item');
  event.preventDefault();

  //Grab input data from the Dome

  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let employeeId = Number($('#idInput').val());
  let role = $('#roleInput').val();
  let monthlySalary = Number($('#monthlySalaryInput').val());

  // create an item object
  let item = {
    firstName: firstName,
    lastName: lastName,
    employeeId: employeeId,
    role: role,
    monthlySalary: monthlySalary,
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
  sumMonthlyCost(employeeData);
}

//Calculate total monthly salary of all employees
let totalSalary = 0;
function sumMonthlyCost(anArray) {
  console.log('in monthly cost');
  let total = 0;
  for (let i = 0; i < anArray.length; i++) {
    total = total += anArray[i].monthlySalary / 12;
  }
  console.log(total);
  let up = $('#totalCost');
  up.empty(total);
  up.append(total);
  // Turn background of the total monthly cost to red when exceeds 20000
  if (total > 20000) {
    $('#exceeds').css('background-color', 'red');
  } else {
    console.log('we are good');
  }
}
// Display all the inputs on the DOM
function displayInDom() {
  console.log('in display');

  let el = $('#employeeDataTable');
  el.empty();

  for (info of employeeData) {
    el.append(`<tr> 
    <td>${info.firstName} </td>
    <td>${info.lastName} </td>
    <td>${info.employeeId} </td>
    <td>${info.role} </td>
    <td> ${info.monthlySalary}</td>
    <td> <button id="deleteBtn" value="${info.employeeId}"> Delete </button> </td>
    
    
    </tr>`);
  }
}
