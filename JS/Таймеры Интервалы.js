const doSomeThing = function() {
    alert('Hello');
}

setTimeout(doSomeThing, 2000);
// --------------------------------------
setTimeout(() => {
    alert('Выполнюсь через 2 сек');
}, 2000);

// ------------------------------------

const message = function(name, age) {
    alert(`Меня зовут ${name} и мне ${age} лет`);
}
const getId = setTimeout(message, 3000, 'Вася', 35);

clearTimeout(getId); // отмена таймера

// ---------------------------------------

setInterval(() => {
    alert('раз в сек');
}, 1000) // ждать не будет не учитывает вызовы 

// --------------------------------------

setTimeout(function fun() {
    alert('раз в сек');

    setTimeout(fun, 1000);
}, 1000) // будет ждать

// --------------------------------------

console.log('выполнюсь 1-ым');

setTimeout(() => {
    console.log('выполнюсь 3-им')
}, 0) // нулевая задержка

console.log('выполнюсь 2-ым');
