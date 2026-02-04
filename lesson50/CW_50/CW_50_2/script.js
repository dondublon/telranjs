// const base_url = 'https://api.apilayer.com/fixer';
const base_url = 'https://api.apilayer.com/fixer';
// const API_KEY = 'eHjLoJ7Hn6iEy9EKktlKACDKs1ebTxhQ';
const API_KEY = 'e5afd573b21b345d674b8815a6b554b3';

calculate.onclick = function () {
    const currencyFrom = from.value.trim();
    const currencyTo = to.value.trim();
    fetch(`${base_url}/convert?amount=${sum.value}&from=${currencyFrom}&to=${currencyTo}`, {
        headers: {
            apikey: API_KEY
        }
    })
    .then(response => {
        let json_obj = response.json();
        console.log("got json\n", json_obj);
    })
    .then(data => data.result)
    .then(res => {
        if(isNaN(res)){
            throw new Error('wrong data');
        }
        const resElem=document.createElement('h1');
        const resText = document.createTextNode(
            ` Result: ${res.toFixed(2)}`);
        resElem.appendChild(resText);
        if (result.firstElementChild){
            result.replaceChild(resElem,result.firstElementChild);
        } else {
            result.appendChild(resElem);
        }
    })
    .catch(e => {
        console.log(e);
        const resElem=document.createElement('h1');
        const resText = document.createTextNode(`Error`);
        resElem.appendChild(resText);
        if (result.firstElementChild){
            result.replaceChild(resElem,result.firstElementChild);
        } else {
            result.appendChild(resElem);
        }
    })
}

// HW_50_TEXT
// Переработайте апликацию под поля типа Option
// Мы должны получить все типи валют обрабатываемые 
// данным ресурсом и через окна выбора из полученных
// вариантов и введенным количеством формируем 
// аналогичный запрос и выводим ответ.