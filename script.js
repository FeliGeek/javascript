const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");

let listado = [];

button.addEventListener("click",function(){
    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
});