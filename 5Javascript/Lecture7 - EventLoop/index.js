// 100 para


// const t1 = performance.now();

// for(let i= 1 ; i<=100; i++){
//     let newpara = document.createElement('p');
//     newpara.textContent='this is my para ' + i;

//     document.body.appendChild(newpara);

// }
// const t2 = performance.now();

// console.log( 'time taken ' + (t2-t1) + ' ms');


//optimizing a little bit 

const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i =1 ; i<=100 ; i++){
    let ELement = document.createElement('p');
    Element.textContent='This is my para' + i ;

    myDiv.appendChild(Element);

}

document.body.appendChild(myDiv);

const t4 = performance.now();

console.log('time taken ' + (t4-t3) + ' ms');



//---------------------Event listener--------------------------

// console.log('Hii');

// documnet.addEventListener('click' , function(){
//     console.log('hello Jee');
// });

// console.log('Hello');


//---------SetTimeOut--------------------

setTimeout(function(){console.log('Print Hello EveryOne after 4s') , 4000});