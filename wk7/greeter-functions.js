//displays users
const displayUsers = function (users, filters) {
    
    let filteredUsers = users.filter(function (u) {
        return u.name.toLowerCase().includes(filters.nameFilter.toLowerCase())
    })
    
    
    document.querySelector("#display-users").innerHTML = ""

    filteredUsers.forEach(function (u) {
        let userEl = document.createElement("p")
        userEl.textContent = `${u.name} ${u.age}`
        document.querySelector("#display-users").appendChild(userEl)
    })
}

// creates a greeting for user
const greeting = function (userName) {
    let greetEl = document.createElement("h2")
    let obj = nameChanger(userName)
    if (obj.assignedNum >7) {
         greetEl.textContent = `Welcome back ${obj.playerName.charAt(0).toUpperCase() + obj.playerName.slice(1, obj.playerName.length)}, how the heck are ya?`
    } else if (obj.assignedNum > 3 ) {
         greetEl.textContent = `No WAY it's ${obj.playerName.charAt(0).toUpperCase() + obj.playerName.slice(1, obj.playerName.length)}! You know how I can remember your name so easily? It has ${obj.length} letters, so how could I forget?`
    } else {
         greetEl.textContent = `${obj.nickName.charAt(0).toUpperCase() + obj.nickName.slice(1, obj.nickName.length)}, you're the coolest! Thanks for registering!`
    }
    
    
    
    document.querySelector("#greeting").appendChild(greetEl)
    
}

const saveUser = function (users) {
     
    localStorage.setItem("users", JSON.stringify(users))

}

const getUsers = function () {
 let usersJSON = localStorage.getItem("users")
 if (usersJSON !== null) {
    return JSON.parse(usersJSON)
 } else {
     return []
 }
 

}

// function that creates a user 
const addUser = function (e) {
let userName = e.target.elements.addUser.value
let userAge = e.target.elements.addAge.value
if (userName.length > 0 && userAge.length > 0) {
    users.push({
        id: uuidv4(),
        name: userName,
        age: userAge,
    })
    e.target.elements.addUser.value = ""
    e.target.elements.addAge.value = ""
    saveUser(users)
    greeting(userName)
    displayUsers(users, filters)
    } else {
        errorMsg()
    }
}

// users.push({
//     id: uuidv4(),
//     name: userName,
//     age: userAge,
// })
// e.target.elements.addUser.value = ""
// e.target.elements.addAge.value = ""
// saveUser(users)
// greeting(userName)
// displayUsers(users, filters)
// }


// this function creates a random number
const randomNumGenerator = function () {
    let min = 1
    let max = 10
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    return random
}

// this array stores vowels


// this function takes in a name
// then modifies the name using built in javascript functions
// each modification becomes a new value and is stored in a variable
// finally, an object is returned with name mods as properties and various other properties
const nameChanger = function (name) {
    let halfName = name.slice(0, Math.ceil(name.length / 2))
    let lastLetter = name.charAt(halfName.length - 1)
   // this if statement determines whether the half name ends with a vowel 
   // the nickname is generated 'dynamically' based on this 
   if (vowels.includes(lastLetter) && halfName.length > 2) {
        return {
            playerName: name,
            length: name.length,
            assignedNum: randomNumGenerator(),
            firstLetter: name.charAt(0),
            halfName: name.slice(0, Math.ceil(name.length / 2)),
            nickName: name.slice(0, Math.ceil(name.length / 2)) + "meister"
            }
    } else if (!vowels.includes(lastLetter) && halfName.length > 2) {
        return {
            playerName: name,
            length: name.length,
            assignedNum: randomNumGenerator(),
            firstLetter: name.charAt(0),
            halfName: name.slice(0, Math.ceil(name.length / 2)),
            nickName: name.slice(0, Math.ceil(name.length / 2)) + "inator"
            } 
    }
    else {
        return {
            playerName: name,
            length: name.length,
            assignedNum: randomNumGenerator(),
            firstLetter: name.charAt(0),
            halfName: name.slice(0, Math.ceil(name.length / 2)),
            nickName: name.slice(0, Math.ceil(name.length / 2)) + "dawg"
            }
    }

}

const errorMsg = function () {
    const err = document.createElement("h2")
    err.textContent = "ERROR: PLEASE FILL IN ALL FIELDS TO ADD USER"
    err.setAttribute("style", "color: orangered")
    document.querySelector("#greeting").appendChild(err)

}