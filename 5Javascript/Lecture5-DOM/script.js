// const bodyName = document.body;

// console.log(bodyName);



//--------------DOM Method to access Element----------------------

// const box1 = document.getElementById('box-1');

// const box2 = document.getElementsByTagName('div');

// const getPara = document.getElementsByTagName('p');

// const getClass = document.getElementsByClassName('random');


// //QuerySelector

// const random = document.querySelectorAll('.box');



//-----------------Update Existing Content---------------------------

const box1 = document.getElementById('box-1');
box1.innerHTML="<h2>Hello</h2>";
box1.style.backgroundColor="red";
//box1.classList.add('round-border');

const boxes = document.getElementsByClassName('box');

for(let i = 0 ; i<boxes.length ; i++){
    boxes[i].classList.add('round-border');
}


box1.classList.remove('round-border');



//----------------Creating New Element-----------------------------
const newPara=document.createElement('p');
newPara.innerText="Hello EveryOne";
newPara.classList.add('box','round-border');

const content = document.getElementById('contain1');
content.appendChild(newPara);

//insertAdjacentHTML();
//content.removeChild(newPara);


