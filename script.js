const input = document.getElementById("input");
const button = document.getElementById("button");
const article = document.getElementById("article");

let notes = [];

button.addEventListener("click",function(){
    let text = input.value;
    notes.push(text);
    saveText();
    showText();
});

function showText(){
    article.innerHTML = "";
    notes.forEach(function(note,indice){
        let div = document.createElement("div");
        div.textContent = "- " + note + " ";
        let boton = document.createElement("button");
        boton.textContent = "X";
        boton.addEventListener("click",function(){
            notes.splice(indice,1);
            saveText();
            showText();
        });
        div.appendChild(boton);
        article.appendChild(div);
    });
};

function saveText(){
    localStorage.setItem("notes", JSON.stringify(notes));
};

function loadText(){
    let savedText = localStorage.getItem("notes");
    if(savedText){
        notes = JSON.parse(savedText);
        showText();
    };
};

loadText();