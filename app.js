let username = prompt("What is your name ?");


// let gender = prompt("What is your gender ?");
// while (gender != "Male" && gender != "male" && gender != "female" && gender != "Female") {

//     gender = prompt("Please re-enter your gender !")
// }
let gender = prompt("Please enter your gender");

function genderName(gender1) {
    while (gender1 != "Male" && gender1 != "male" && gender1 != "female" && gender1 != "Female") {
        gender1 = prompt("Please enter your gender correctly :")
    }

    if (gender1 == "Male" || gender1 == "male") {
        alert("Hello Mr " + username + " !");
    } else if (gender1 == "Female" || gender1 == "female") {
        alert("Hello Ms " + username + " !")
    }
}

genderName(gender)

let age = prompt("How old are you ?");

let drinkName;
let typeOfDrink = prompt("What would you like to drink? hot or cold drink ? ");
if (typeOfDrink == "Hot" || typeOfDrink == "hot") {
    drinkName = prompt("enter the name of drink you want :")
} else if (typeOfDrink == "Cold" || typeOfDrink == "cold") {
    drinkName = prompt("enter the name of drink you want :")
}

alert("your order is perparing right now")



let order = [username, gender, age, typeOfDrink, drinkName]

for (let i = 0; i < order.length; i++) {
    console.log(order[i])
}
// alert("Name : " + username + " , Your order : " + order)


let element = document.getElementById(customerInfo)

let paragraph = document.createElement("p")
let ul = document.createElement("ul")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")




paragraph.textContent = `Name : ${username}`
ul.textContent = `Gender : ${gender}`
li1.textContent = `Age : ${age}`
li2.textContent = `Type of Drink : ${typeOfDrink}`
li3.textContent = `Drink Name : ${drinkName}`

customerInfo.appendChild(paragraph)
customerInfo.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

// to delete the dotes on list 
ul.style.listStyleType = "none"