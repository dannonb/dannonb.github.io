'use strict'

const users = getUsers()

const filters = {
    nameFilter: "",
    
}

const vowels = ["a","e","i","o","u"]

displayUsers(users, filters)

document.querySelector("#search-field").addEventListener("input", (e) => { 
    filters.nameFilter = e.target.value
    displayUsers(users, filters)
    
})

document.querySelector("#add-user").addEventListener("submit", (e) => {
e.preventDefault()
addUser(e)
})

document.addEventListener("click", () => {
    document.querySelector("#greeting").innerHTML = ""
})