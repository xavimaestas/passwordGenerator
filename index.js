let variables = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","(",")"]
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordThree = document.getElementById("password-three")
let passwordFour = document.getElementById("password-four")
let passwordLength = document.getElementById("input-text").value
let errorMessage = document.getElementById("error")
errorMessage = "Please Follow the Instructions"
isAlive = false




function generatePassword(){
    let arrayOne = []
    let arrayTwo = []
    let arrayThree = []
    let arrayFour = []
    let inputArray = []
    isAlive = false
    passwordLength = document.getElementById("input-text").value
    
    
    if(passwordLength === ""){
       
    isAlive = false
    
    
    } else if (parseInt(passwordLength) >= 5 && parseInt(passwordLength) <= 15 ){
    //first password for loop
    for(let i = 0; i < parseInt(passwordLength); i++){
    let randomPass = Math.floor(Math.random()*variables.length)
    let passOne = variables[randomPass]
    arrayOne.push(passOne)
    passwordOne.textContent = arrayOne.join("")
    document.getElementById("error").style.display="none"
    isAlive = false
    
}

//second password for loop
 for(let i = 0; i < parseInt(passwordLength); i++){
    let randomPass = Math.floor(Math.random()*variables.length)
    let passTwo = variables[randomPass]
    arrayTwo.push(passTwo)
    passwordTwo.textContent = arrayTwo.join("")
    
}

//third password for loop
for(let i = 0; i < parseInt(passwordLength); i++){
    let randomPass = Math.floor(Math.random()*variables.length)
    let passThree = variables[randomPass]
     arrayThree.push(passThree)
    passwordThree.textContent = arrayThree.join("")
}


//fourth password for loop
for(let i = 0; i < parseInt(passwordLength); i++){
    let randomPass = Math.floor(Math.random()*variables.length)
    let passFour = variables[randomPass]
    arrayFour.push(passFour)
    passwordFour.textContent = arrayFour.join("")
     
}

    } else if (parseInt(passwordLength) < 5 || parseInt(passwordLength) > 15){
    document.getElementById("error").style.display="block"
    
    }
    }


