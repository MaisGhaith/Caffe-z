const form = document.getElementById("form1");
const div = document.getElementById("showDiv");

form.addEventListener('submit' , (event)=>{
event.preventDefault();
let Name = event.target.inputName.value;
let age = event.target.inputNumber3.value;
let drink = event.target.gridCheck.checked ? "hot" : "cold";
let drinkName = event.target.drinkText.value;


render(Name, age ,drink ,drinkName);


});

let checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]');
let result = [];



let div2 = document.createElement("div");
function render(Name, age ,drink ,drinkName){
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
div.appendChild(div2)

p1.textContent = Name;
p2.textContent = age ;
p3.textContent = drink ;
p4.textContent = drinkName;

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(p4);
}