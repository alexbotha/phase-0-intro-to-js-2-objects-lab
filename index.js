// Write your solution in this file!
const employee = {
  name: 'sam',
  streetAddress: '11 Broadway'
  }
  
  function updateEmployeeWithKeyAndValue(obj, key, value) {
    return{...obj,[key]: value,};
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj
  }
  
  function deleteFromEmployeeByKey(key, obj){
    console.log(newEmployee)
    const newEmployee = {...obj}
    newEmployee[key] = obj
    return newEmployee
  }
  
  function destructivelyDeleteFromEmployeeByKey(obj, key){
    obj[`${key}`] = undefined;
    return obj
  }