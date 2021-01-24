'use strict';

/* 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры 
    наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, 
    сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, 
    который будет уменьшать цену в объекте на 25%. 
    Имейте в виду, что метод make25PercentDiscount не должен быть внутри 
    функции-конструктора, и также не нужно создавать отдельный объект-прототип 
    (как объект transport в уроке). */

//в стиле es5
function Product5(name, price) {
    this.name = name;
    this.price = price;
}

Product5.prototype.make25PercentDiscount = function() {
    this.price -= this.price * 0.25;
}

let product5 = new Product5("продукт", 100);
console.log(product5);
product5.make25PercentDiscount();
console.log(product5.price);

//в стиле es6
class Product6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price -= this.price * 0.25;
    }
}

let product6 = new Product6("продукт", 100);
console.log(product6);
product6.make25PercentDiscount();
console.log(product6.price);

/*1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры 
наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. 
Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. 
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. 
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. 
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.*/

// в стиле es5
function Post5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post5.prototype.edit = function(text1) {
    this.text = text1;
}

function AttachedPost5(author, text, date) {
    Post5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost5.prototype = Object.create(Post5.prototype);
AttachedPost5.prototype.constructor = AttachedPost5;

AttachedPost5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let post5 = new Post5("автор", "lorem1", new Date());
post5.edit("lorem2");
console.log(post5.text);

let attachedpost5 = new AttachedPost5("автор", "lorem1", new Date());
console.log(attachedpost5.highlighted);
attachedpost5.edit("lorem2");
console.log(attachedpost5.text);
attachedpost5.makeTextHighlighted();
console.log(attachedpost5.highlighted);

//в стиле es6

class Post6{
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text1) {
        this.text = text1;
    }
}

class AttachedPost6 extends Post6{
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }

}

let post6 = new Post6("автор", "lorem1", new Date());
post6.edit("lorem2");
console.log(post6.text);

let attachedpost6 = new AttachedPost6("автор", "lorem1", new Date());
console.log(attachedpost6.highlighted);
attachedpost6.edit("lorem2");
console.log(attachedpost6.text);
attachedpost6.makeTextHighlighted();
console.log(attachedpost6.highlighted);
