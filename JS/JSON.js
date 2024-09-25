a = {"name": 'any', 'age': 2};
b = JSON.stringify(a);
c = JSON.parse(a);


function cubeColor() { 
    let colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'violet'];
    

    setInterval(function go() {
        for(let el of colors) {
            let div = document.getElementById('cube');
            div.style.backgroundColor = el;
        }
        
    }, 1000);
}

cubeColor();

const addData = document.querySelector('#link');
const findUl = document.querySelector('#ulId')

addData.addEventListener('click', () => {
    const newLink = document.createElement('li');
    findUl.append(newLink);
    newLink.innerHTML = '<a href="#">Новая ссылка</a>';

})

const addData2 = document.querySelector('#date');
const findUl2 = document.querySelector('#dates');

addData2.addEventListener('click', () => {
    const newLink2 = document.createElement('p');
    findUl2.append(newLink2);
    const now = new Date();
    
    newLink2.innerHTML = `<span>${now}</span><a href="#">Читать&#8230;</a>`;

})
