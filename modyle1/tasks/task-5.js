
const  countryName = prompt ('Страна доставки?');
if (countryName === null) {
    alert('Отменино пользователем');}
else { 
    const country = countryName.toLowerCase();
let price ;
switch (country) {
    case'китай':
    price = 100;
 break;
 case'чили':
     price = 250 ;
     break;
 case'австралія':
    price = 170;
    break;
 case'індія':
    price= 80 ;
    break;
 case'ямайка':
    price = 120;
    break;

    default:
      alert("В вашей стране доставка не доступна");
      break;
}
if (price !== undefined) {
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
  }
}



