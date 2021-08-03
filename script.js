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
    let lowerValue = 0;
    let upperValue = 10;
    let randomValue = Math.floor(1000 + Math.random() * 9000);
    const inputGen = document.getElementById("input_generate_pin");
    inputGen.value = randomValue;
})

const allButtons = document.getElementsByClassName("number");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
        let screenValue = getInputScreen();
        screenValue += this.id;
        console.log(screenValue);
        printScreen(screenValue);

    })
}