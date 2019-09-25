const users = getUsers()

const filters = {
    nameFilter: "",
    
}

const vowels = ["a","e","i","o","u"]

displayUsers(users, filters)

document.querySelector("#search-field").addEventListener("input", function (e) {
    filters.nameFilter = e.target.value
    displayUsers(users, filters)
    
})

document.querySelector("#add-user").addEventListener("submit", function (e) {
e.preventDefault()
addUser(e)
})

document.addEventListener("click", function () {
    document.querySelector("#greeting").innerHTML = ""
})