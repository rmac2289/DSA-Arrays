// URLify a string

const URLify = (url) => {
    return url.replace(/\s/g,'%20')
}

// Filtering an array 

const filtering = (array) => {
    for(let i=0; i < array.length; i++){
        if (array[i] === 5){
            array.splice(i,1)
        }
    }
    return array
}

// Max sum in the array

const maxSums = (array) => {
    let highestSum = 0
    for (let i=0; i <array.length; i++){
        let currentMax = (array[0] + array[1])
        let currentAdd = array[i] + array[i+1]
        if (currentAdd > currentMax){
            highestSum = currentAdd
        } 
    }
    return highestSum
}

// Merge Arrays

const mergeArrays = (arrayOne, arrayTwo) => {
    const bigArray=arrayOne.concat(arrayTwo)
    return bigArray.sort((a,b) => a-b)
}

// Remove Characters

const removeCharacters = (string, charDelete) => {
    let output = '';
    for (let i = 0; i < string.length; i++) {
      let contained = true;
      for (let j = 0; j < charDelete.length; j++) {
        if (string[i] === charDelete[j]) {
          contained = false;
        }
      }
      if (contained) {
        output += string[i];
      }
    }
    return output;
}

// Products

const products = (array) => {
    const product = array.map((num, i) => {
        const otherNums = array.slice(0, i).concat(array.slice((i + 1), (array.length)))
        return otherNums.reduce((acc, cur) => acc * cur)
    })
    return product
}

// 2D Array

const twoDArray = (arr) => {
    const originalArr = JSON.parse(JSON.stringify(arr))
    let newArr = arr

    originalArr.map((row, rowI) => {
        row.map((item, arrI) => {
            if (item === 0) {
                newArr[rowI].forEach((num, i) => newArr[rowI][i] = 0)
                newArr.forEach(newRow => newRow[arrI] = 0)
            }
        })
    })
    return newArr
}

// String Rotation 

const stringRotate = (str1,str2) => {
    if(str1.length !== str2.length){
        return false;
      }
      let doublestr1 = str1 + str1;
    
      if(doublestr1.indexOf(str2)===-1){
        return false;
      } else {
        return true;
      }
}