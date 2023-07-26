const arr = [1,2,3,4,5];
arr.push(6);
arr.unshift(0);
arr.reverse();
// console.log(arr);

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
let arr3;

if (arr1[arr1.length - 1] === arr2[0]) {
    arr3 = [...arr1, ...arr2.slice(1)];
}
console.log(arr3);


// // Challenge 1

// const arr = [1, 2, 3, 4, 5];

// // arr.reverse();
// // arr.push(0);
// // arr.unshift(6);

// // Same result as above
// arr.push(6);
// arr.unshift(0);
// arr.reverse();

// console.log(arr);

// // Challenge 2

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// // Solution 1
// const arr3 = arr1.slice(0, 4).concat(arr2);

// // Solution 2
// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1);

// console.log(arr4);
