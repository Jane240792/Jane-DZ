// alert("Привет")
// const animal = prompt("Какое у вас любимое животное?");
// switch(animal){
//     case "кошка":
//     case "собака":
//     case "хомяк":
//         console.log("Это домашнее животное.")
//         break;
//
//     case "рыба":
//     case "птица":
//     case "черепаха":
//     case "ящерица":
//         console.log("Это экзотический питомец.")
//         break;
//     default:
//         console.log("Это мне неизвестно.")
// }
// Задача №1:
// Необходимо задать пользователю вопрос, нравится ли ему JavaScript?
//Если пользователь ответит положительно, необходимо вывести сообщение "Конечно, отличный язык."
//Если пользователь ответил отрицательно, необходимо вывести сообщение "Не нравится? Вы кнопкой ошиблись?"
//Вывод необходимо осуществить в модальное окно.

// Мое решение:
// const input=prompt('Тебе нравится JS?')
// switch (input) {
//     case "Да":
//     case "Конечно":
//         alert("Конечно, отличный язык.")
//         break;
//     default:
//         alert("Не нравится? Вы кнопкой ошиблись?")
// }

// правильное:
// const userAnswer = confirm("Нравится ли вам JavaScript");
// if (userAnswer) {
//     alert("Конечно, отличный язык");
// }else {
//     alert("Не нравится? Вы кнопкой ошиблись?")
// }


// Задача №2:
// Необходимо у пользователя спросить его имя и поздороваться с ним, используя это имя.
//     Если пользователь не введет имя, либо если имя будет пустой строкой, необходимо вывести сообщение "Введено неверное имя.".
//     Любое сообщение должно выводиться в модальном окне

// Мое решение:
// const userName=prompt("Как вас зовут?");
// if(userName){
//     alert(`Здравствуй, ${userName}`);
// }else{
//     alert("Введено неверное имя")
// }

// правильное:
// const userName=prompt("Как вас зовут?");
// if(userName && userName.trim()){
//     alert(`Здравствуй, ${userName.trim()}`);
// }else{
//     alert("Введено неверное имя")
// }

// Задача №3
// Необходимо попросить пользователя ввести свой возраст.
//
//     В зависимости от ввода пользователя, нужно вывести соответствующее сообщение в консоль:
//
//     Пользователь ввел число от 0 до 18 - "Привет :)"
// Пользователь ввел число от 18 до 50 - "Здравствуйте."
// Пользователь ввел число от 50 до 100 - "Почетный возраст."
// Пользователь ввел число больше или равное 100 - "А столько живут?"
// Примечания:
//     Пользователь вводит корректный возраст.
//     Выражение "до" означает, что мы не включаем данное число. Например, выражение "от 18 до 50" означает,
//     что мы включаем число 18 и все, что до 50, но не само число 50.

// const userAge= +prompt("Сколько вам лет?");
// if(userAge > 0 && userAge < 18){
//     console.log("Привет :)")
// }else if(userAge >= 18 && userAge < 50){
//     console.log("Здравствуйте")
// } else if(userAge >= 50 && userAge < 100){
//     console.log("Почетный возраст")
// }else (
//     console.log("А столько живут?")
// );

// Задача №4
// Пользователь должен ввести название товара, после чего мы должны в alert вывести цену данного товара в формате
// "Название товара: цена товара".
//     Товары, которые имеем и их цены:
//
//     "Мышка Б54": 2200
//     "Клавиатура К22": 9400
//     "Монитор М123": 52000
// Если пользователь введет название товара, которого не существует, необходимо вывести сообщение:
//     `Товар "название_введенного_товара" не найден`.
//      Необходимо сделать так, чтобы ввод букв не зависел от регистра, то есть, хоть пользователь
// введет строку "мЫшКА б54", мы все равно ответим ему ценой 2200.

// const userInput = prompt("Введите название товара");
// product = userInput.toLocaleLowerCase().trim();
// switch (product) {
//     case "мышка б54":
//         alert('"Мышка Б54": 2200');
//         break;
//     case "клавиатура к22":
//         alert('"Клавиатура К22": 9400')
//         break;
//     case "Монитор м123":
//         console.log('"Монитор М123": 52000')
//         break;
//         default:
//             alert (` Товар "${product}" не найден.`);
// }
//
// правильно:

