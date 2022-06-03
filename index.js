const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const submitButton = document.getElementById("submit-note");
const score = document.getElementById("score");


let nota;

submitButton.addEventListener("click", () => {
    if(!nota) return;
    
    
    modal1.style.display = "none";
    modal2.style.display = "block";
    score.innerText = nota;
})

function setNota(value){
    const buttons = document.getElementsByClassName('buttons')
    nota = value;

    for(let i = 0; i < 5; i++) {
        buttons[i].classList.remove('selected-note');
    }

    buttons[value - 1].classList.add('selected-note');
}