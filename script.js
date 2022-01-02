let buttonButton = document.getElementById("button");
let smallBlindButton = document.getElementById("small-blind");
let bigBlindButton = document.getElementById("big-blind");
let utgButton = document.getElementById("utg");
let hijackButton = document.getElementById("hijack");
let cutOffButton = document.getElementById("cut-off");
let top15Button = document.getElementById("top-15");
let top20Button = document.getElementById("top-20");
let resetButton = document.getElementById("reset");




function reset() {
    let boxes = document.getElementsByClassName("grid-item"); // get all boxes
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = "lightgrey";
    }
    utgButton.style.background = "lightskyblue";
    buttonButton.style.background = "lightskyblue";
    smallBlindButton.style.background = "lightskyblue";
    bigBlindButton.style.background = "lightskyblue";
    hijackButton.style.background = "lightskyblue";
    cutOffButton.style.background = "lightskyblue";
    top15Button.style.background = "lightskyblue";
    top20Button.style.background = "lightskyblue";
}


function showUtg() {
    document.getElementById("AA").style.background = "yellow";
    document.getElementById("AKs").style.background = "yellow";
    document.getElementById("AQs").style.background = "yellow";
    document.getElementById("AJs").style.background = "yellow";
    document.getElementById("ATs").style.background = "yellow";
    document.getElementById("A9s").style.background = "yellow";
    document.getElementById("A8s").style.background = "yellow"; 
    document.getElementById("A7s").style.background = "yellow";
    document.getElementById("A6s").style.background = "yellow";
    document.getElementById("A5s").style.background = "yellow";
    document.getElementById("A4s").style.background = "yellow";
    document.getElementById("A3s").style.background = "yellow";
    document.getElementById("A2s").style.background = "yellow";
    document.getElementById("AKo").style.background = "yellow";
    document.getElementById("KK").style.background = "yellow";
    document.getElementById("KQs").style.background = "yellow";
    document.getElementById("KJs").style.background = "yellow";
    document.getElementById("KTs").style.background = "yellow";
    document.getElementById("AQo").style.background = "yellow"; 
    document.getElementById("KQo").style.background = "yellow";
    document.getElementById("QQ").style.background = "yellow";
    document.getElementById("QJs").style.background = "yellow";
    document.getElementById("QTs").style.background = "yellow";
    document.getElementById("AJo").style.background = "yellow";
    document.getElementById("JJ").style.background = "yellow";
    document.getElementById("JTs").style.background = "yellow";
    document.getElementById("TT").style.background = "yellow";
    document.getElementById("T9s").style.background = "yellow";
    document.getElementById("99").style.background = "yellow";
    document.getElementById("98s").style.background = "yellow";
    document.getElementById("88").style.background = "yellow";
    document.getElementById("77").style.background = "yellow"; 
    document.getElementById("66").style.background = "yellow";
    utgButton.style.background = "lightgreen";
    buttonButton.style.background = "lightskyblue";
    smallBlindButton.style.background = "lightskyblue";
    bigBlindButton.style.background = "lightskyblue";
    hijackButton.style.background = "lightskyblue";
    cutOffButton.style.background = "lightskyblue";
    top15Button.style.background = "lightskyblue";
    top20Button.style.background = "lightskyblue";
}

