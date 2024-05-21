const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form');
const pResult = document.querySelector('#result');
console.log({
    h1,
    p,
    parrafito,
    pid,
})

h1.innerHTML = 'Patito  <br> feo';
h1.innerText = 'patito <br> feo';
/*console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo'); */

h1.classList.add('rojo')
h1.classList.remove('verde')


const img = document.createElement('img');
img.setAttribute('src', 'https://gcdn.emol.cl/tv-internacional/files/2015/12/maxresdefault.jpg');
console.log(img);

pid.append(img);

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado " + sumaInputs;
} 

/*otra forma de volver el input numero
function btnOnClick() {
    const sumaInputs = +input1.value + +input2.value;
    pResult.innerText = "Resultado " + sumaInputs;

} 
*/
