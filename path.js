const path =require('path')

console.log(__filename) //Весь шлях до файлу

console.log(path.basename(__filename)) //Повертає кінцеву частину шляху
console.log(path.dirname(__filename))  //Повертає ім'я каталогу шляху
console.log(path.extname(__filename))  //Повертає розширення файлу
console.log(path.parse(__filename))    //повертає об'єкт, властивості якого представляють важливі елементи шляху.


