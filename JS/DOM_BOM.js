console.dir(document);

document.body // элемент
document.body.parentElement // родительский элемент над body
document.body.previousElementSibling // сосед перед body
document.body.nextElementSibling // сосед после body

const bodyChildren = document.body.children; // дочерние элементы - не массив
Array.from(bodyChildren).forEach((el) => { // превращение в массив
    console.log('дочерний эл:', el)
})

const divEl = document.body.children[0];
divEl.firstElementChild // первый дочерний эл
divEl.lastElementChild // последний дочерний эл

const buttonElem = document.getElementById('myButton');

 // --------------Универсальный способ для первого эл--------------

const buttTag = document.querySelector('button'); // обращение по имени тега
const buttId = document.querySelector('#nameId'); // обращение по ID
const buttClass = document.querySelector('.nameClass'); // обращение по классу

 // --------------Универсальный способ нескольких эл--------------

const lstElems = document.querySelectorAll('.nameParentClass, .nameClassElem');

lstElems.forEach((el) => {
    console.log(el);
})

