
const about = document.querySelector('#about-me')
const projects = document.querySelector('#projects')
const certs = document.querySelector('#certs')
const main = document.querySelector('#main')
const footdiv = document.querySelector('#tr-footer')

// getting start div and setting up welcome message
const start = document.querySelector('#start')
const starttext = document.querySelector('#msg')
const msg = "Hello, welcome to my portfolio. Please click on a link or a button below to find out more information. You can also visit me on social media. Links to my socials can be found in the footer. Thanks!"


// grabbing buttons
const aboutbtn = document.querySelector('#aboutbtn')
const projectbtn = document.querySelector('#projectbtn')
const certsbtn = document.querySelector('#certsbtn')




/*turning start msg into array of individual characters, then iterating 
over each and adding each letter to a new array, that then gets appended to page to look like 
im typing out the message in real time */
const startmsg = () => {
    let msg1 = msg.split('')
    let msg2 = ''

    msg1.forEach((letter, i)=> {
        setTimeout(() => {
            msg2 += letter
            starttext.textContent = msg2
        }, i * 25)
    })
    setTimeout(() => {
        aboutbtn.style.transition = 'all 1s ease'
        aboutbtn.style.opacity = '1'
        
    }, 5000)
    setTimeout(() => {
        projectbtn.style.transition = 'all 1s ease'
        projectbtn.style.opacity = '1'
        
    }, 5500)
    setTimeout(() => {
        certsbtn.style.transition = 'all 1s ease'
        certsbtn.style.opacity = '1'
        
    }, 6000)


}


window.addEventListener('load', () => {
    startmsg()

})





// functions that remove unneeded content and add selected content
const displayAbout = () => {
    
    start.remove()
    main.style.display = 'flex'
    footdiv.style.display = 'block'
    main.querySelectorAll('section').forEach((element) => {
        element.style.display = 'none'
    })
    about.style.display = 'flex'
}

const displayProjects = () => {
    
    start.remove()
    main.style.display = 'flex'
    footdiv.style.display = 'block'
    main.querySelectorAll('section').forEach((element) => {
        element.style.display = 'none'
    })
    projects.style.display = 'flex'
}

const displayCerts = () => {
    
    start.remove()
    main.style.display = 'flex'
    footdiv.style.display = 'block'
    main.querySelectorAll('section').forEach((element) => {
        element.style.display = 'none'
    })
    certs.style.display = 'flex'
}

const reloadPage = () => {
    location.reload()
}

