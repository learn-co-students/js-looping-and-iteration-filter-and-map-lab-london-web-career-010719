// Code your solution her

function driversWithRevenueOver(array, revenue) {

      return array.filter(function(driver) {

          return driver['revenue'] > revenue;

      });

}

function driverNamesWithRevenueOver(array, revenue) {


return driversWithRevenueOver(array, revenue).map(function(driver) {

      return  driver.name;


  });



}

function exactMatch (array, match) {
  return array.filter(function (driver) {
    let matches = false;

    for (const key in match) {
      matches = driver[key] === match[key];
    }

    return matches;
  });
}


function exactMatchToList(array, match) {

  return exactMatch(array, match).map(function(driver) {

      return driver.name;
  });



}
