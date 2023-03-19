
let username = prompt("What is your name ?");


let gender = prompt("What is your gender ?");
while (gender != "Male" && gender != "male" && gender != "female" && gender != "Female") {

    gender = prompt("Please re-enter your gender !")



}

if (gender == "Male" || gender == "male") {
    alert("Hello Mr " + username + " !");
} else {
    alert("Hello Ms " + username + " !")
}



let drinkName;
let typeOfDrink = prompt("What would you like to drink? hot or cold drink ? ");
if (typeOfDrink == "Hot" || typeOfDrink == "hot") {
    drinkName = prompt("enter the name of drink you want :")
} else if (typeOfDrink == "Cold" || typeOfDrink == "cold") {
    drinkName = prompt("enter the name of drink you want :")
}

alert("your order is perparing right now")

// alert("Name : " + username + " , Your order : " + order)
let order = [username, gender, typeOfDrink, drinkName]

for (let i = 0; i < order.length; i++) {
    console.log(order[i])
}

