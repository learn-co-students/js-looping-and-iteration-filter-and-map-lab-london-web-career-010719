// Code your solution here:

//It returns an array of driver objects that have a revenue attribute that's greater than the passed-in 
//revenue argument.
function driversWithRevenueOver(drivers, income) {
    return drivers.filter(function (driver){
        return driver.revenue > income
    })
}

// it returns an array of strings representing the name of each driver 
// who has a revenue greater than the specified amount. 
function driverNamesWithRevenueOver(drivers, income) {
    let returnArray = []
    drivers.filter(function (driver) {
         if (driver.revenue > income)
            returnArray.push(driver.name)
         }
    )
    return returnArray
}


// For example, exactMatch(drivers, { revenue: 3000 }) will return all 
// drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) 
// will return all drivers whose name attribute equals Bob.
function exactMatch(drivers, object) {
    let returnArray = []
    let something = Object.keys(object)
    if (something == "name")
        drivers.filter(function (driver) {
        if (driver.name === object.name)
            returnArray.push(driver)
        })
    else if (something == "revenue") 
        drivers.filter(function (driver) {
            if (driver.revenue === object.revenue)
              returnArray.push(driver)
            })
        console.log(returnArray)
        return returnArray
        
}   

//For example, exactMatchToList(drivers, { revenue: 2000 }) will return 
//['Sammy'], as Sammy is the name of the matching driver object.
function exactMatchToList(drivers, object) {
    let returnArray = []
    let something = Object.keys(object)
    if (something == "name")
        drivers.filter(function (driver) {
        if (driver.name === object.name)
            returnArray.push(driver.name)
        })
    else if (something == "revenue") 
        drivers.filter(function (driver) {
            if (driver.revenue === object.revenue)
              returnArray.push(driver.name)
            })
    console.log(returnArray)
    return returnArray


}