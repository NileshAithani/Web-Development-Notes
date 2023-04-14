// //Question 1 -

// let object1 = {
//     Nilesh : 10,
//     Manish : 21,
//     simran : 23
// };

// //using for in loop
// for(let key in object1){
//     console.log(key,object1[key]);
// }

// //using for loop
// for(let key=0;key<Object.keys(object1).length ; key++){
//     console.log(Object.entries(object1)[key]+" ");
// }


// //Question - Average of five number

// function avgFive(a , b , c , d , e){
//     let aa = (a+b+c+d+e)/5;

//     return aa ;
// }

// console.log(avgFive(1,2,3,4,15));







//Question 3 : Write a function called 'countLetters' that takes a string parameter
//           and returns an object that contains a count of each letter in the string.

// function countLetter(str){
//     const counts ={};

//     for(let i=0;i<str.length;i++ ){
//         const char =str[i];

//         if(counts[char]){
//             counts[char]++;
//         }
//         else{
//             counts[char]=1;
//         }
//     }
//     return counts;
// }

// const letterCounts =countLetter("HelloEveryone");
// console.log(letterCounts);






// Question 4 : Write a function called 'createCounter' that returns a function. The returned function should increment a counter
//            variable each time it is called and return the current count.

// function createCount(){

//     let count =0;

//     return function(){
//         count++;
//         return count;
//     };

// }

// const counter =createCount();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());




// Question 5 : Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and
//              returns the sum of all even numbers in the array.

//  function sumEvenNumber(number){
//     let ans = 0 ;
//     for(let i = 0 ; i<number.length ; i++ ){
//         if(number[i]%2===0){
//             ans =ans+number[i];
//         }
//     }
//     return ans;
//  }


//  const number = [1,2,3,4,5,6,7];
//  let evenSum = sumEvenNumber(number);
//  console.log(evenSum);





//Question 6: Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// function sum(number){
//         let ans = 0 ;
//         for(let i = 0 ; i<number.length ; i++ ){
//                 ans =ans+number[i];
//         }
//         return ans;
//      }
     
//  const number = [1,2,3,4,5,6,7];
//  let Sum = sum(number);
//  console.log(Sum);






//Question 7 : Write a function that takes an array of strings as an argument and returns a
//             new array with only the strings that have a length greater than 5.

// function a(arr){
//     let arrNew =[];
//     let j = 0;
//     //we can also use push i.e [arrNew.push(arr[i]);]
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i].length > 5){
//            arrNew[j++]=arr[i];
//         }
//     }
//     return arrNew;
// }

// const arr =["dsdasdasdasd","adasdad","das","sdada","a","as"];
// const aaa =a(arr);
// console.log(aaa);






//Question 8: Write a function that takes an object and returns an array of all the keys in the object.

// function returnKey(obj){
//     for(let key in obj){
//         console.log(key);
//     }
// }
// //We can also use Object.keys(ObjectName);

// const obj = {
//     a:1 ,
//     b:2,
//     c:3,
//     d:5
// }

// console.log(returnKey(obj));




//Question 9 : Write a function that takes an array of objects and returns an array of all the values of a specified property name.


