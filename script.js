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
counterDisplayTwo.id = "h1counter2"

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
  console.log("🚀 ~ file: script.js:36 ~ createSelect ~ select:", select)

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
select.id = "selector"
console.log("🚀 ~ file: script.js:50 ~ select:", select)
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
  img.style.backgroundImage = "url('./imagen/personas-jugando-tenis-mesa_23-2148655541.avif')";

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
const section3 = document.createElement('div');
const section4 = document.createElement('div');

container.id = 'firtsDiv';
section2.id = 'secondDiv';
section3.id = 'sdDiv3';
section4.id = "divSeccion4"
document.body.appendChild(container);
document.body.appendChild(section3);
document.body.appendChild(section2);
document.body.appendChild(section4);

console.log("🚀 ~ file: script.js:126 ~ section4:", section4)

const div = document.getElementById('firtsDiv');
const div2 = document.getElementById('secondDiv');
const div3 = document.getElementById('sdDiv3');

const div4 = document.getElementById('divSeccion4');
const span = document.createElement("span")
span.id = "textSpan"
span.textContent = 'Max Point'

console.log("🚀 ~ file: script.js:124 ~ div3:", div3)
// document.body.appendChild(div3)
div.style.display = 'flex';
// div3.style.border = "solid red";
div.style.flexDirection = "column"
// div.style.border = '3px solid green'
div.style.height = '370px'
div.style.width = '370px'
div.style.margin = '0 auto'

div.style.borderRadius = '8px '
div2.style.backgroundColor = '#E43CE7 '

div3.appendChild(counterDisplayOne);
div3.appendChild(counterDisplayTwo);



// div.style.
// div2.style.border = '3px solid blue'
div2.style.borderRadius = '8px '
div2.style.height = '40px'
div2.style.width = '370px'
div2.style.margin = '0 auto'
div2.style.display = 'flex'
div2.style.justifyContent = 'space-between'
div2.style.gap = '10px'
div.style.backgroundImage = "url('./imagen/personas-jugando-tenis-mesa_23-2148655541.avif')";
div.style.backgroundPosition = 'center'
div.style.backgroundSize = "cover";


const selectorID = document.getElementById('selector');
selectorID.style.width = "50px"
selectorID.style.height = "30px"
div4.appendChild(selectorID)
// inputSelect.appendChild(selectorDiv)

const section5 = document.createElement("div");
section5.style.display = "flex"
section5.style.gap = "59px"
// section5.style.border = "solid blue"
section5.style.width = "90px"
section5.style.height = "80px"

console.log("🚀 ~ file: script.js:167 ~ section5:", section5)

div3.appendChild(section5);
const h1Counter2 = document.getElementById("h1counter2") 
console.log("🚀 ~ file: script.js:180 ~ h1Counter2:", h1Counter2)

const h1 = document.querySelector("h1")

section5.appendChild(h1)
section5.appendChild(h1Counter2)



const inputSelect = document.querySelector('.inputSelect');
// section5.setAttribute("class", "inputSelect")


// inputSelect.style.border = 'solid pink'
// inputSelect.style.height = '90px'
console.log("🚀 ~ file: script.js:168 ~ inputSelect:", inputSelect)//nul

div3.style.display = 'flex'
div3.style.flexDirection = "column"
div3.style.justifyContent = "center"
div3.style.alignItems = 'center'
div3.style.gap = "30px"
// div3.style.border = 'solid red '
div3.style.height = '150px '
div3.style.width = "370px"
div3.style.margin = "0 auto"
div3.style.borderRadius = '4px'

// div3.style.height = "500px"
// docum.appendChild(div3);
// div3.style.border = 'solid red'  

div.appendChild(form);
div2.appendChild(btnPlusOne);
div2.appendChild(btnPlusTwo);
div2.appendChild(btnReset);

// container.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
// div.style.justifyContent = 'space-around'

div3.appendChild(div4);

// div4.style.border = "solid black"
div4.style.display = "flex"
div4.style.gap = "20px"
div4.style.width = "150px"
div4.style.height = "80px"
div4.appendChild(span)
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
  btonColor
 console.log(btonColor);
 


 document.getElementById('buton').addEventListener('click', () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const h1colors = document.getElementsByClassName('Welcome');
  for (let i = 0; i < h1colors.length; i++) {
    h1colors[i].style.color = getRandomColor();
  }
});
































