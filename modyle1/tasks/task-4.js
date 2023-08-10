
const credits = 23580 ;
const pricePerDroid = 3000;
const quantity = prompt('Количество дроидов, для покупки?');
let totalPrice;
if(quantity===null) 
{ console.log('Отменено пользователем!');}
else {
    totalPrice = pricePerDroid * Number(quantity);}

    if(totalPrice > credits) {
    
        console.log('Недостаточно средств на счету!');}
        else {
            const balance = (credits - totalPrice);
            console.log(`Вы купили ${Number} дроидов, на счету осталось ${balance} кредитов.`);}
