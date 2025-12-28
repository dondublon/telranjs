//a) Создайте несколько объектов-продуктов. В каждом объекте
//должно быть поле name (название), description(описание), price(цена),
//    info (функция, которая формирует строку вида:
//    `товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...`

product1 = {
    name: "laptop",
    price: 29383,
    description: "Super Laptop",
    info: function () {
        return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    }
}
product2 = {
    name: "TV",
    price: 9485,
    description: "Super TV",
    info: function () {
        return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    }
}

console.log(product1.info())
console.log(product2.info())

//b) создайте конструктор для создания объектов-товаров.
//    Создайте несколько товаров


function Good(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function () {
        return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    }
}

good1 = new Good("notebook", 1234, "cpu intel");
console.log(good1.info())