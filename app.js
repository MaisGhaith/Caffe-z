
let user = prompt("What is your name ?");


let gender = prompt("What is your gender ?");
if(gender == "Male" || gender == "male"){
    alert("Hello Mr " + user + " !");
} else if (gender == "Female" || gender == "female"){
    alert("Hello Ms " + user + " !");
}else {
    alert("you are welcome");
}

let order; 
let drink = prompt("What would you like to drink? hot or cold drink ? ");
if(drink == "Hot" || drink == "hot"){
    order = prompt("enter the name of drink you want :")
}else if (drink == "Cold" || drink == "cold"){
   order = prompt("enter the name of drink you want :")
   
}

alert("your order is perparing right now")

alert("Name : "+ user + " , Your order : " + order)