function showHijack() {
    document.getElementById("AA").style.background = "yellow";
    document.getElementById("AKs").style.background = "yellow";
    document.getElementById("AQs").style.background = "yellow";
    document.getElementById("AJs").style.background = "yellow";
    document.getElementById("ATs").style.background = "yellow";
    document.getElementById("A9s").style.background = "yellow";
    document.getElementById("A8s").style.background = "yellow"; 
    document.getElementById("A7s").style.background = "yellow";
    document.getElementById("A6s").style.background = "yellow";
    document.getElementById("A5s").style.background = "yellow";
    document.getElementById("A4s").style.background = "yellow";
    document.getElementById("A3s").style.background = "yellow";
    document.getElementById("A2s").style.background = "yellow";
    document.getElementById("AKo").style.background = "yellow";
    document.getElementById("KK").style.background = "yellow";
    document.getElementById("KQs").style.background = "yellow";
    document.getElementById("KJs").style.background = "yellow";
    document.getElementById("KTs").style.background = "yellow";
    document.getElementById("AQo").style.background = "yellow"; 
    document.getElementById("KQo").style.background = "yellow";
    document.getElementById("QQ").style.background = "yellow";
    document.getElementById("QJs").style.background = "yellow";
    document.getElementById("QTs").style.background = "yellow";
    document.getElementById("AJo").style.background = "yellow";
    document.getElementById("KJo").style.background = "yellow";
    document.getElementById("JJ").style.background = "yellow";
    document.getElementById("JTs").style.background = "yellow";
    document.getElementById("J9s").style.background = "yellow";
    document.getElementById("ATo").style.background = "yellow";
    document.getElementById("TT").style.background = "yellow";
    document.getElementById("T9s").style.background = "yellow";
    document.getElementById("99").style.background = "yellow";
    document.getElementById("98s").style.background = "yellow";
    document.getElementById("88").style.background = "yellow";
    document.getElementById("87s").style.background = "yellow";
    document.getElementById("77").style.background = "yellow";
    document.getElementById("76s").style.background = "yellow"; 
    document.getElementById("66").style.background = "yellow";
    document.getElementById("55").style.background = "yellow";
    document.getElementById("44").style.background = "yellow";
    document.getElementById("33").style.background = "yellow";
    document.getElementById("22").style.background = "yellow";
    utgButton.style.background = "lightskyblue";
    buttonButton.style.background = "lightskyblue";
    smallBlindButton.style.background = "lightskyblue";
    bigBlindButton.style.background = "lightskyblue";
    hijackButton.style.background = "lightgreen";
    cutOffButton.style.background = "lightskyblue";
    top15Button.style.background = "lightskyblue";
    top20Button.style.background = "lightskyblue";
}


function showCutOff() {
    document.getElementById("AA").style.background = "yellow";
    document.getElementById("AKs").style.background = "yellow";
    document.getElementById("AQs").style.background = "yellow";
    document.getElementById("AJs").style.background = "yellow";
    document.getElementById("ATs").style.background = "yellow";
    document.getElementById("A9s").style.background = "yellow";
    document.getElementById("A8s").style.background = "yellow"; 
    document.getElementById("A7s").style.background = "yellow";
    document.getElementById("A6s").style.background = "yellow";
    document.getElementById("A5s").style.background = "yellow";
    document.getElementById("A4s").style.background = "yellow";
    document.getElementById("A3s").style.background = "yellow";
    document.getElementById("A2s").style.background = "yellow";
    document.getElementById("AKo").style.background = "yellow";
    document.getElementById("KK").style.background = "yellow";
    document.getElementById("KQs").style.background = "yellow";
    document.getElementById("KJs").style.background = "yellow";
    document.getElementById("KTs").style.background = "yellow";
    document.getElementById("K9s").style.background = "yellow";
    document.getElementById("K8s").style.background = "yellow";
    document.getElementById("K7s").style.background = "yellow";
    document.getElementById("K6s").style.background = "yellow";
    document.getElementById("K5s").style.background = "yellow";
    document.getElementById("K4s").style.background = "yellow";
    document.getElementById("K3s").style.background = "yellow";
    document.getElementById("K2s").style.background = "yellow";
    document.getElementById("AQo").style.background = "yellow"; 
    document.getElementById("KQo").style.background = "yellow";
    document.getElementById("QQ").style.background = "yellow";
    document.getElementById("QJs").style.background = "yellow";
    document.getElementById("QTs").style.background = "yellow";
    document.getElementById("Q9s").style.background = "yellow";
    document.getElementById("Q8s").style.background = "yellow";
    document.getElementById("AJo").style.background = "yellow";
    document.getElementById("KJo").style.background = "yellow";
    document.getElementById("QJo").style.background = "yellow";
    document.getElementById("JJ").style.background = "yellow";
    document.getElementById("JTs").style.background = "yellow";
    document.getElementById("J9s").style.background = "yellow";
    document.getElementById("J8s").style.background = "yellow";
    document.getElementById("ATo").style.background = "yellow";
    document.getElementById("KTo").style.background = "yellow";
    document.getElementById("QTo").style.background = "yellow";
    document.getElementById("JTo").style.background = "yellow";
    document.getElementById("TT").style.background = "yellow";
    document.getElementById("T9s").style.background = "yellow";
    document.getElementById("T8s").style.background = "yellow";
    document.getElementById("A9o").style.background = "yellow";
    document.getElementById("K9o").style.background = "yellow";
    document.getElementById("Q9o").style.background = "yellow";
    document.getElementById("J9o").style.background = "yellow";
    document.getElementById("T9o").style.background = "yellow";
    document.getElementById("99").style.background = "yellow";
    document.getElementById("98s").style.background = "yellow";
    document.getElementById("97s").style.background = "yellow";
    document.getElementById("98o").style.background = "yellow";
    document.getElementById("88").style.background = "yellow";
    document.getElementById("87s").style.background = "yellow";
    document.getElementById("86s").style.background = "yellow";
    document.getElementById("77").style.background = "yellow";
    document.getElementById("76s").style.background = "yellow"; 
    document.getElementById("66").style.background = "yellow";
    document.getElementById("65s").style.background = "yellow";
    document.getElementById("55").style.background = "yellow";
    document.getElementById("54s").style.background = "yellow";
    document.getElementById("44").style.background = "yellow";
    document.getElementById("33").style.background = "yellow";
    document.getElementById("22").style.background = "yellow";
    utgButton.style.background = "lightskyblue";
    buttonButton.style.background = "lightskyblue";
    smallBlindButton.style.background = "lightskyblue";
    bigBlindButton.style.background = "lightskyblue";
    hijackButton.style.background = "lightskyblue";
    cutOffButton.style.background = "lightgreen";
    top15Button.style.background = "lightskyblue";
    top20Button.style.background = "lightskyblue";
}

