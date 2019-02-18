function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){ return driver.revenue > revenue })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){ return driver.name })
}

function exactMatch(drivers, objSearch){
  let key = Object.keys(objSearch)[0]
  let value = Object.values(objSearch)[0]
  return drivers.filter(function(driver){ return driver.hasOwnProperty(key) && driver[key] === value})
}

function exactMatchToList(drivers, objSearch){
  return exactMatch(drivers, objSearch).map(function(driver){ return driver.name })
}
