//////////////////////büyük olan sayıyı yazdırma
// var x = 10;
// var y = 20;

// if (x < y){

//     console.log(`${x} sayısı olan x, ${y} sayısı olan y den küçüktür` )
// }else {
//     console.log(`${x} sayısı olan x, ${y} sayısı olan y den büyük değildir`)
// }

//////////////////////////////////////////// DERS NOTU HESAPLAMA
// 1 Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
// 2 Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
//3 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
// 4 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
// 5 85-100 aralığındaysa Notunuz AA yazdıralım.

// var vize = 70;
// var final = 30;

// var ortalama = (vize * 0.3) + (final * 0.7);

// if (ortalama >= 0 && ortalama <= 30){
//     console.log(`Notunuz ${ortalama} , dersten FF ile kaldınız.`)
// }else if (ortalama >= 31 && ortalama <= 49){
//     console.log(`Notunuz ${ortalama}, dersten DC ile geçtiniz. `)
// }else if (ortalama >= 50 && ortalama <= 84){
//     console.log(`Notunuz ${ortalama}, dersten CC ile geçtiniz.`)
// }else if (ortalama >= 85 && ortalama <= 100){
//     console.log(`Notunuz ${ortalama}, AA ile geçtiniz.`)
// }
//////////////////////////////////////////// PROMPT İLE KULLANICIDAN SAYI ALIP PC NİN RAMDOM SAYISINI BULMA 

// var randomSayi = Math.floor(Math.random() * 10 +1);

// //Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
// var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");

// if (tahmin == randomSayi && tahmin != null) alert("Bildin!!!");

// else if (tahmin == "") alert("Boş giriş yaptınız!");

// else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");

// else {
//   alert("Bir daha denee :( Random sayi: " + randomSayi);
// }

////////////////////////////////////////////
// Formül: vki = kg/(m * m)
//Kod satırını buraya ekleyiniz.




// function vkiHesapla(weight, height) {
   
//     var weight = 70;
// var height = 165;

// var vki = weight / (height*height)

//   //var vki; //Bu kod satırını değiştiriniz

// if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);

// if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);

// if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);

// if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);

// return alert("Girdiğiniz değerleri kontrol ediniz");
// };
// vkiHesapla(weight, height);

