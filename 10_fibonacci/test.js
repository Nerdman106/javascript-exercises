let string = 'r3ace3car'

let stringArray = string.split("").filter(item => item != " ")
let reversedIndex = stringArray.length -1
for(let i = 0; i < stringArray.length/2; i++){
    if(stringArray[i].toLowerCase() != stringArray[reversedIndex].toLowerCase()){
        console.log(false)
    } else {
        reversedIndex--;
    }
}

