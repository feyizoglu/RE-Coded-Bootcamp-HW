// Write your solution in this file!
const employee = {
  name: "Tolgahan",
  streetAddress: "here",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee.name = "Sam";
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.name = "Sam";
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const NewObj = { ...employee };
  delete NewObj[key];
  return NewObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
