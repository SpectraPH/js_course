function arrayToString(array){
    let res = "";
    for(let i = 0; i < array.length; i++){
        let el = array[i];
        res += `${el} - ${i}\n`;
    }

    return res;
}

function max(array){
    if(array.length === 0){
        return null;
    }
    let max = 0;
    for (let el of array) {
        if(el > max){
            max = el;
        }
    }

    return max;
}

function indexOfMax(array){
    if(array.length === 0){
        return null;
    }

    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if(max <= array[i]){
            max = i;
        }
    }

    return max;
}

function sliceArray(array, n){
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(array[i]);
    }

    return res;
}

function sort(array){
    return array.sort().reverse();
}

function sumArrays(array1, array2){
    let res = []
    for (let i = 0; i < array1.length; i++) {
        res.push(array1[i]+ array2[i])
    }

    return res;
}

function removeDuplicates(array){
    let res = [];
    for (let i = 0; i < array.length; i++) {
        let flag = false;
        for (let j = i - 1; j >= 0; j--) {
            if(array[j] === array[i]){
                flag = true;
            }
        }
        if(flag === true){
            continue;
        }
        res.push(array[i])
    }

    return res;
}