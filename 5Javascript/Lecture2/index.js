// console.log("chaliye suru krte hai");


// //creating object

// let rectangle ={
//     lenght:12,
//     breadth:10,

//     draw: function(){
//         console.log('Drawing a function');
//     }
// };

// console.log(rectangle.draw());



// //Factory Function

// function createRectangle(length ,breadth){

//     return rectangle ={
//         length:length,
//         breadth:breadth,
    
//         draw: function(){
//             console.log('Drawing a function');
//         }
//     };
// }

// let a = createRectangle(21,20);
// console.log(a);




// //Constructor Function 
// function Rectangle(){
//     this.length=1,
//     this.breadth=2,

//     this.draw=function(){
//     console.log('Drawing a function');
// }

// }

// let ab =new Rectangle();
// console.log(ab);




// // Dynamic Properties of an object
// a.color='yellow';
// console.log(a);

// delete a.color;
// console.log(a);


// let a = 10;
// let b = a;

// a++;

// console.log(a);
// console.log(b);





// let a ={
//     value :10
// };
// let b = a ;
// a.value++;

// console.log(a.value);
// console.log(b.value);





// //pass by value

// let a = 101;
// function inc(a){
//     a++;
// }

// inc(a);
// console.log(a);





// //pass by reference
// let a ={
//     value:10};

// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a.value);




//-----------------------------For in / for of loops -----------------------


// let rectangle = {
//     length:2,
//     breadth:4
// };



// // //for in looop

// // for(let key in rectangle){
// //     console.log(key , rectangle[key]);
// // }



// //for of loop 

// // for(let key of rectangle){
// //     console.log(key);    ----------- Gives error because rectangle is not iterative
// // }


// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }
 



// let rectangle = {
//     length:2,
//     breadth:4
// };

// if('length' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }



 
