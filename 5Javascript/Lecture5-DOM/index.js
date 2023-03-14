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
// let content = $0;
// console.log(content);



// 5 - Query Selector

let a = document.querySelector('#ID');

let b = document.querySelector('.class-Name'); // select the top most class (only one class will be select)

let c = document.querySelector('header');



// 6 - Query Selector all

let z = document.querySelectorAll('.class-Name'); // select all the class available




// (2)----------Update Existing Content------------


// 1 - InnerHTML

//a - Get (get all the decendent tags with information)

let content1 =document.querySelector('h1');
console.log(content1.innerHTML);

//b - Set (set the content in palce of all decendent)
content.innerHTML = ' ';






// 2 - OuterHTML ( sset or return the html element , including attribute , start tag and end tag)


//return the outerHTML property
console.log(content1.outerHTML);

//set the outerHTML property 
content1.outerHTML = text ;







// 3 - innerText  ( this property set or returns the text content of an element) (Not print hidden content )

content1.innerText ;  //return 
content1.innerText = text ;  //set




// 4 - textContent  (This property set or returns the text content of the specified node and all its decendents. ) (print hidden content)

console.log(document.querySelector('h1').textContent);





//---------------------Adding New Element -----------------------------