function showButton() {
    document.getElementById("AA").style.background = "yellow";
    document.getElementById("AKs").style.background = "yellow";
    document.getElementById("AQs").style.background = "yellow";
    document.getElementById("AJs").style.background = "yellow";
    document.getElementById("ATs").style.background = "yellow";
    document.getElementById("A9s").style.background = "yellow";
    document.getElementById("A8s").style.background = "yellow"; 
    document.getElementById("A7s").style.background = "yellow";
    document.getElementById("A6s").style.background = "yellow";
    document.getElementById("A5s").style.background = "yellow";
    document.getElementById("A4s").style.background = "yellow";
    document.getElementById("A3s").style.background = "yellow";
    document.getElementById("A2s").style.background = "yellow";
    document.getElementById("AKo").style.background = "yellow";
    document.getElementById("KK").style.background = "yellow";
    document.getElementById("KQs").style.background = "yellow";
    document.getElementById("KJs").style.background = "yellow";
    document.getElementById("KTs").style.background = "yellow";
    document.getElementById("K9s").style.background = "yellow";
    document.getElementById("K8s").style.background = "yellow";
    document.getElementById("K7s").style.background = "yellow";
    document.getElementById("K6s").style.background = "yellow";
    document.getElementById("K5s").style.background = "yellow";
    document.getElementById("K4s").style.background = "yellow";
    document.getElementById("K3s").style.background = "yellow";
    document.getElementById("K2s").style.background = "yellow";
    document.getElementById("AQo").style.background = "yellow"; 
    document.getElementById("KQo").style.background = "yellow";
    document.getElementById("QQ").style.background = "yellow";
    document.getElementById("QJs").style.background = "yellow";
    document.getElementById("QTs").style.background = "yellow";
    document.getElementById("Q9s").style.background = "yellow";
    document.getElementById("Q8s").style.background = "yellow";
    document.getElementById("Q7s").style.background = "yellow";
    document.getElementById("Q6s").style.background = "yellow";
    document.getElementById("Q5s").style.background = "yellow";
    document.getElementById("AJo").style.background = "yellow";
    document.getElementById("KJo").style.background = "yellow";
    document.getElementById("QJo").style.background = "yellow";
    document.getElementById("JJ").style.background = "yellow";
    document.getElementById("JTs").style.background = "yellow";
    document.getElementById("J9s").style.background = "yellow";
    document.getElementById("J8s").style.background = "yellow";
    document.getElementById("J7s").style.background = "yellow";
    document.getElementById("ATo").style.background = "yellow";
    document.getElementById("KTo").style.background = "yellow";
    document.getElementById("QTo").style.background = "yellow";
    document.getElementById("JTo").style.background = "yellow";
    document.getElementById("TT").style.background = "yellow";
    document.getElementById("T9s").style.background = "yellow";
    document.getElementById("T8s").style.background = "yellow";
    document.getElementById("T7s").style.background = "yellow";
    document.getElementById("A9o").style.background = "yellow";
    document.getElementById("K9o").style.background = "yellow";
    document.getElementById("Q9o").style.background = "yellow";
    document.getElementById("J9o").style.background = "yellow";
    document.getElementById("T9o").style.background = "yellow";
    document.getElementById("99").style.background = "yellow";
    document.getElementById("98s").style.background = "yellow";
    document.getElementById("97s").style.background = "yellow";
    document.getElementById("96s").style.background = "yellow";
    document.getElementById("A8o").style.background = "yellow";
    document.getElementById("K8o").style.background = "yellow";
    document.getElementById("Q8o").style.background = "yellow";
    document.getElementById("J8o").style.background = "yellow";
    document.getElementById("T8o").style.background = "yellow";
    document.getElementById("98o").style.background = "yellow";
    document.getElementById("88").style.background = "yellow";
    document.getElementById("87s").style.background = "yellow";
    document.getElementById("86s").style.background = "yellow";
    document.getElementById("A7o").style.background = "yellow";
    document.getElementById("87o").style.background = "yellow";
    document.getElementById("77").style.background = "yellow";
    document.getElementById("76s").style.background = "yellow"; 
    document.getElementById("75s").style.background = "yellow"; 
    document.getElementById("A6o").style.background = "yellow";
    document.getElementById("76o").style.background = "yellow";
    document.getElementById("66").style.background = "yellow";
    document.getElementById("65s").style.background = "yellow";
    document.getElementById("64s").style.background = "yellow";
    document.getElementById("A5o").style.background = "yellow";
    document.getElementById("55").style.background = "yellow";
    document.getElementById("54s").style.background = "yellow";
    document.getElementById("53s").style.background = "yellow";
    document.getElementById("A4o").style.background = "yellow";
    document.getElementById("44").style.background = "yellow";
    document.getElementById("43s").style.background = "yellow";
    document.getElementById("A3o").style.background = "yellow";    
    document.getElementById("33").style.background = "yellow";
    document.getElementById("A2o").style.background = "yellow";      
    document.getElementById("22").style.background = "yellow";
    utgButton.style.background = "lightskyblue";
    buttonButton.style.background = "lightgreen";
    smallBlindButton.style.background = "lightskyblue";
    bigBlindButton.style.background = "lightskyblue";
    hijackButton.style.background = "lightskyblue";
    cutOffButton.style.background = "lightskyblue";
    top15Button.style.background = "lightskyblue";
    top20Button.style.background = "lightskyblue";
}