//     const product = prompt("Введите название товара");
// switch (product.toLocaleLowerCase()) {
//     case "мышка б54":
//         alert('"Мышка Б54": 2200');
//         break;
//     case "клавиатура к22":
//         alert('"Клавиатура К22": 9400')
//         break;
//     case "Монитор м123":
//         console.log('"Монитор М123": 52000')
//         break;
//     default:
//         alert (` Товар "${product}" не найден.`);
// }


// const randomNumber = Math.trunc(Math.random()*5)+1;
// const userInput = +prompt("Введите целое число от 0 до 5");
// if (!Number.isInteger(userInput) || userInput< 1 || userInput > 5) {
//     alert("Необходимо было ввести целое число от 1 до 5")
// } else if (userInput === randomNumber) {
//     alert (`Верно, я загадал число ${randomNumber}`)
// } else if ( userInput !== randomNumber) {
//     alert( `Нет, не ${userInput}, я загадал ${randomNumber}`)
// }


// let countRows = parseInt(prompt("Введите кол-во строк"))
//   document.write("<table><tbody><tr><td>1</td></tr></tbody></table>");
// let startTabele = "<table><tbody>";
//     let endTabele = "</tbody></table>";
//     let bodyTabele = "";
// for (let i = 0; i < countRows; i++) {
//     if(i%2){
//         bodyTabele += "<tr style='background-color:gray'>"+"<td>"+i+"</td>"+"<td>" + i*2 +"</td>"+"</tr>";
//     } else {
//         bodyTabele += "<tr style='background-color:green'>"+"<td>"+i+"</td>"+"<td>" + i*2 +"</td>"+"</tr>";
//     }
// }
// document.write(startTabele+bodyTabele+endTabele);
//
// let countRows = parseInt(prompt("Введите кол-во строк"))
// let bodyTable = "";
// for (let i = 1; i <= countRows; i++) {
//     bodyTable += `<tr style = "background-color: ${(i%2) ? 'green' : ' gray'};">
//                         <td>${i}</td>
//                         <td>${i*2}</td>
//                    </tr>`
// }
// document.write("<table><tbody>"+ bodyTable+"</tbody></table>");

// const userNames = ["Павел", "Андрей", " Игорь"]
// console.log(userNames);
// console.log(userNames.at(-1 ));
// userNames[3]= "Светлана"
// console.log(userNames);
// userNames[1] = "Ольга"
// console.log(userNames);
// userNames[userNames.length] = "Анна"
// console.log(userNames);
// userNames.push("Ольга", "Евгения")// Добавляет в конец массива
// console.log(userNames);
// userNames.unshift("Светлана")// Добавляет в начало
// console.log(userNames);
// userNames.pop() // Удаляет значение из конца массива и возвращает его
// const deliteUser = userNames.pop();
// console.log(userNames);
// console.log(deliteUser);
// userNames.shift();// удаляет в начале массива и возвращает его
// console.log(userNames);
// const delitedUser = userNames.splice(1, 0, "Оксана", "Светлана");
//
// console.log(userNames);
// console.log(delitedUser);

// let str = "Я люблю JavaScript!!!";
// let regExp = /Лю/ig;
// //console.log(str.search(regExp));
// console.log(str.match(regExp));
//  let str2 = "asfdas";
//  let str3 = str2.replace(/as/ig, '20')
// console.log(str3);
//  str11 = "Привет мир!!!"
//  regExp = /Мир/i;
//  console.log(regExp.test(str11));
//  let str12 =  "ой-ой-ой"
// regExp = /Ой/ig;
//  let temp;
//  do{
//     temp = regExp.exec(str12);
//     temp && console.log(temp[0]);
//  }while (temp);



// . - почти "любой" символ кроме \n
// regExp = /CS.4/i
// console.log( "CSS4".match(regExp));
// console.log( "CS-4".match(regExp));

//              14/01/26
//1.

// Создайте функцию greetUser, которая принимает один аргумент — имя пользователя (строка). Функция должна выводить (через console.log) одно из двух сообщений в зависимости от имени:
//     Если имя — Павел или Олег, то функция должна вывести сообщение:
//     "Привет, [имя], вам доступны функции администратора."
//      Если передано любое другое имя, то функция должна вывести сообщение:
//     "Здравствуйте, [имя]."

// greetUser('Олег')
//
// function greetUser(name){
//     if(name === "Павел" || name === "Олег"){
//         console.log(`Привет, ${name}, вам доступны функции администратора.`)
//     }else{
//         console.log(`Здравствуйте, ${name}.`)
//     }
// }

//2.

