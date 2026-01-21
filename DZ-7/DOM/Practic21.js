// const title = document.getElementById('main-title');
// console.log(title);
// title.style.color = "red";
//
// const item = document.getElementsByClassName('item');
// console.log(item);
//
// const divs = document.getElementsByTagName("li");
// console.log(divs);
// const firstItem = document.querySelector(".item");
// console.log(firstItem);
//
// const allItem = document.querySelectorAll (".item");
// console.log(allItem);
//
// Доступ к соседним элементам

// к родителю
// const secondParagraf = document.getElementById("second");
// const parent = secondParagraf.parentNode;
// console.log(parent);
//
// //Дочерние элементы
// const parent = document.getElementById("parent");
// const children = parent.childNodes;
// console.log(children);

// // работа с textContent
// const firstItem = document.querySelector(".item");
// console.log("Исходный textContent", firstItem.textContent);
// firstItem.textContent = "Измененный текст(textContent)";;
// console.log("После TextContent: ", firstItem.outerHTML);
//
// //Работа с innerHtml
// const container = document.querySelector(".container");
// console.log("исходный innerHtml", container.innerHTML);
// container.innerHTML += "<div class='item'>Новый элемент(innerHTML)</div>";
// console.log("После InnerHtml", container.innerHTML);
//
// //Работа с outerHTML
// const child1 = document.getElementById("first");
// console.log("Исходный outerHtml", child1.outerHTML);
// child1.outerHTML = "<div class='new-element'>Замененный элемент(outerHTML)</div>";
// console.log('После outerHtml', document.getElementById("parent").innerHTML);
//
// //сравнение методов
// const title = document.getElementById("main-title");
// console.log( "Сравнение методов для заголовка");
// console.log("textContent", title.textContent);
// console.log("innerHTML", title.innerHTML);
// console.log("outerHTML", title.outerHTML);
//
//                             // Атрибуты
// //getAttribute()- получаем атрибуты
// const link = document.getElementById("myLink");
// console.log( "Атрибут href", link.getAttribute("href"));
// console.log("Атрибут target", link.getAttribute("target") );
//
// // setAttribute() - изменяем атрибуты
// const image = document.getElementById("myImage");
// image.setAttribute("src", "dog.jpg"); //меняем изображение
// image.setAttribute("alt", "Собака"); //меняем альтернативный текст
// image.setAttribute("title", "Новое изображение"); // добавляем
//
// // removeAttribute() -  удаляем атрибуты
// const input = document.getElementById("myInput");
// input.removeAttribute("disabled"); //разблокируем поле ввода
// input.removeAttribute("placeholder"); //удаляем placeholder
//
// //Проверяем текущие атрибуты
//  console.log(document.getElementById("myImage").outerHTML);
//  console.log(document.getElementById("myInput").outerHTML);
//
//  //пример добавления стиля через setAttribute
//document.getElementById("myLink").setAttribute("style", "color: red");

                            // Классы
const box = document.getElementById("box");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

//Добавление класса
btn1.addEventListener("click", () => {
    box.classList.add("highlight");
    console.log("Добавлен класс highlight")
});

//Удаление класса
btn2.addEventListener("click", () => {
    box.classList.remove("highlight");
    console.log("удален класс highlight")
});

//Переключение класса
btn3.addEventListener("click", () => {
    box.classList.toggle("big-text");
    console.log("Переключен класс big-text")
});

//Проверка наличия класса
btn4.addEventListener("click", () => {
    const hasHighlight = box.classList.contains("highlight");
    const hasBigText = box.classList.contains("big-text");

    console.log("Есть класс highlight", hasHighlight);
    console.log("Есть класс big-text", hasBigText);
    console.log("Все классы элемента", box.classList);
})