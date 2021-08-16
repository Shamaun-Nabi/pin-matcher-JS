function getInputGen() {
    return document.getElementById("input_generate_pin").value;
}

function getInputScreen() {
    return document.getElementById("screen").value;
}

function printScreen(num) {
    return document.getElementById("screen").value = num;
}

// Generating a Random value
const genBtn = document.getElementById("gen_btn");
genBtn.addEventListener("click", function () {
    let randomValue = Math.floor(1000 + Math.random() * 10000);
    const inputGen = document.getElementById("input_generate_pin");
    inputGen.value = randomValue;
})

const allButtons = document.getElementsByClassName("number");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
        let screenValue = getInputScreen();
        screenValue += this.id;
        printScreen(screenValue);

    })
}
const allOperator = document.getElementsByClassName("operator");
for (let i = 0; i < allOperator.length; i++) {
    allOperator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printScreen(" ");
        } else if (this.id == "backspace") {
            let takeValue = getInputScreen();
            takeValue = takeValue.substr(0, takeValue.length - 1);
            printScreen(takeValue);

        }
    })
}


function tryLeft(id) {
    let tryLeft = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML-=1;
    if (tryLeft=="1"){
        let checkButton = document.getElementById("submit");
        checkButton.style.cursor="not-allowed";
        checkButton.setAttribute('disabled','true');
        checkButton.title="Refresh Your Page and Try Again"
    }

}

// Button check
let checkButton = document.getElementById("submit");
checkButton.addEventListener("click", function () {
    let generatorInput = getInputGen();
    let checkInput = getInputScreen();

    if (generatorInput == checkInput) {
        let match = document.getElementById("match");
        let failed = document.getElementById("failed");
        match.style.display = "block";
        failed.style.display = "none";

    } else {
        let failed = document.getElementById("failed");
        let match = document.getElementById("match");
        failed.style.display = "block";
        match.style.display = "none";
        checkInput = " ";
        tryLeft("try-count");
    }

})