// Два друга, Олег и Игорь, решили немного подбухнуть. Они налили totalShots стопок горячительного и приступили к древней традиции. Все началось мирно: друзья пили чокаясь, деля стопки поровну, произнося тосты. Но через некоторое время Олег вышел из комнаты. Когда он вернулся, оказалось, что:
//
// Игорь утверждает, что они вместе выпили claimedDrankShots стопок.
//     Но на столе обнаружилось, что несколько стопок были разбиты (brokenShots) и несколько — пролиты (spilledShots).
//     Олег заподозрил, что Игорь мог выпить втихаря больше своей доли, пока его не было.
//     Необходимо помочь Олегу понять, что произошло и не обманывает ли его близкий друг. Необходимо написать функцию countDrinkingResults.
//
//     Параметры
// totalShots — общее количество стопок, которые были в начале (целое число).
// claimedDrankShots — количество стопок, которые Игорь заявил, что они вместе выпили (целое число).
// brokenShots — количество стопок, которые были разбиты (целое число).
// spilledShots — количество стопок, которые были пролиты (целое число).
// Проверка
// Если сумма выпитого, разбитого и пролитого превышает общее количество стопок, нужно вывести сообщение: "Игорь явно вас обманывает!", после чего завершить работу функции.
//     Если же друг оказался верным, необходимо вывести следующее сообщение:
//
//     Количество разбитых стопок: [число]
// Количество пролитых стопок: [число]
// Количество стопок, которое выпил каждый из друзей: [число]
//
// Примечание
// Вам необходимо реализовать функцию, вызывать ее не нужно, она будет автоматически вызвана.
//     Выводить сообщения внутри функции необходимо в консоль.
//     Не травите себя, лучше пейте что-нибудь полезное :)
//
// function countDrinkingResults(totalShots, claimedDrankShots, brokenShots, spilledShots) {
//     if (totalShots < claimedDrankShots+brokenShots+spilledShots) {
//         console.log(`Игорь явно вас обманывает!`)
//
//     }else {
//         console.log(`Количество разбитых стопок: ${brokenShots}
//                      Количество пролитых стопок: ${spilledShots}
//                      Количество стопок, которое выпил каждый из друзей: ${claimedDrankShots/2} `);
//     }
// }
// //3.
// const userNumber = askNumber();
// console.log(`Вы ввели ${userNumber}`)
// function askNumber(){
//     const userNumber = +prompt("Введите число");
//     return userNumber;
// }


// Разложим время по полочкам
// Необходимо реализовать функцию getTimeBySeconds, которая принимает количество секунд (число).
// Из функции нужно вернуть строку вида: 01:21:09, где первое число - количество часов, второе число - количество оставшихся минут, третье - количество оставшихся секунд.
//
//     Примечание
// Строка всегда будет содержать количество часов, минут и секунд, даже если где-то будет 00.
//     В задании необходимо реализовать только функцию, вызывать ее не нужно.
//
// function getTimeBySeconds(sec) {
//     let hours =Math.floor(sec/3600)
//     if(hours < 10){
//         hours = "0"+hours
//     };
//
//     let min = Math.floor((sec-hours*3600)/60)
//     if(min < 10){
//         min = "0"+ min
//     };
//     let second = Math.floor(sec - (hours*3600) - (min*60))
//     if(second < 10){
//         second = "0"+second
//     }
//     return(`${hours}:${min}:${second}`)
// }

//
// // решение №2
// function getTimeBySeconds(sec) {
//     const seconds = sec % 60
//     const minutes = Math.trunc( sec % 3600/60)
//     const hours = Math.trunc( sec /3600)
//     return `${fillZero(hours)}:${fillZero(minutes)}:${fillZero(seconds)}`
// }
// function fillZero(num){
//     if(num < 10){
//         return `0${num}`
//     }
//     return String(num)
// }
// console.log(getTimeBySeconds(60));
//
// //решение №3
// function getTimeBySeconds(sec) {
//     const seconds = (sec % 60).toString().padStart(2, '0');
//     const minutes = Math.trunc( sec % 3600/60).toString().padStart(2, '0');
//     const hours = Math.trunc( sec /3600).toString().padStart(2, '0');
//     return `${fillZero(hours)}:${fillZero(minutes)}:${fillZero(seconds)}`
// }
//
// console.log(getTimeBySeconds(60));
//

////
//  function maskCardNumber(str){
//     return  `**** **** **** ${String(str).slice(-4)}`;
//  }
// console.log(maskCardNumber('1245679456975165'));