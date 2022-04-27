
// problem 2

// let arr = [4,-2, 5, -10, 12, 3, -4, -5];
// let arr = [-2, 5, -10, 12, 3, -4, -5];

// let result = true;

// if(arr[0] < 0) {
//     for (let i = 0; i < arr.length; i++) {
//         if(i % 2 == 0 && arr[i] > 0) {
//             result = i;
//             break;
//         } else if(i % 2 != 0 && arr[i] > 0) {
//             result = i;
//             break;
//         }
//     }
// } else {
//     for (let i = 0; i < arr.length; i++) {
//         if(i % 2 == 0 && arr[i] < 0) {
//             result = i;
//             break;
//         } else if(i % 2 != 0 && arr[i] > 0) {
//             result = i;
//             break;
//         }
//     }
// }
// console.log(result);


// 3 problem 

// const obj ={
//     // arr: [20, 12, 0, 2, -12, -20],
//     arr: [15, 20, 12, 4, -13, 5],

//     at: function(index){

//         if (index < 0 && this.arr.length + index >= 0){
//             index = this.arr.length + index;
//             return this.arr[index];
//         }
//         else if (index >= 0 ){
//             return this.arr[index];
//         }
//         else{
//             return undefined;
//         }
//     } 
// }
// console.log(obj.at(-2));


// problem 5

// let obj = {
//     x: 1,
//     y: 2
// }

// let newArr = [];
// let arr = [];

// for(let i in obj) {
//     newArr[newArr.length] = `${i}, ${obj[i]}`;
// }
// let one = newArr.splice(1, 2)
// arr[arr.length] = newArr;
// arr[arr.length] = one;

// console.log(arr);


// problem 7

// let a = [1, "t", 15, "t"];
// let b = [2, 4];
// let a = [1, 5, 12, 5, -10];
// let b = [12, 6, 1];
// let c = [];
// let newArr = [];
// let count = 0;

// for (let i = 0; i < b.length; i++) {
//     a[a.length] = b[i];
// }
// for (let i = 0; i < a.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//         if (a[j] != a[i]) {
//             count = 0;
//         } else {
//             count = 1;
//             break;
//         }
//     }
//     if (count == 0) {
//         newArr[newArr.length] = a[i];
//     }
// }

// console.log(a);

// problem 4

// const string = {
//     reverse: function(str){
    
//     },
// }

// let r = string.reverse(salom);
// console.log(r);



// problem 6

// let a = [7, 8, 7, 2, 10, 6]
// let k = 2;
let newArr = [];

let a = ['t', 1, 5, 2, 'b'];
let k = 3;
let b;


for (let i=0; i < a.length; i++) {
    if(i == k) {
        b = a.slice(i, a.length)
    }
}
newArr = ['-', '-', ...b];
console.log(newArr);


