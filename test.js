// const matrix = [
//     [1, 1, 1, 1],
//     [5, 2, 2, 100],
//     [9, 4, 2, 1],
//   ];
  
//   const getMinimalCell = function (table, i, j) {
//     const top = table[i - 1]?.[j];
//     const left = table[i][j - 1];
//     let sum = 0;
  
//     if (top !== undefined && left !== undefined) {
//       sum += top > left ? left : top;
//     }
//     if (top !== undefined && left === undefined) {
//       sum = table[i - 1][j];
//     }
  
//     if (top === undefined && left !== undefined) {
//       sum = table[i][j - 1];
//     }
//     return sum;
//   };
  
//   const getMinRoute = function (matrix, i, j, res = []) {
//     res[res.length] = [i, j];
//     const left = matrix[i][j - 1];
//     const top = matrix[i - 1]?.[j];
  
//     if (top !== undefined && left !== undefined) {
//       if (left > top) {
//         getMinRoute(matrix, i - 1, j, res);
//       } else getMinRoute(matrix, i, j - 1, res);
//     }
  
//     if (top !== undefined && left === undefined) {
//       getMinRoute(matrix, i - 1, j, res);
//     }
  
//     if (top === undefined && left !== undefined) {
//       getMinRoute(matrix, i, j - 1, res);
//     }
//     return res;
//   };
  
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       matrix[i][j] += getMinimalCell(matrix, i, j);
//     }
//   }
  
//   const res = getMinRoute(matrix, matrix.length - 1, matrix[0].length - 1);
//   console.log(res.reverse());
//   console.table(matrix);



// 167 problem

// let arr = [-2, 5, -10, 12, 3, -4, -5];
// let arr = [-2, 4, -8, 16, -32];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         count += arr[i];
//     } 
// }

// console.log(count);


