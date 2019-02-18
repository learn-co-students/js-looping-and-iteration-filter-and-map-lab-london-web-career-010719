function driversWithRevenueOver(arr, num) {
    return arr.filter(function (driver) { return driver.revenue > num })
}

function driverNamesWithRevenueOver(arr, num) {
    return driversWithRevenueOver(arr, num).map(function (driver) { return driver.name })
}

function exactMatch(arr, obj) {
    return arr.filter(function (driver) {
        for (const key in obj) {
            truthy_driver = driver[key] === obj[key] 
        }
        return truthy_driver
    })
}

function exactMatchToList(arr, obj) {
    return exactMatch(arr, obj).map(function (driver) { return driver.name })
}