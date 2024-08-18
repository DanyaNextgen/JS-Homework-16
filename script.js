let num = prompt("Введите число:");

function fibonacci(num) {
    let firstNum = 0;
    let secondNum = 1;
    console.log(firstNum);
    console.log(secondNum);
  
    for (let i = 2; i < num; i++) {
      let nextNum = firstNum + secondNum;
      console.log(nextNum);
      firstNum = secondNum;
      secondNum = nextNum;
    }
}

fibonacci(num)

function sort(arr) {
    let switched = true;
    while (switched) {
        switched = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
          switched = true;
        }
      }
    }
    return arr;
  }

let arr = [4, 1, 5, 3, 2];
let sortedArray = sort(arr);
  
console.log(sortedArray);
