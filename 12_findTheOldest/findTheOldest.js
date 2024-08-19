const findTheOldest = (arr) => {
    arr.forEach(item => !item["yearOfDeath"] ? item["yearOfDeath"] = new Date().getFullYear() : item["yearOfDeath"] = item["yearOfDeath"])
    let newArr = arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1)
    return newArr[0]
};


//const sortAge = inventors.sort((a, b) => (a.passed-a.year) > (b.passed-b.year) ? 1 : -1)
// Do not edit below this line
module.exports = findTheOldest;
