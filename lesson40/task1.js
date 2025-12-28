//a) Создайте несколько объектов-продуктов. В каждом объекте
//должно быть поле name (название), description(описание), price(цена),
//    info (функция, которая формирует строку вида:
//    `товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...`

let product1 = {
    name: "laptop",
    price: 29383,
    description: "Super Laptop",
    info: function () {
        return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    }
}
let product2 = {
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

let good1 = new Good("notebook lenovo", 1234, "cpu intel");
let good2 = new Good("notebook toshiba", 4321, "cpu AMD");
let good3 = new Good("TV Apple", 54321, "cpu AMD");
// console.log(good1.info())

let arr = [good1, good2, good3];
console.log('-----------------');
writeArrGoods(arr);

function writeArrGoods(arr_goods) {
    for (let g of arr_goods)
        Object.entries(g).forEach(([key, value]) => {
            if (typeof g[key] === "function")
                console.log(`${key}: ${value()}`);
            else
                console.log(`${key}: ${value}`);
        });
        console.log(`--------------`);

}
