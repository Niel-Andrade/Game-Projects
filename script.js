let selectedOption = null;
let numberRandom, numberChosen = null;
let img = document.querySelector("#questionMark")

function selectOption(optionNumber) {
    if (selectedOption !== null) {
        // Remove a classe 'selected' da div selecionada anteriormente
        selectedOption.classList.remove('selected');
    }

    // Seleciona a nova div
    selectedOption = document.getElementById('option' + optionNumber);
    selectedOption.classList.add('selected');

    // Habilita o botão quando uma div é selecionada
    document.getElementById('confirm-button').disabled = false;
}
// 0 = PEDRA
// 1 = PAPEL
// 2 = TESOURA
function buttonClicked() {
    if (selectedOption === null) {
        alert("Escolha uma opção antes de confirmar.");
        return; // Evita continuar se nenhuma opção foi escolhida
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
}

function showAnimation(animationId) {
    const animation = document.getElementById(animationId);
    
    // Defina a opacidade como 1 apenas quando necessário
    animation.style.opacity = 0.5;

    // Limpar a animação após alguns segundos (opcional)
    setTimeout(() => {
        animation.style.opacity = 0;
    }, 1000); // Defina o tempo em milissegundos (3 segundos neste exemplo)
}
