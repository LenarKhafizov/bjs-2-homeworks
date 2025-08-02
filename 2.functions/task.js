function getArrayParams(...arr) {
  let min = + Infinity;
  let max = - Infinity;
  let sum = 0;
  for (let i =0; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
     if (arr[i] > max) {
      max = arr[i];
    } 
    sum += arr[i];
  }
  const avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) return 0;
  const initialValue = 0;
  const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let min = Math.min.apply(Math, arr);
  let max = Math.max.apply(Math, arr);  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i =0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }     
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i =0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }  
  }
  return +(sumEvenElement / countEvenElement).toFixed(2);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;
  // let funcResult = 0;
  if (!arrOfArr.length) return 0;
  for (let i =0; i < arrOfArr.length; i++){
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }      
  }
  return maxWorkerResult;
}
