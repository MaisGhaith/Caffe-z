
let user = prompt("What is your name ?");
alert("Hello, " + user + "!");

let gender = prompt("What is your gender ?");
if(gender == "Male" || gender == "male"){
    alert("Welcome Mr "+user);
} else if (gender == "Female" || gender == "female"){
    alert("Welcome Ms "+user)
}else {
    alert("you are welcome");
}

let drink = prompt("What would you like to drink? hot or cold drink ? ");
if(drink == "Hot" || drink == "hot"){
    prompt("enter the name of drink you want :")
}else if (drink == "Cold" || drink == "cold"){
    prompt("enter the name of drink you want :")
   
}

alert("your order is perparing right now")

alert("Name :"+ user + " , The order :" + drink)