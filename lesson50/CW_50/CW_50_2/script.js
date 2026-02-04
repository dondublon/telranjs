const base_url = 'https://api.apilayer.com/fixer';
// const API_KEY = 'eHjLoJ7Hn6iEy9EKktlKACDKs1ebTxhQ';
const API_KEY = 'ABZks1wIsMjQK7eMW0vSAszmdpkOTvEF';

const selectFrom = document.getElementById("from");
const selectTo = document.getElementById("to");

let std_headers = {headers: {apikey: API_KEY}};

window.onload = function () {
    fetch(`${base_url}/symbols`, std_headers)
        .then(response => {
            let result_json = response.json();
            console.log(result_json);
            return result_json;
        })
        .then(data => data.symbols)
        .then(symbols => {
            for (let key in symbols) {
                const option1 = document.createElement("option");
                option1.value = key;
                option1.text = symbols[key];
                selectFrom.appendChild(option1);

                const option2 = document.createElement("option");
                option2.value = key;
                option2.text = symbols[key];
                selectTo.appendChild(option2);

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

};

calculate.onclick = function () {
    const currencyFrom = from.value.trim();
    const currencyTo = to.value.trim();
    console.log(std_headers);
    fetch(`${base_url}/convert?amount=${sum.value}&from=${currencyFrom}&to=${currencyTo}`,
        std_headers
    )
    .then(response => response.json())
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