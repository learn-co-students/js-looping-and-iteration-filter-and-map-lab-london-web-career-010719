// Code your solution here:
function driversWithRevenueOver(drivers, rev){
const result = drivers.filter( x => x.revenue > rev)
return result
}

function driverNamesWithRevenueOver(drivers, rev) {
  const result = driversWithRevenueOver(drivers, rev).map(x => x.name)
  return result
}

function exactMatch(driver, arg) {
  const result = driver.filter( x => x.name == arg.name || x.revenue == arg.revenue)
  return result
}

function exactMatchToList(driver, arg){
  const result = exactMatch(driver, arg).map(x => x.name)
  return result
}