function showSmallBlind() {
    document.getElementById("AA").style.background = "yellow";
    document.getElementById("AKs").style.background = "yellow";
    document.getElementById("AQs").style.background = "yellow";
    document.getElementById("AJs").style.background = "yellow";
    document.getElementById("ATs").style.background = "yellow";
    document.getElementById("A9s").style.background = "yellow";
    document.getElementById("A8s").style.background = "yellow"; 
    document.getElementById("A7s").style.background = "yellow";
    document.getElementById("A6s").style.background = "yellow";
    document.getElementById("A5s").style.background = "yellow";
    document.getElementById("A4s").style.background = "yellow";
    document.getElementById("A3s").style.background = "yellow";
    document.getElementById("A2s").style.background = "yellow";
    document.getElementById("AKo").style.background = "yellow";
    document.getElementById("KK").style.background = "yellow";
    document.getElementById("KQs").style.background = "yellow";
    document.getElementById("KJs").style.background = "yellow";
    document.getElementById("KTs").style.background = "yellow";
    document.getElementById("K9s").style.background = "yellow";
    document.getElementById("K8s").style.background = "yellow";
    document.getElementById("K7s").style.background = "yellow";
    document.getElementById("K6s").style.background = "yellow";
    document.getElementById("K5s").style.background = "yellow";
    document.getElementById("K4s").style.background = "yellow";
    document.getElementById("K3s").style.background = "yellow";
    document.getElementById("K2s").style.background = "yellow";
    document.getElementById("AQo").style.background = "yellow"; 
    document.getElementById("KQo").style.background = "yellow";
    document.getElementById("QQ").style.background = "yellow";
    document.getElementById("QJs").style.background = "yellow";
    document.getElementById("QTs").style.background = "yellow";
    document.getElementById("Q9s").style.background = "yellow";
    document.getElementById("Q8s").style.background = "yellow";
    document.getElementById("Q7s").style.background = "yellow";
    document.getElementById("AJo").style.background = "yellow";
    document.getElementById("KJo").style.background = "yellow";
    document.getElementById("QJo").style.background = "yellow";
    document.getElementById("JJ").style.background = "yellow";
    document.getElementById("JTs").style.background = "yellow";
    document.getElementById("J9s").style.background = "yellow";
    document.getElementById("J8s").style.background = "yellow";
    document.getElementById("J7s").style.background = "yellow";
    document.getElementById("ATo").style.background = "yellow";
    document.getElementById("KTo").style.background = "yellow";
    document.getElementById("QTo").style.background = "yellow";
    document.getElementById("JTo").style.background = "yellow";
    document.getElementById("TT").style.background = "yellow";
    document.getElementById("T9s").style.background = "yellow";
    document.getElementById("T8s").style.background = "yellow";
    document.getElementById("T7s").style.background = "yellow";
    document.getElementById("A9o").style.background = "yellow";
    document.getElementById("K9o").style.background = "yellow";
    document.getElementById("Q9o").style.background = "yellow";
    document.getElementById("J9o").style.background = "yellow";
    document.getElementById("T9o").style.background = "yellow";
    document.getElementById("99").style.background = "yellow";
    document.getElementById("98s").style.background = "yellow";
    document.getElementById("97s").style.background = "yellow";
    document.getElementById("A8o").style.background = "yellow";
    document.getElementById("98o").style.background = "yellow";
    document.getElementById("88").style.background = "yellow";
    document.getElementById("87s").style.background = "yellow";
    document.getElementById("A7o").style.background = "yellow";
    document.getElementById("77").style.background = "yellow";
    document.getElementById("76s").style.background = "yellow"; 
    document.getElementById("A6o").style.background = "yellow";
    document.getElementById("66").style.background = "yellow";
    document.getElementById("65s").style.background = "yellow";
    document.getElementById("A5o").style.background = "yellow";
    document.getElementById("55").style.background = "yellow";
    document.getElementById("54s").style.background = "yellow";
    document.getElementById("A4o").style.background = "yellow";
    document.getElementById("44").style.background = "yellow";
    document.getElementById("A3o").style.background = "yellow";    
    document.getElementById("33").style.background = "yellow";
    document.getElementById("A2o").style.background = "yellow";      
    document.getElementById("22").style.background = "yellow";
    utgButton.style.background = "lightskyblue";
    buttonButton.style.background = "lightskyblue";
    smallBlindButton.style.background = "lightgreen";
    bigBlindButton.style.background = "lightskyblue";
    hijackButton.style.background = "lightskyblue";
    cutOffButton.style.background = "lightskyblue";
    top15Button.style.background = "lightskyblue";
    top20Button.style.background = "lightskyblue";
}

