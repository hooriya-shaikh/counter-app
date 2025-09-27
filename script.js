let count = document.getElementById("counter");

function add(){
    count.innerText = parseInt(count.innerText) +1;
}

function substract(){
    count.innerText = parseInt(count.innerText) -1;
}

function reset(){
    count.innerText = 0;
}