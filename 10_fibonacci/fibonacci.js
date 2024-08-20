const fibonacci = (loops) => {
    if (loops < 0){
        return "OOPS";
    }else if(loops == 0){
        return 0;
    }

    let arr = [1,1]
    while(arr.length < loops){
        arr.push(arr.at(-1) + arr.at(-2))
    }
    return arr.at(-1)
};

//console.log(fibonacci("4"))

// Do not edit below this line
module.exports = fibonacci;
