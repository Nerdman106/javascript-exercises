const repeatString = function(wordToRepeat, repeats) {
    if (repeats >=0){
        let newWord = "";
            for(let i = 0; i < repeats; i++){
                newWord += wordToRepeat;
            }

            return newWord;
        } else{
            return('ERROR')
        }
};

// Do not edit below this line
module.exports = repeatString;
