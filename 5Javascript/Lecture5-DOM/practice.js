//Question 1 : Write a function to change the text of a button on the click event.

// function changeButtonText(){

//     const button = document.querySelector("button");

// if(button.textContent === "Click Me....!"){
//     button.textContent === "Clicked!";
// }
// else {
//     button.textContent==="Click Me....!";
// }

// }

// const button = document.querySelector("button");
// button.addEventListener("click" , changeButtonText);






//Question 2 : Write a function to add a CSS class to an element on the mouseover event.

// function addClassOnMouseover(elementID , className){
//     const element = document.getElementById(elementID);

//     element.addEventListener("mouseover" , ()=>{
//         element.classList.add(className);
//     });;
// }

// addClassOnMouseover("button" , "active");



//Question 3 : Write a function to remove a CSS class from an element on scroll event.

// function removeClassOnScroll(elementId , className){

//     const element = document.getElementById(elementId);

//     element.addEventListener("scroll" , ()=>{
//         if(element.classList.contains(className)){
//             element.classList.remove(className);
//         }     
//     });
// }


// removeClassOnScroll("button" , "active");




//Question 4 : Write a function to toggle the display of a div element on click event.

function toggleDisplayOnClick(element){
    const div= document.getElementById(element);

    if(div.style.display === "none"){
        div.style.display = "block"
    }
    else{
        div.style.display = "none"
    }


}