function showBigBlind() {
    document.getElementById("AA").style.background = "yellow";
    document.getElementById("AKs").style.background = "yellow";
    document.getElementById("AQs").style.background = "yellow";
    document.getElementById("AJs").style.background = "yellow";
    document.getElementById("ATs").style.background = "yellow";
    document.getElementById("A9s").style.background = "yellow";
    document.getElementById("A8s").style.background = "yellow"; 
    document.getElementById("A7s").style.background = "yellow";
    document.getElementById("A6s").style.background = "yellow";
    document.getElementById("A5s").style.background = "yellow";
    document.getElementById("A4s").style.background = "yellow";
    document.getElementById("A3s").style.background = "yellow";
    document.getElementById("A2s").style.background = "yellow";
    document.getElementById("AKo").style.background = "yellow";
    document.getElementById("KK").style.background = "yellow";
    document.getElementById("KQs").style.background = "yellow";
    document.getElementById("KJs").style.background = "yellow";
    document.getElementById("KTs").style.background = "yellow";
    document.getElementById("K9s").style.background = "yellow";
    document.getElementById("K8s").style.background = "yellow";
    document.getElementById("K7s").style.background = "yellow";
    document.getElementById("K6s").style.background = "yellow";
    document.getElementById("K5s").style.background = "yellow";
    document.getElementById("K4s").style.background = "yellow";
    document.getElementById("K3s").style.background = "yellow";
    document.getElementById("K2s").style.background = "yellow";
    document.getElementById("AQo").style.background = "yellow"; 
    document.getElementById("KQo").style.background = "yellow";
    document.getElementById("QQ").style.background = "yellow";
    document.getElementById("QJs").style.background = "yellow";
    document.getElementById("QTs").style.background = "yellow";
    document.getElementById("Q9s").style.background = "yellow";
    document.getElementById("Q8s").style.background = "yellow";
    document.getElementById("Q7s").style.background = "yellow";
    document.getElementById("AJo").style.background = "yellow";
    document.getElementById("KJo").style.background = "yellow";
    document.getElementById("QJo").style.background = "yellow";
    document.getElementById("JJ").style.background = "yellow";
    document.getElementById("JTs").style.background = "yellow";
    document.getElementById("J9s").style.background = "yellow";
    document.getElementById("J8s").style.background = "yellow";
    document.getElementById("J7s").style.background = "yellow";
    document.getElementById("ATo").style.background = "yellow";
    document.getElementById("KTo").style.background = "yellow";
    document.getElementById("QTo").style.background = "yellow";
    document.getElementById("JTo").style.background = "yellow";
    document.getElementById("TT").style.background = "yellow";
    document.getElementById("T9s").style.background = "yellow";
    document.getElementById("T8s").style.background = "yellow";
    document.getElementById("T7s").style.background = "yellow";
    document.getElementById("A9o").style.background = "yellow";
    document.getElementById("K9o").style.background = "yellow";
    document.getElementById("Q9o").style.background = "yellow";
    document.getElementById("J9o").style.background = "yellow";
    document.getElementById("T9o").style.background = "yellow";
    document.getElementById("99").style.background = "yellow";
    document.getElementById("98s").style.background = "yellow";
    document.getElementById("97s").style.background = "yellow";
    document.getElementById("A8o").style.background = "yellow";
    document.getElementById("98o").style.background = "yellow";
    document.getElementById("88").style.background = "yellow";
    document.getElementById("87s").style.background = "yellow";
    document.getElementById("A7o").style.background = "yellow";
    document.getElementById("77").style.background = "yellow";
    document.getElementById("76s").style.background = "yellow"; 
    document.getElementById("A6o").style.background = "yellow";
    document.getElementById("66").style.background = "yellow";
    document.getElementById("65s").style.background = "yellow";
    document.getElementById("A5o").style.background = "yellow";
    document.getElementById("55").style.background = "yellow";
    document.getElementById("54s").style.background = "yellow";
    document.getElementById("A4o").style.background = "yellow";
    document.getElementById("44").style.background = "yellow";
    document.getElementById("A3o").style.background = "yellow";    
    document.getElementById("33").style.background = "yellow";
    document.getElementById("A2o").style.background = "yellow";      
    document.getElementById("22").style.background = "yellow";
    utgButton.style.background = "lightskyblue";
    buttonButton.style.background = "lightskyblue";
    smallBlindButton.style.background = "lightskyblue";
    bigBlindButton.style.background = "lightgreen";
    hijackButton.style.background = "lightskyblue";
    cutOffButton.style.background = "lightskyblue";
    top15Button.style.background = "lightskyblue";
    top20Button.style.background = "lightskyblue";
}

