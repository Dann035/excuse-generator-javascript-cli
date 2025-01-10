
const buttonGenerar = document.querySelector('.buttonGenerar');
const title = document.querySelector('.title');
const indication = document.querySelector('.indication');

window.onload = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = randomColor;
    indication.style.color = randomColor;
    buttonGenerar.style.backgroundColor = randomColor;
}

buttonGenerar.addEventListener('click' , function (){
    const textExcuse = document.querySelector('.textExcuse');
    const artic = ['El','Mi'];
    const who = ['Tia','Gato','Primo','Perro','Abuela','Vecino'];
    const action = ['arruinó','rompio','perdio','robo','tiro'];
    const than = ['el portatil','el movil','las llaves','el coche','mi tarea','el trabajo'];

    const numArtic = Math.floor(Math.random() * artic.length);
    const numWho = Math.floor(Math.random() * who.length);
    const numAction = Math.floor(Math.random() * action.length);
    const numThan = Math.floor(Math.random() * than.length);

    // Comprobar coherencia 

    if(numArtic == '0'){
        if(numWho == '0' || numWho == '2' || numWho == '4' ){
            numArtic = 1;
        }
    }

    textExcuse.innerText = ` ${artic[numArtic]} ${who[numWho]} ${action[numAction]} ${than[numThan]}`;
})