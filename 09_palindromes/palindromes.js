const palindromes = (string) => {
    let stringArray = string.split("").filter(item => (item != " " && item != ","&& item != "."&& item != "!"))
    let reversedIndex = stringArray.length -1
    for(let i = 0; i < stringArray.length/2; i++){
        if(stringArray[i].toLowerCase() != stringArray[reversedIndex].toLowerCase()){
            return false;
        } else {
            reversedIndex--;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