function showTop15() {
    document.getElementById("AA").style.background = "yellow";
    document.getElementById("AKs").style.background = "yellow";
    document.getElementById("AQs").style.background = "yellow";
    document.getElementById("AJs").style.background = "yellow";
    document.getElementById("ATs").style.background = "yellow";
    document.getElementById("A9s").style.background = "yellow";
    document.getElementById("A8s").style.background = "yellow"; 
    document.getElementById("A7s").style.background = "yellow";
    document.getElementById("A6s").style.background = "yellow";
    document.getElementById("A5s").style.background = "yellow";
    document.getElementById("AKo").style.background = "yellow";
    document.getElementById("KK").style.background = "yellow";
    document.getElementById("KQs").style.background = "yellow";
    document.getElementById("KJs").style.background = "yellow";
    document.getElementById("KTs").style.background = "yellow";
    document.getElementById("AQo").style.background = "yellow"; 
    document.getElementById("KQo").style.background = "yellow";
    document.getElementById("QQ").style.background = "yellow";
    document.getElementById("QJs").style.background = "yellow";
    document.getElementById("AJo").style.background = "yellow";
    document.getElementById("KJo").style.background = "yellow";
    document.getElementById("QJo").style.background = "yellow";
    document.getElementById("JJ").style.background = "yellow";
    document.getElementById("TT").style.background = "yellow";
    document.getElementById("99").style.background = "yellow";
    document.getElementById("88").style.background = "yellow";
    document.getElementById("77").style.background = "yellow";
    document.getElementById("66").style.background = "yellow";
    document.getElementById("55").style.background = "yellow";
    document.getElementById("44").style.background = "yellow";  
    document.getElementById("33").style.background = "yellow";   
    document.getElementById("22").style.background = "yellow";
    utgButton.style.background = "lightskyblue";
    buttonButton.style.background = "lightskyblue";
    smallBlindButton.style.background = "lightskyblue";
    bigBlindButton.style.background = "lightskyblue";
    hijackButton.style.background = "lightskyblue";
    cutOffButton.style.background = "lightskyblue";
    top15Button.style.background = "lightgreen";
    top20Button.style.background = "lightskyblue";
}

