const fs = require('fs');
fs.appendFileSync('1.txt','halo'); // створення файлу з записом в нього даних
let fileContent= fs.readFileSync("1.txt","utf8"); //Зчитування з файлу
console.log(fileContent);
fs.writeFileSync("1.txt","Vergil") // Перезапис файлу
fileContent= fs.readFileSync("1.txt","utf8"); 
console.log(fileContent);
fs.appendFileSync("1.txt"," Danteeee") // дозапис файлу
fileContent= fs.readFileSync("1.txt","utf8"); 
console.log(fileContent);
fs.unlinkSync("1.txt"); // видалення файлу

 