
//--------Add Event Listener--------
// function Clicking(){
//     console.log("I clicked.....")
// }

// document.addEventListener('click' , Clicking );





//------Remove Event Listener-------

// document.removeEventListener('click' , Clicking);






//-----THe Event Object-------
// const content = document.querySelector("#wrapper");

// content.addEventListener('click' , function(event){
//     console.log(event);

// })




//--------Prevent Default Action-----------
// const links = document.querySelectorAll('a');
// const thirdLink = links[2];

// thirdLink.addEventListener('click' , function(event){
//     event.preventDefault();
//     console.log("Event is prevent")

// })




//-----how to avoid to many events---------

// let myDIv =document.createElement('div');

// function paraStatus(event){
//     console.log("I Clicked on Para");
//     //console.log(event.target.textContent);
// }
// }

// myDIv.addEventListener('click' , paraStatus );

// for(let i = 0 ; i<=100 ; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is New Para'+ i ;
    
//     myDIv.appendChild(newElement);

// }
// document.body.appendChild(myDIv);



const element = document.querySelector('#container');

element.addEventListener('click' , function(event){
    if(event.target.nodeName ==='SPAN'){
        console.log("Span pr click kia hai" + event.target.textCONTENT);
    }
});

