let employee = {
    name: "Tamia Nova",
    streetAddress: "412 DownSreet"
};

function updateEmployeeWithKeyAndValue( employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

function destuctivelyUpdateEmployeeWithAndValue(employee, key, value) [
    employee[key] = value;
    return employee;
]
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}