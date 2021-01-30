console.log('in js');
$(document).ready(onReady);
function onReady() {
  console.log('im ready');
}
let employeeData = [];
// When submit button is pressed, it will take the input.
//Store input into an array
$(document).on('click', '#addItemButton', onAddItem);

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
}
