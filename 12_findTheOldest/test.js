let arr = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

arr.forEach(item => !item["yearOfDeath"] ? item["yearOfDeath"] = new Date().getFullYear() : item["yearOfDeath"] = item["yearOfDeath"])
console.log(arr)

// console.log(arr)

// arr[0]["yearOfDeath"] = 1950;
// console.log(arr)

//console.log(obj)