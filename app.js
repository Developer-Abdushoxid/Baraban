// 'use strict'  // qat'iy rejim - bu ES6 - da yangi versiyadagi kodlarni yozishga majbur qiladi.

// Math - functions -- matematik funksiyalar
/*
  Math: 
  1. round() - berilgan o'nli kasr sonni yaxlitlaydi
  2. floor() - bu berilgan o'nli kasr sonni butun qiymatini qaytaradi
  3. ceil() - bu berilgan o'nli kasr sonni eng yaqin bo'lgan songa yaxlitlaydi (katta songa qarab yuradi)
  4. sqrt() - kvadrat ildiz chiqarib beradi
  5. pow() - bu ixtiyoriy sonni ixtiyoriy darajaga ko'tarib beradi
  6. abs() - bu berilgan manfiy sonni absolute musbat songa aylantirib beradi
  7. toFixed() - bu berilgan o'nli kasr sonni siz belgilagan hona birligigacha ko'rsatish imkonini beradi
  // 
*/

// round() - sof yaxlitlash uchun ishlatiladi
let son01 = 5.7
let son02 = 5.3
let result = Math.round(son02)
// console.log(result)


// floor() - berilgan o'nli kasr sonni butun qismini qaytaradi

let son03 = 10.2
let son04 = 10.9
let result01 = Math.floor(son04) 
// console.log(result01)

// ceil() - berilgan o'nli kasr sonni unga eng yaqin bo'lgan va o'zidan katta   bo'lgan butun sonnga yaxlitlab beradi 

let son05 = 15.4
let son06 = 15.8
let result02 = Math.ceil(son06)
// console.log(result02)


// sqrt - bu kvadrat ildizni hisoblaydi

let son07 = 100
let result03 = Math.sqrt(son07)
// console.log(result03)

let num = 5
// console.log(num * num)

// console.log(Math.sqrt(num*num))

// pow() - bu berilgan sonni ixtiyoriy darajaga ko'taradi


let son08 = 9
let result04 = Math.pow(son08, 3)
let result05 = Math.pow(son08, 2)
console.log(result04)
console.log(result05)



// abs - berilgan butun sonni absolute musbat qiymatini qaytaradi

let son1 = -10
let result07 = Math.abs(son1)
console.log(result07)

// Fixed() - 

let son2 = 7.756800356
let result08 = son2.toFixed(3)


console.log(result08)


//  random() - bu 0 va 1 raqami orasidagi qiymatlarni qaytaradi.

let result09 = Math.random();

let result1 = result09.toFixed(2) * 100
console.log(result1)