function showTop20() {
    document.getElementById("AA").style.background = "yellow";
    document.getElementById("AKs").style.background = "yellow";
    document.getElementById("AQs").style.background = "yellow";
    document.getElementById("AJs").style.background = "yellow";
    document.getElementById("ATs").style.background = "yellow";
    document.getElementById("A9s").style.background = "yellow";
    document.getElementById("A8s").style.background = "yellow"; 
    document.getElementById("A7s").style.background = "yellow";
    document.getElementById("A6s").style.background = "yellow";
    document.getElementById("A5s").style.background = "yellow";
    document.getElementById("A4s").style.background = "yellow";
    document.getElementById("A3s").style.background = "yellow";
    document.getElementById("A2s").style.background = "yellow";
    document.getElementById("AKo").style.background = "yellow";
    document.getElementById("KK").style.background = "yellow";
    document.getElementById("KQs").style.background = "yellow";
    document.getElementById("KJs").style.background = "yellow";
    document.getElementById("KTs").style.background = "yellow";
    document.getElementById("K9s").style.background = "yellow";
    document.getElementById("AQo").style.background = "yellow"; 
    document.getElementById("KQo").style.background = "yellow";
    document.getElementById("QQ").style.background = "yellow";
    document.getElementById("QJs").style.background = "yellow";
    document.getElementById("QTs").style.background = "yellow";
    document.getElementById("Q9s").style.background = "yellow";
    document.getElementById("AJo").style.background = "yellow";
    document.getElementById("KJo").style.background = "yellow";
    document.getElementById("QJo").style.background = "yellow";
    document.getElementById("JJ").style.background = "yellow";
    document.getElementById("JTs").style.background = "yellow";
    document.getElementById("ATo").style.background = "yellow";
    document.getElementById("KTo").style.background = "yellow";
    document.getElementById("TT").style.background = "yellow";
    document.getElementById("A9o").style.background = "yellow";
    document.getElementById("99").style.background = "yellow";
    document.getElementById("88").style.background = "yellow";
    document.getElementById("77").style.background = "yellow";
    document.getElementById("66").style.background = "yellow";
    document.getElementById("55").style.background = "yellow";
    document.getElementById("44").style.background = "yellow";
    document.getElementById("33").style.background = "yellow";
    document.getElementById("22").style.background = "yellow";
    utgButton.style.background = "lightskyblue";
    buttonButton.style.background = "lightskyblue";
    smallBlindButton.style.background = "lightskyblue";
    bigBlindButton.style.background = "lightskyblue";
    hijackButton.style.background = "lightskyblue";
    cutOffButton.style.background = "lightskyblue";
    top15Button.style.background = "lightskyblue";
    top20Button.style.background = "lightgreen";
}


//funcntions for each button
function utgButtonPress() {
    reset();
    showUtg();

}

function hijackButtonPress() {
    reset();
    showHijack();

}

function cutOffButtonPress() {
    reset();
    showCutOff();

}

function buttonButtonPress() {
    reset();
    showButton();

}

function smallBlindButtonPress() {
    reset();
    showSmallBlind();

}

function bigBlindButtonPress() {
    reset();
    showBigBlind();

}

function top15ButtonPress() {
    reset();
    showTop15();

}

function top20ButtonPress() {
    reset();
    showTop20();

}



//Event Listeners for the buttons
resetButton.addEventListener("click", reset);
utgButton.addEventListener("click", utgButtonPress);
hijackButton.addEventListener("click", hijackButtonPress);
cutOffButton.addEventListener("click", cutOffButtonPress);
buttonButton.addEventListener("click", buttonButtonPress);
smallBlindButton.addEventListener("click", smallBlindButtonPress);
bigBlindButton.addEventListener("click", bigBlindButtonPress);
top15Button.addEventListener("click", top15ButtonPress);
top20Button.addEventListener("click", top20ButtonPress);
