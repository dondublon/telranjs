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

invoke_log("peter.infoFunc", peter.infoFunc);//ERROR


function invoke_log(message, callback){
    console.log(message);
    console.log(callback);
    callback();
}

