export default function createEmployeesObject(departmentName, employees) {
  const EmployeesObjec = {
    [`${departmentName}`] : employees,
  };
  return EmployeesObjec;
}
