let days = +prompt('Neche gun qalacaqsiniz');
let ticket = +prompt('Bilet neceyedir?');
let hotel = +prompt('Hotel neceyedir?');
let food = +prompt('Yemeye ne qeder xerciniz cixacaq?');
let other = +prompt('Elave xercleriniz neceyedir?');
let shopping = +prompt('Bazarliga ne qeder pul verdiniz?');

let day = days;

let money = 0;

let travel = hotel + food + other + shopping;
money += ticket

while (day > 0) {
    money += travel;
    day--;
}

let netice = `${days} gun qalacaqsizsa ${money} € qeder pul verceksiniz!`;

document.getElementById('xerc').innerHTML = netice