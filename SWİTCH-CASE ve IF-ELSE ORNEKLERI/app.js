
//////////////////////// //ehliyet yaş hesaplama 1

// let yas = prompt("Yasinizi girin:","100");

// if (yas > 18 ){
//     console.log("Araba kullabilirsin")
// }else {
//     console.log(`Yasın ehliyet için uygun değil. ${yas - 18} yıl sonra ehliyet alabilirsin`)
// }
// //////////////////////// yas hesaplama 
// let myAge = 17;
// let yourAge = prompt("yasınızı girin:");

// if (myAge > yourAge){
//     console.log(`Ben senden büyüğüm. Yasim ${myAge}, seninse ${yourAge}`)
// }else {
//     console.log(`Aramızda ${yourAge - myAge} yas var ve sen benden buyuksun.`)
// }
//////////////////////// ternary operators kullanarak hesaplama 

// let a = 4;
// let b = 3;

// a>b ? console.log( a , "den buyuktur",b)
// : console.log("a b den kucuktur")

//////////////////////// tek çift sayı bulma

// let number = prompt("Enter number:");

// number %2 == 0 ? console.log(`${number} sayısı sayı cift sayıdır`)
// : console.log(`${number} sayısı sayı tek sayıdır`)
////////////////////////OĞRENCI NOTU HESAPLAMA benzeri diğer klasörde de mevcut

// let score = prompt("Puanınızı girin.")

// if(score > 79 && score <101){
//     console.log("A")
// }else if (score > 69 && score < 80){
//     console.log("B")
// }else if (score > 59 && score <70){
//     console.log("C")
// }else if (score > 49 && score < 60){
//     console.log("D")
// }else {
//     console.log("f")
// }
////////////////////////////HANGİ AY OLDUĞUNU GİRİP MEVSİM YAZDIRMA  

// let month = prompt("Hangi ayda olduğunuzu girin.")
// let season;

// switch (month) {
//     case "September - Eylül":
//     case "October - Ekim":
//     case "November - Kasım":
//         season = "Autumn - Sonbahar";
//         break;

//     case "December - Aralık":
//     case "January - Ocak":
//     case "February - Subat":
//         season = "Winter - Kış";
//         break;

//     case "March - Mart":
//     case "April - Nisan":
//     case "May - Mayıs":
//         season = "Spring - İlkbahar";
//         break;

//     case "June - Haziran":
//     case "July - Temmuz":
//     case "August - Ağustos":
//         season = "Summer - Yaz";
//         break;
// }

// console.log("Bulunduğunuz sezon :", season)

////////////////////////////GÜN GİRİP HAFTASONU MU DEĞİL Mİ ONU BULMA

// let day = prompt("hangi gündesiniz.").toLowerCase();

// if (day == "cumartesi" || day == "pazar"){
//     console.log("haftasonu");
// }else {
//     console.log("haftaiçi")
// }

////////////////////////////HANGİ AYDA KAÇ GÜN VARDIR. 1.YÖNTEM

// let month = prompt("bir ay girin");

// let days=

// (month == "ocak") ? 31 : 
// (month == "şubat") ? 28 : 
// (month == "mart") ? 31 : 
// (month == "nisan") ? 30 : 
// (month == "mayıs") ? 31 : 
// (month == "haziran") ? 30 : 
// (month == "temmuz") ? 31 : 
// (month == "ağustos") ? 31 : 
// (month == "eylül") ? 30 : 
// (month == "ekim") ? 31 : 
// (month == "kasım") ? 30 : 
// (month == "aralık") ? 31 : null

// console.log(days)
////////////////////////////HANGİ AYDA KAÇ GÜN VARDIR. 2.YÖNTEM (çalışmıyor)
// let month = prompt("Enter a month: ").toLowerCase
// let ;

// // check if it is leap year 
// let d = new Date();
// let  = d.getFullYear();

// if  (month == "february") {
//    if  ((year  % 4  ==  0  && year  % 100 != 0)  ||     (year  % 400 == 0))  { daysCount  =  29; }
//    else daysCount =  28;
// } else { 
// switch (month){
//    case "january":
//    case "march":
//    case "may":
//    case "july":
//    case "august":
//    case "october":
//    case "december":
//       daysCount =  31;
//       break;

//    case "april":
//    case "june":
//    case "september":
//    case "november":
//       daysCount =  30;
//       break;
// }
// }
// console.log (month, " has ", daysCount, " days");

////////////////////////////not yazdırma ama html sayfasına. ff haricinde gülücük emojisi çıkacak. ff de üzgün face.

// const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>`
// const sad = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>`
// let point = prompt("aldığınız not nedir?");
// let textInfo;

// let info = document.getElementById("info")

// if (point >= 0 && point <= 100) {
//     textInfo = smile
// info.classList.add("text-primary")
    
//     if (point >= 90) {
//         textInfo += "aa"
//     } else if (point >= 85) {
//         textInfo += "ba"
//     } else if (point >= 80) {
//         textInfo += "bb"
//     } else if (point >= 75) {
//         textInfo += "cb"
//     } else if (point >= 70) {
//         textInfo += "cc"
//     } else if (point >= 65) {
//         textInfo += "dc"
//     } else if (point >= 60) {
//         textInfo += "dd"
//     } else if (point >= 55) {
//         textInfo += "fd"
//     } else if (point <= 50) {
//         textInfo = `${sad} ff`
//         info.classList.remove("text-primary")
//         info.classList.add("text-danger")
//     }
// }else {
//     textInfo = "bigiler doğru değildir"
// }


// info.innerHTML = `${textInfo} => ${point}`

////////////////////////////
const sad = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

let point = prompt ("notunu gir");

let textInfo;

textInfo = 
(point == "") ? "boş":
(point <=90) ? `aa ${smile}`:
(point <=85) ? `aa ${smile}`:
(point <=80) ? `aa ${smile}`:
(point <=75) ? `aa ${smile}`:
(point <=70) ? `aa ${smile}`:
(point <=65) ? `aa ${smile}`:
(point <=60) ? `aa ${smile}`:
(point <=55) ? `aa ${smile}`:
(point <=50) ? `aa ${smile}`:
(point < 50) ? `aa ${sad}`: "";

let info = document.getElementById("info");

info.classList.add = 
(point >= 50 && point <= 100) ? info.classList.add("text-primary"): info.classList.add("text-danger");



console.log(textInfo)