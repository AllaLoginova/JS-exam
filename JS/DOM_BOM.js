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

<!DOCTYPE = html>
<head>
	<title>AmazinglyCool</title>
	<meta http-equiv="content-type" content="text/html" charset="utf-8">

	<!-- STYLES -->
	<link href="styles/default.css" rel="stylesheet" type="text/css">
	<link href="styles/index.css" rel="stylesheet" type="text/css">

	<!-- ICONS -->
	<link href="images/index.ico" rel="shortcut icon" type="image/x-icon">

	<!-- SCRIPTS -->
	<script type="text/javascript" src="scripts/default.js" defer></script>
	<script type="text/javascript" src="scripts/index.js" defer></script>
</head>

<body>
	<!-- HEADER -->
	<header>
		<div class="column-left">
			<h1><a href="index.html">AmazinglyCool</a></h1>
			<h2 id="clickCounter">Счётчик кликов: 0</h2>
		</div>
		<div class="column-right">
			<nav>
				<ul>
					<a href="#"><li class="first">Главная</li></a>
					<a href="#"><li>1 Пункт</li></a>
					<a href="#"><li>2 Пункт</li></a>
					<a href="#"><li>3 Пункт</li></a>
					<a href="#"><li>4 Пункт</li></a>
				</ul>
			</nav>
		</div>
	</header>
	
	<!-- MAIN -->
	<div class="main-container">
		<main>
			<div id="columnA">
				<h2>Добро пожаловать на сайт!</h2>
				<p>Это CSS-HTML шаблон сайта. Его можно свободно назвать HTML-исходником.</p>
				<p>Он имеет название AmazinglyCool, и создан специально для того, чтобы Вы добавили на него некоторый JavaScript.</p>
				<p>Для большей схожести с настоящим сайтом, ниже приведён список ложных ссылок:</p>
				<ul>
					<li><a href="#">Первая ссылка</a></li>
					<li><a href="#">Вторая ссылка</a></li>
					<li><a href="#">Третья ссылка</a></li>
					<li><a href="#">Четвёртая ссылка</a></li>
					<li><a href="#">Пятая ссылка</a></li>
				</ul>
				<h2>Список заданий</h2>
				<p>Ниже приведён список заданий. На страницу нужно добавить дополнительный контент, который будет включать в себя обработку событий пользовательского интерфейса, взаимодействие с пользователем и работу с объектом.</p>
				<p class="tasks">Сделайте сайт зависимым от количества кликов. Каждый раз при запуске сайта должен устанавливаться лимит кликов (случайное целое число от 30 до 50). Когда пользователь исчерпает лимит, должно появляться модальное окно с сообщением "Клики закончились". Сообщение не должно появляться при повторных кликах после того, как они были исчерпаны. Количество совершённых кликов выводится в хедере сайта в соответствующем заголовке.</p>
				<p class="tasks">Здесь создайте контейнер DIV красного цвета. Раз в секунду он должен менять свой цвет на следующий цвет радуги (красный, оранжевый, жёлтый, зелёный, голубой, синий, фиолетовый). Цвета должны быть замкнутыми, т.е. после фиолетового цвета снова ставится красный.</p>
				<div id="cube">Задание 2</div>
				<p class="tasks">В правой нижней части страницы есть круглый ASIDE. При нажатии на него должны появляться запросы на ввод новых координат для данного объекта. Для ввода используйте prompt. Как только координаты были введены, ASIDE перемещается на новую позицию. Новые координаты должны записываться в Cookies и автоматически применяться к элементу при загрузке страницы.</p>
			</div>

			<div id="columnB">
				<h2>Последние новости</h2>
				<p class="tasks">Здесь разместите кнопку, при нажатии на которую пользователь сможет добавить новую дату с событием в список ниже.</p>
				<button id="date">Новость</button>
				<div id="dates">
					<p><span class="strong-date">[11/08/2018]</span> Дальше будут просто даты с событиями. <a href="#">Читать&#8230;</a></p>
					<p><span class="strong-date">[10/07/2019]</span> Вот они. <a href="#">Читать&#8230;</a></p>
					<p><span class="strong-date">[09/06/2020]</span> Они тут. <a href="#">Читать&#8230;</a></p>
					<p><span class="strong-date">[26/03/2024]</span> А это сегодняшняя дата! Надо же, откуда она здесь? <a href="#">Читать&#8230;</a></p>
				</div>
				<h2>AmazinglyCool - сайт об HTML, CSS, JavaScript и многом другом!</h2>
				<p class="tasks">Здесь разместите кнопку, с помощью которой пользователь сможет добавить в список ниже новую ссылку.</p>
				<button id="link">Ссылка</button>
				<ul id="ulId">
					<li><a href="#">Первая ссылка</a></li>
					<li><a href="#">Вторая ссылка</a></li>
					<li><a href="#">Третья ссылка</a></li>
					<li><a href="#">Четвёртая ссылка</a></li>
					<li><a href="#">Пятая ссылка</a></li>
				</ul>
				<p class="tasks">Здесь должна быть кнопка, которая позволяет пользователю поменять название сайта. Учтите, что название меняется везде, где встречается на сайте.</p>
				<button id="name">name</button>
			</div>
			
		</main>
	</div>

	<!-- FOOTER -->
	<footer>
		<p>Copyright &copy; <span id="year">YYYY</span> <a href="index.html">amazinglycool.com.</a></p>
		<p id="pageInfo"> Страница 1. Главная </p>
	</footer>

	<!-- ASIDE -->
	<aside><button>A</button></aside>
</body>
</html>
