// Code your solution here:
function driversWithRevenueOver(drivers,revenueBar) {
  return drivers.filter(
    function(driver){
      return driver.revenue >= revenueBar;
    }
  );
}

function driverNamesWithRevenueOver(drivers,revenueBar){
  return driversWithRevenueOver(drivers,revenueBar).map(
    function(driver){return driver.name;}
  );
}

function exactMatch(drivers, objectline) {
  return drivers.filter(
    function(driver){
      for (const key in objectline){
        return driver[key] === objectline[key];
      }
    }
  );
}

function exactMatchToList(drivers, objectline){
  return exactMatch(drivers,objectline).map(
    function(driver){return driver.name;}
  );
}
