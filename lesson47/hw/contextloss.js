class User{
    constructor(nickName){
        this.nickName=nickName;
    }

    infoFunc = function(){
        console.log(`Nickname: ${this.nickName}`);        
    }

    infoArrow = ()=>{
        console.log(`Nickname: ${this.nickName}`);        
    }

    greeting = function(prefix,postfix){
        console.log(`${prefix} ${this.nickName} ${postfix}`);
        
    }
}

const peter = new User("Peter");
console.log("===Func===");
peter.infoFunc(); //peter
console.log("===Arrow===");
peter.infoArrow(); //peter
console.log("===Context Loss");

const fn=peter.infoFunc;
console.log(fn);
// fn();
// invoke_log("peter.infoArrow", peter.infoArrow);//Peter
// invoke_log("peter.infoFunc simple", peter.infoFunc);//ERROR

// Способ 1: Используем .bind(), она работает так:
//  .bind(context, arg1, ...). 1-й аргумент попадает в this.
 invoke_log("peter.infoFunc with bind", peter.infoFunc.bind(peter));

// Способ 2: Использование функции-обертки, стрелочной
// работает два момента:
// 1. Стрелочная функция 2 видит переменную peter из своего контекста.
// 2. Внутри мы вызывает infoFunc() у объекта peter, и он существует, это важно.
//    Поэтому попадает в this.
invoke_log("peter.infoFunc (wrapper)", () => peter.infoFunc());


function invoke_log(message, callback){
    console.log(message);
    console.log(callback);
    callback();
}
