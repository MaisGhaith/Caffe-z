// let username = prompt("What is your name ?");


// // let gender = prompt("What is your gender ?");
// // while (gender != "Male" && gender != "male" && gender != "female" && gender != "Female") {

// //     gender = prompt("Please re-enter your gender !")
// // }
// let gender = prompt("Please enter your gender");

// function genderName(gender1) {
//     while (gender1 != "Male" && gender1 != "male" && gender1 != "female" && gender1 != "Female") {
//         gender1 = prompt("Please enter your gender correctly :")
//     }

//     if (gender1 == "Male" || gender1 == "male") {
//         alert("Hello Mr " + username + " !");
//     } else if (gender1 == "Female" || gender1 == "female") {
//         alert("Hello Ms " + username + " !")
//     }
// }

// genderName(gender)

// let age = prompt("How old are you ?");

// let drinkName;
// let typeOfDrink = prompt("What would you like to drink? hot or cold drink ? ");
// if (typeOfDrink == "Hot" || typeOfDrink == "hot") {
//     drinkName = prompt("enter the name of drink you want :")
// } else if (typeOfDrink == "Cold" || typeOfDrink == "cold") {
//     drinkName = prompt("enter the name of drink you want :")
// }

// alert("your order is perparing right now")



// let order = [username, gender, age, typeOfDrink, drinkName]

// for (let i = 0; i < order.length; i++) {
//     console.log(order[i])
// }
// // alert("Name : " + username + " , Your order : " + order)


// let element = document.getElementById(customerInfo)

// let paragraph = document.createElement("p")
// let ul = document.createElement("ul")
// let li1 = document.createElement("li")
// let li2 = document.createElement("li")
// let li3 = document.createElement("li")




// paragraph.textContent = `Name : ${username}`
// ul.textContent = `Gender : ${gender}`
// li1.textContent = `Age : ${age}`
// li2.textContent = `Type of Drink : ${typeOfDrink}`
// li3.textContent = `Drink Name : ${drinkName}`

// customerInfo.appendChild(paragraph)
// customerInfo.appendChild(ul)
// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)

// // to delete the dotes on list
// ul.style.listStyleType = "none"




const form = document.getElementById("myForm");
const details = document.getElementById("customerInfo");
// const check = document.getElementById("hot").value;
// document.getElementById("customerInfo").innerHTML

form.addEventListener("submit", (event) => {
    event.preventDefault();



    let name = event.target.username.value;
    let age = event.target.Age.value;
    let Hot = event.target.hotDrink.checked;
    let Cold = event.target.coldDrink.checked;
    let drinkName = event.target.DrinkName.value;

    console.log(name)
    console.log(age)
    console.log(Hot)
    console.log(drinkName)

    form.reset()
    render(name, age, Hot, drinkName)
});

// console.log(form)

function render(name, age, Hot, drinkName) {
    let pName = document.createElement("p")
    pName.textContent = `${name}`;

    let pAge = document.createElement("p")
    pAge.textContent = `${age}`

    let pType = document.createElement("p")
    pType.textContent = `${Hot}`

    let pDrinkName = document.createElement("p")
    pDrinkName.textContent = `${drinkName}`


    details.appendChild(pName)
    details.appendChild(pAge)
    details.appendChild(pType).innerHTML
    details.appendChild(pDrinkName)



}
