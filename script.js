
let element1 = document.getElementById('project1');
let element2 = document.getElementById('project2');
let element3 = document.getElementById('project3');
let element4 = document.getElementById('project4');


const array = document.getElementsByClassName('project_description');
const newarr = Array.from(array);
console.log(newarr);

function hideDesc1(){
    newarr[0].style.visibility ='hidden';
}
function showDesc1(){
    newarr[0].style.visibility ='visible';
}

function hideDesc2(){
    newarr[1].style.visibility ='hidden';
}
function showDesc2(){
    newarr[1].style.visibility ='visible';
}

function hideDesc3(){
    newarr[2].style.visibility ='hidden';
}
function showDesc3(){
    newarr[2].style.visibility ='visible';
}

function hideDesc4(){
    newarr[3].style.visibility ='hidden';
}
function showDesc4(){
    newarr[3].style.visibility ='visible';
}

element1.onmouseover = showDesc1;
element1.onmouseout = hideDesc1;
element2.onmouseover = showDesc2;
element2.onmouseout = hideDesc2;
element3.onmouseover = showDesc3;
element3.onmouseout = hideDesc3;
element4.onmouseover = showDesc4;
element4.onmouseout = hideDesc4;



