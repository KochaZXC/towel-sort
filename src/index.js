
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = []

  if(matrix === undefined) {
    return newArr
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(i % 2 === 0) {
        newArr.push(matrix[i][j]); 
      } else if( i % 2 !== 0) {
        newArr.push(matrix[i][matrix[i].length - j - 1]);
      }
    }
  }
  return newArr;
}

// console.log(towelSort([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


// let test = function towelSort (matrix) {
//   let newArr = []

//   for(let i = 0; i < matrix.length; i++) {
//     for(let j = 0; j < matrix[i].length; j++) {
//       if(i % 2 === 0) {
//         newArr.push(matrix[i][j]); 
//       } else if( i % 2 !== 0) {
//         newArr.push(matrix[i][matrix[i].length - j - 1]);
//       }
//     }
//   }
//   return newArr;
// }

// console.log(test([[1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]]));

