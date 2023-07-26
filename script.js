// function sayHello(){
//     console.log(`hola soy un texto`);
// }

const body = document.querySelector("body");
const form = document.createElement("form");

const btnPlusOne = document.createElement("button");
btnPlusOne.id = 'playerOne'
const btnPlusTwo = document.createElement("button");
btnPlusTwo.id = 'playerTwo';
const btnReset = document.createElement("button");
const counterDisplayOne = document.createElement("h1");
const counterDisplayTwo = document.createElement("h1");

body.appendChild(counterDisplayOne);
body.appendChild(counterDisplayTwo);
body.appendChild(form);
body.appendChild(btnPlusOne);
body.appendChild(btnPlusTwo);
body.appendChild(btnReset);

counterDisplayOne.innerText = 0;
counterDisplayTwo.innerText = 0;

let options = [
  { value: 3, text: "3" },
  { value: 5, text: "5" },
  { value: 7, text: "7" },
  { value: 10, text: "10" },
  { value: 15, text: "15" },
];

function createSelect(optionsList) {
  let select = document.createElement("select");

  for (let i = 0; i < optionsList.length; i++) {
    const element = optionsList[i];
    let option = document.createElement("option");
    option.setAttribute("value", element.value);
    option.innerText = element.text;
    select.appendChild(option);
  }

  return select;
}

const select = createSelect(options);
form.appendChild(select);

let counterOne = 0;
let counterTwo = 0;


btnPlusOne.addEventListener("click", () => {
  if (counterOne < selectValue) {
    counterOne++;
    counterDisplayOne.innerText = counterOne;

  }
});
// --------change color---------------------------------------

const jugadorOne = document.getElementById("playerOne");
const jugadorDos = document.getElementById("playerTwo");
console.log(jugadorOne,jugadorDos);

jugadorOne.addEventListener('click',()=>{
  const blue = document.getElementById('firtsDiv')
  blue.style.backgroundColor = '#60E73C'
  blue.style.backgroundImage = 'none'

})  


btnPlusTwo.addEventListener("click", () => {
  if (counterTwo < selectValue) {
    counterTwo++;
    counterDisplayTwo.innerText = counterTwo;
    const color = document.querySelector('#firtsDiv')
    color.style.backgroundColor = 'yellow'
    color.style.backgroundImage = 'none'

  }
});

btnReset.addEventListener("click", () => {
  counterDisplayOne.innerText = 0;
  counterDisplayTwo.innerText = 0;
  counterOne = 0;
  counterTwo = 0;

  const img = document.getElementById('firtsDiv')
  img.style.accentColor = 'none'
  img.style.backgroundImage = "url('./imagen/sharkFavorite.jpg')";

});

let selectValue = 3;
select.addEventListener("change", () => {
  selectValue = document.querySelector("select").value;
});
// ---------------------------------------------------------
// ---Aplicando stilos css al documento html solo con js------------------------------------------------------
/*---------------------------------------------------------------------------------
*El contenedor de los botones---------->
*
*/
const container = document.createElement('div');
const section2 = document.createElement('div');

section2.id = 'secondDiv';
container.id = 'firtsDiv';
document.body.appendChild(container);
document.body.appendChild(section2);

const div = document.getElementById('firtsDiv');
const div2 = document.getElementById('secondDiv');
div.style.display = 'flex';
div.style.border = '3px solid green'
div.style.borderRadius = '8px '
div.style.height = '370px'
div2.style.backgroundColor = '#E43CE7 '

div.appendChild(counterDisplayOne);
div.appendChild(counterDisplayTwo);


// div.style.
div2.style.border = '3px solid blue'
div2.style.borderRadius = '8px '
div2.style.height = '40px'
div2.style.display = 'flex'
div2.style.justifyContent = 'space-around'
div2.style.gap = '10px'
div.style.backgroundImage = "url('./imagen/sharkFavorite.jpg')";
div.style.backgroundPosition = 'center'
// div.style.backgroundSize = "cover";



// div2.appendChild()
div.appendChild(form);
div2.appendChild(btnPlusOne);
div2.appendChild(btnPlusTwo);
div2.appendChild(btnReset);

// container.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.justifyContent = 'space-around'

/*
*
*/
// ------Boton 1--------*****---------------------
 btnPlusOne.textContent = "Player One";
 btnPlusOne.style.borderRadius = "4px"

 btnPlusOne.style.backgroundColor = 'darksky'
// ------------------------------------------------
// --------------------Boton dos----------- 
// ------------------------------------------------
 btnPlusTwo.textContent = "Player Two";
 btnPlusTwo.style.borderRadius = "4px"
 btnPlusTwo.style.backgroundColor = 'pink'
  
 
 btnReset.textContent = 'End Game'
 btnReset.style.borderRadius = "4px"
 btnReset.style.backgroundColor ='red'



 const btonColor = document.getElementById('buton');
 console.log(btonColor);
 
 btonColor.addEventListener('click', () => {
     const colorRandom = Math.floor(Math.random() *250);
     const h1colors = document.getElementsByClassName('Welcome');
 
     // getElementsByClassName devuelve una colección HTML, por lo que debes iterar sobre ella para cambiar el color de cada elemento
     for (let i = 0; i < h1colors.length; i++) {
         h1colors[i].style.color = `rgb(${colorRandom}, ${colorRandom}, ${colorRandom})`;
     }

 });

































