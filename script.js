let selectedOption = null;
let numberRandom, numberChosen = null;
let img = document.querySelector("#questionMark")
let selectedOptionName = null;

function selectOptionName(optionNumber){
    if (selectedOptionName !== null) {
        selectedOptionName.classList.remove('selectedName');
    }

    selectedOptionName = document.getElementById('nameOption' + optionNumber);
    selectedOptionName.classList.add('selectedName');
}

function selectOption(optionNumber) {
    if (selectedOption !== null) {
 
        selectedOption.classList.remove('selected');
    }

    selectedOption = document.getElementById('option' + optionNumber);
    selectedOption.classList.add('selected');

    document.getElementById('confirm-button').disabled = false;
}
//ORIENTAÇÃO:
// 0 = PEDRA
// 1 = PAPEL
// 2 = TESOURA
function buttonClicked() {
    if (selectedOption === null) {
        alert("Escolha uma opção antes de confirmar.");
        return; 
    }

    numberRandom = Math.floor(Math.random() * 3);
    switch (numberRandom) {
        case 0:
            img.setAttribute('src', 'assets/stone.jpeg')
            break;
        case 1:
            img.setAttribute('src', 'assets/paper.jpeg')
            break;
        case 2:
            img.setAttribute('src', 'assets/scissors.jpeg')
        default:
            break;
    }

    if (selectedOption.id === "option0") {
        numberChosen = 0;
    }
    if (selectedOption.id === "option1") {
        numberChosen = 1;
    }
    if (selectedOption.id === "option2") {
        numberChosen = 2;
    }
    console.log(numberChosen);
    console.log(numberRandom);
    
    setTimeout(() => {
        if ((numberChosen === 0 && numberRandom === 2) || (numberChosen === 2 && numberRandom === 1) || (numberChosen === 1 && numberRandom === 0)) {
            console.log("Você Ganhou");
            showAnimation("win-animation");
        } else if ((numberChosen === 0 && numberRandom === 1) || (numberChosen === 1 && numberRandom === 2) || (numberChosen === 2 && numberRandom === 0)) {
            console.log("Você Perdeu");
            showAnimation("lose-animation");
        } else {
            console.log("Empate");
            showAnimation("draw-animation");
        }
    }, 1000);
}

function showAnimation(animationId) {
    const animation = document.getElementById(animationId);
    const vs = document.getElementById('vs');
   

    animation.style.display = "flex";
    vs.style.opacity = 0

    setTimeout(() => {
        animation.style.display = "none"
        vs.style.opacity = 1
    }, 2000);
}
