// Write your solution in this file!
const employee = {
    name : "Bob",
    streetAddress : "123 Some Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]:value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeCopy = {...employee}; 
    delete employeeCopy[key];

    return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}