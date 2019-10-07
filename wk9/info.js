

let users = getUsers()
let userId = location.hash.substring(1)
let user = users.find(function (u) {
    return u.id === userId
})
document.querySelector("button").addEventListener('click', function () {
    location.assign("/index.html")
})

const details =  (user) => {
    return `name: ${user.name} \n||age: ${user.age} \n||date registered: ${user.date}`
}

let p = document.createElement('p')
p.textContent = details(user)
console.log(details(user))
document.querySelector("body").appendChild(p)

document.querySelector("#change-name").addEventListener('input', function (e) {
user.name = e.target.value
saveUser(users)

})

window.addEventListener('storage', function (e) {
    if (e.key === "users") {
        users = JSON.parse(e.newValue)
        
    } else {
        
    }
})








