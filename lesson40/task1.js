//a) Создайте несколько объектов-продуктов. В каждом объекте
//должно быть поле name (название), description(описание), price(цена),
//    info (функция, которая формирует строку вида:
//    `товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...`

function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function () {
        return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    }
}

product1 = new Product("notebook", 1234, "cpu intel");
console.log(product1.info())