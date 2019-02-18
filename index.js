// Code your solution here:

function driversWithRevenueOver(array, amount){

  let newArray = array.filter(driver => driver.revenue > amount, )

  return newArray
  
};

function driverNamesWithRevenueOver(array, amount){

  let newArray = array.filter(driver => driver.revenue > amount, )

  nameArray = newArray.map(driver => driver.name)

  return nameArray
  
};


function exactMatch(array, object){

  const key = Object.keys(object)[0];
  const value = Object.values(object)[0];

  const newArray = array.filter(driver => driver[key] === value );

  return newArray;

};


function exactMatchToList(array, object){

  const key = Object.keys(object)[0];
  const value = Object.values(object)[0];

  const newArray = array.filter(driver => driver[key] === value);
  const stringArray  = newArray.map(driver => driver.name);

  return stringArray;

};

