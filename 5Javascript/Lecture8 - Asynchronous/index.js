// console.log('Nilesh Here')


// setTimeout(function(){console.log('Third')};)

// function sync(){
//     console.log('First');
// }
// sync();

// console.log('Second');




//-----------------Promise----------------------

// let newPromise =new Promise(function(resolve , reject){
// setTimeout(function(){console.log("Inside Promise")},5000);

// //resolve(69);

// // reject(new error('Error Occur'));
// });


// let mewPromise2 = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Im Inside promise 2")
//     }, 3000);

// });


// console.log("Thrid");






///---------------------------async----------------------------


// async function abcd(){
//     return 7;
// }

// console.log(abcd());



// async function weather(){


//     let ukWeather =new Promise((resolve ,reject) => {
//         setTimeout(()=>{
//             resolve("Uttrakhand temprature is cool");
//         },4000);
//     });

//     let upWeather =new Promise((resolve ,reject) => {
//         setTimeout(()=>{
//             resolve("UttarPradesh temprature is high");
//         },5000);
//     });

//     let UK = await ukWeather;
//     let UP = await upWeather;

//     return [UK,UP];



// }




//------------------Fetch API--------------------------------


// let obj = {
//     heading : "head"
// };

// async function utility(){

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output =await content.json();
//     console.log(content);
// }

// utility();


// async function helper(){
// let option = {
//     method : 'POST',
//     body :JSON.stringify({
//         title : 'Nilesh',
//         body : 'strong',
//         userID : 69,
//     }),

//     headers: {
//         'Content-type' : 'application/json ; charset=UTF-8',
//     },
// };

// let content =await fetch('https://jsonplaceholder.typicode.com/posts',option);
// let response =content.json();
// return response ;
// }


// async function utility (){
//      let ans = await helper();
//      console.log(ans);
// }

// utility();

function outer(){
    const name = Nilesh;
    function inner(){
        console.log('Hello'+ name);
    }
}

let a = outer();
a();



















