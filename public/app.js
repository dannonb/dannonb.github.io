const msg = 'Hello! I am a full-stack Web Developer and Programmer from California. My skillset currently consists of Node.js, Golang, Javascript, SQL, HTML and CSS.'
const para = document.querySelector('#para')
const button = document.getElementById('button')
const chatBub = document.getElementById('chat-bubble')

let x = 0

const makeMsg = (i) => {
    para.textContent = '' 
    let message = msg.slice(0, i)
    console.log(message)
    para.textContent = message
    

    
}

const addMsg = () => {
    
    setInterval(() => {
        
        x += 1
        makeMsg(x)
        
    }, 50)
}




const remove = () => {
    button.style.display = 'none'
}

const changePad = () => {
    document.body.style.paddingTop = '20px'
    
}

const addTextArea = () => {
    chatBub.style.border = "2px solid black"
    chatBub.style.backgroundColor = 'navy'
    chatBub.style.borderRadius = '4px'
    chatBub.style.display = 'block'
    
}
    

const aboutFuncs = () => {
    
    setTimeout(() => {
        addMsg()
    }, 200)
    remove()
    changePad()
    addTextArea()
    
    
}
 console.log(msg.length)
 

