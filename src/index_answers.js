function stringToNumbersArray(str){
    let strs = str.split(',');
    let numbers = [];
    for(let i = 0; i < strs.length; i++){
        let number = Number.parseInt(strs[i]);
        if(!Number.isNaN(number)){
            numbers.push(number);
        }
    }
        
    return numbers;
}

function countWordsInText(word, text){
    text = removePunctiationMarks(text);
    let words = text.split(' ');
    let counter = 0;
    for(let w of words){
        if(word.toLowerCase() === w.toLowerCase()){
            counter++;
        }
    }

    return counter;
}

function countLetterInText(letter, text){
    let counter = 0;
    for(let l of text){
        if(l.toLowerCase() === letter.toLowerCase()){
            counter++;
        }
    }

    return counter;
}

function removeWordFromText(word, text){
    let words = text.split(' ');
    let res = "";
    for(let i = 0; i < words.length; i++){
        let w = words[i];
        if(removePunctiationMarks(w).toLowerCase() !== word.toLowerCase()){
            res += w + " ";
        }
    }
    if(res[res.length - 1] == " "){
        return res.substring(0, res.length - 1);
    }
    return res;
}

function removePunctiationMarks(text){
    const punctuationMarks = ",.!?";
    for(let punctuationMark of punctuationMarks){
        text = text.replace(punctuationMark, "");
    }

    return text;
}

export {stringToNumbersArray, countWordsInText, countLetterInText, removeWordFromText};