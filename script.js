let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click",function(){
let item = document.createElement("li");
item.innerText = inp.value;

let delbtn = document.createElement("button");
delbtn.innerText = "Delete";
delbtn.classList.add = "Delete";
item.appendChild(delbtn);

ul.appendChild(item);
inp.value = ""; 
});



   ul.addEventListener("click",function(Event){
       if(Event.target.nodeName == "BUTTON"){
        let listitem = Event.target.parentElement;
        listitem.remove();
        console.log("deleted");
       }
   });