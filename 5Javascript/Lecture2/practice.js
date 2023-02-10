//Question 1 -

let object1 = {
    Nilesh : 10,
    Manish : 21,
    simran : 23
};

//using for in loop
for(let key in object1){
    console.log(key,object1[key]);
}

//using for loop
for(let key=0;key<Object.keys(object1).length ; key++){
    console.log(Object.entries(object1)[key]+" ");
}


//Question - Average of five number

function avgFive(a , b , c , d , e){
    let aa = (a+b+c+d+e)/5;

    return aa ;
}

console.log(avgFive(1,2,3,4,15));