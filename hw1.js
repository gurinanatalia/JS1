"use strict";

// задание 1

let tempCelsius = +prompt("Задайте температуру в градусах по Цельсию");
let tempFahrenheit = (9 / 5) * tempCelsius + 32;
alert(`Температура в градусах по Фаренгейту составит: ${tempFahrenheit}`);

// задание 2

let admin = null;
let name1 = null;
name1 = "Василий";
admin = name1;
console.log(admin);

// задание 3

/*
1. Складываем 10 и 10, получаем 20, склеиваем число со строкой, получаем 2010
2. Склеиваем число со строкой, получаем 1010, склеиваем строку со строкой, получаем 101010. 
3. Складываем 10 и 10, получаем 20, превращаем строку в число, складываем 20 и 10, получаем 30. 
4. Пустая строка возвращает false, т.е. 0, 0 становится -0, делим на -0, получаем -Infinity.
5. Превращаем строку в число, ожидали получить число, но что-то пошло не так, дробная часть должна отделяться точкой, а не запятой, в итоге NaN.
*/

console.log( 10 + 10 + "10" ); 
console.log( 10 + "10" + 10 );
console.log( 10 + 10 + +"10");
console.log( 10 / -"");
console.log( 10 / +"2,5");




