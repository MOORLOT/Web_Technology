let root1, root2;
let discriminant;
let calcBtn = document.getElementById('calcBtn')
let res = document.getElementById('res')
let arrayIDInt = [];
let arrayIDStr = [];

/* Приклад акцизного марки який було використано
https://ogp.ua/uk/news-ukr/818-prodazh-aksesuariv-dlya-kurinnya-ta-oplata-aktsizu
*/


function quadraticEquations() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    discriminant = b * b - 4 * a * c;
    console.log(discriminant);
    if (discriminant == 0) {
        root1 = -b / (2 * a)
        root2 = "NaN"
        console.log("Корень: " + root1);
    } else if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log("Корень 1: " + root1);
        console.log("Корень 2: " + root2);
    } else if (discriminant < 0) {
        console.log("Коренів немає");
        root1 = root2 = "NaN"
    }
    document.getElementById("res1").innerHTML = root1;
    document.getElementById("res2").innerHTML = root2;
}

function makeStringID(length) {
    let result = "";
    let charects = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let charectLength = charects.length;
    for (let i = 0; i <= length; i++) {
        result += charects.charAt(Math.random() * charectLength);
    }
    return result;
}

function makeIntegerID(length) {
    let result = "";
    let charects = "0123456789";
    let charectLength = charects.length;

    for (let i = 0; i <= length; i++) {
        result += charects.charAt(Math.random() * charectLength);
    }
    return result;
}

function makeMark() {
    console.log("Start funk: makeMark()")
    let mark = document.getElementById('mark').value;
    let result = [];
    let i = 0;
    while (i < mark) {
        result [i] = makeIntegerID(6) + " - " + makeStringID(4)
        console.log(result[i])
        i++;
    }
    let uniq = [...new Set(result)];
    document.getElementById("res3").innerHTML = uniq;
    console.log("End funk: makeMark()" + "Uniq length =" + uniq.length)
}
