//------------Windows Object ---------------

console.log(document);
window.console.log(documnet.body);


//-----------DOM--------------



// (1)---------------Access Element---------------


// 1 - id

window.console.log(document.getElementById('ID-Name'));



//  2 - Class

window.console.log(documnet.getElementsByClassName('Class-Name'));



// 3 - tag

window.console.log(document.getElementsByTagName('h1'));



// 4 - $0
let content = $0;
console.log(content);



// 5 - Query Selector

let a = document.querySelector('#ID');

let b = document.querySelector('.class-Name'); // select the top most class (only one class will be select)

let c = document.querySelector('header');



// 6 - Query Selector all

let z = document.querySelectorAll('.class-Name'); // select all the class available




// (2)----------Update Existing Content------------

// 1 - InnerHTML






