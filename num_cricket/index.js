let runsEl=document.getElementById("runs-el")
let runs=0
let value=0
let compEl = document.getElementById("comp-el")
let resultEl=document.getElementById("result-el")
let matchEl = document.getElementById("match-time")
let isAlive = false
let playing=false

function start() {
    
    if (isAlive === false && playing===false){
        isAlive=true
        playing=true
        matchEl.textContent = "it's Game Time"
       
    }
}   
function rone() {
    if (isAlive ===  true) {
        getRandom()
        value=1
        if (value === rno) {
            resultEl.textContent = "OOPs! you are out of Game" 
            compEl.textContent = "Wohoo! I Got You"
            isAlive = false
        } else {
            runs+=1
            runsEl.textContent ="runs:"
            runsEl.textContent +=runs
            compEl.textContent = "computer's choice is:"
            compEl.textContent +=rno
        }
    } 
    else {
        resultEl.textContent = "First Start the Game!"
    }     
}
function rtwo() {
    if (isAlive === true) {
        getRandom()
        value=2
        if (value === rno) {
            resultEl.textContent = "OOPs! you are out of Game"
            compEl.textContent = "Wohoo! I Got You"
            isAlive = false 
        } else {
            runs+=2
            runsEl.textContent ="runs:"
            runsEl.textContent +=runs
            compEl.textContent = "computer's choice is:"
            compEl.textContent +=rno
            }     
    }
    else {
        resultEl.textContent = "First Start the Game!"
    }
}
    
function rthree() {
    if (isAlive===true) {
        getRandom()
        value=3
        if (value === rno) {
            resultEl.textContent = "OOPs! you are out of Game"
            compEl.textContent = "Wohoo! I Got You"
            isAlive = false
        } else {
            runs+=3
            runsEl.textContent ="runs:"
            runsEl.textContent +=runs
            compEl.textContent = "computer's choice is:"
            compEl.textContent +=rno

        }
        
    }
    else {
        resultEl.textContent = "First Start the Game!"
    }
}
    
function rfour() {
    if (isAlive===true) {
        getRandom()
        value=4
        if (value === rno) {
            resultEl.textContent = "OOPs! you are out of Game"
            compEl.textContent = "Wohoo! I Got You" 
            isAlive = false
        } else {
            runs+=4
            runsEl.textContent ="runs:"
            runsEl.textContent +=runs
            compEl.textContent = "computer's choice is:"
            compEl.textContent +=rno
        }
        
    }
    else {
        resultEl.textContent = "First Start the Game!"
    }
}
        
    
function rsix() {
    if (isAlive===true) {
        getRandom()
        value=6
        if (value === rno) {
        resultEl.textContent = "OOPs! you are out of Game"
        compEl.textContent = "Wohoo! I Got You"
        isAlive = false 
        } else {
            runs+=6
            runsEl.textContent ="runs:"
            runsEl.textContent +=runs
            compEl.textContent = "computer's choice is:"
            compEl.textContent +=rno

        }
    }
    else {
        resultEl.textContent = "First Start the Game!"
    }
}
    
let rno=0;
function getRandom() {
    rno=Math.floor(Math.random()*6) + 1
    if (rno === 5) {
        getRandom()
    }
    else {
        return rno
    }
}

function reset() {
    runs=0
    runsEl.textContent="runs:0"
    compEl.textContent = "Let's PLAY"
    resultEl.textContent=""
    matchEl.textContent = ""
    playing=false
}