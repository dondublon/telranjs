//1. Понять почему при варианте 1 вывелось 10 раз число 10
// for (var i=0; i<10; i++){
//    setTimeout(()=>console.log(i),1000)
// }

//2. Объяснить почему для летов получилось правильно 1.2.3...10
// for (let i=0; i<10; i++){
//     setTimeout(()=>console.log(i),1000)
// }



//3. Исправить код не используя лет и конст , оставить вар
//  но результат 1.2.3.4...10 Придумайте несколько вариантов решения


console.log("=== Way 1 === ");
function get_print_func(k) {
    return function() {
        console.log("way1: "+k);
    };
}
for (var i=0; i<10; i++){
    func = get_print_func(i)
    setTimeout(func,100)
}

console.log("=== Way 2 === ");
// просто переносим setTimeout во внутреннюю функцию.
// идея та же, с замыканием.
function schedulePrint(k) {
    setTimeout(() => console.log("way2:" + k),100);
}
for (var i=0; i<10; i++){
    schedulePrint(i);

}

console.log("=== Way 3 === ");
// "А что, так можно было?" :)
// Под условие подходит.
for (var i=0; i<10; i++){
    console.log("way3: "+ i);
}

console.log("=== Way 4 === ");
promise = new Promise((resolve, reject) => resolve(0));
for (var i=0; i<10; i++){
    promise = promise.then((k)=> {
        console.log("way 4:" + k);
        return k+1;
    });
}


