const removeFromArray = function(array, ...number) {
    let newArray = [];
    let numbersToRemove = [];

    for (const arg of number){
        numbersToRemove.push(arg);
    }
    
    for (let i = 0; i < array.length; i++){
        if (!numbersToRemove.includes(array[i])){
            newArray.push(array[i])
        }
    }

    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
