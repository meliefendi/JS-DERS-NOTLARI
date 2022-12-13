
//for döngüsü

// let ArrayList = ["liste1","liste2","liste3"]; liste elemanlarını for döngüsü yardımıyla html sayfasına yazdırdık.

// const listt = document.getElementById("list")

// for(let i=0; i<ArrayList.length;i++){

// const liDOM = document.createElement("li");

// liDOM.innerHTML = ArrayList [i];
// listt.appendChild(liDOM)
// }

// for(let i = 20; i <= 50; i++){ //20 ile 50 arası sayıları yazdırdık.
//     console.log(i)
// }

// const chars = ['a', 'a', 'i', 'o', 'o', 'j', 'v', 's', 'c', 'r', 'p', 't', 'l', 'p','s']; //bunu çıktı olarak almasını istedik.

// for (let i = 0; i < chars.length; i++) {
//   const char = chars[i];
//   console.log(char);
// }

//continue ve break


// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         //break
//         continue;
//     }
//     console.log(i)
// }

// const nameList = ["cafer","sıddık","osman","kamil","corc","tezene"];

// let ulList = document.querySelector("#list")

// for(let counter = 0; counter < nameList.length; counter++){
//     if(nameList[counter] == "osman"){
//         break;
//        //continue;
//     }
//     let liDOM = document.createElement("li");
//     liDOM.innerHTML = nameList[counter];
// ulList.append(liDOM)

//     //console.log(nameList[counter])
// }

//////////////////////while

// let değisken = 0
// while(değisken <=10){
//     console.log(değisken);
//     değisken++;
// }


// let cars = ["honda","bmw","audi","volvo","reno"]; //2 farklı şekilde while ile array içerisindekileri yazdırma
// let i = 0;
// while( i < cars.length){
//     console.log(cars[i])
//     i++
// }

// while(cars[i]){
//     console.log(cars[i])
//     i++
// }

//////////////////////foreach

// let cars = ["honda","bmw","audi","volvo","reno"];

// cars.forEach((product,index,array) =>{ //listeyi yazar
//      console.log(array[index])
// })

// cars.forEach((product,index,array) =>{  //numaralı bir şekilde listeyi yazar
//     console.log(product,index)
// })

// cars.forEach((product,index,array) =>{  //liste elemanların sonuna yazdığımız neyse o eklenir
//     console.log(array[index] = product +"11")
// })

// cars.forEach((product,index,array) =>{
//     array[index] = `${product.toLocaleUpperCase()}`
// })
// console.log(cars)

// const userListDom = document.querySelector("#list"); //forEach vasıtasıyla diziyi ekrana yazdırdık.

// cars.forEach(item => {
//     const liDOM = document.createElement("li");
//     liDOM.innerHTML = item;
//     userListDom.append(liDOM)
// })

// const animals = ["cat" , "dog" , "bird", "horse"];

// animals.forEach((value , index , array) => {
//   console.log('value: ', value );
//   console.log('value parametresinin aldığı index :', index );
//   console.log('array:' , array );
// });

// const animals = ["cat" , "dog" , "bird", "horse"];
// animals.forEach( animal => console.log( animal ) );

// const number = [12,24,36] //foreach metoduyla dizideki elemalarımıza +2 yaptık.

// number.forEach((numbers)=>{

//     console.log(numbers + 2)
// })

//////////map

// const numbers = [2,4,6]; //bu şekilde map metoduyla da aynı sonucu elde ediyoruz. fakat değişkene atayınca veya işlemi arrow function un orda yapınca underfined dönüyor.

// numbers.map((number)=>{

//   console.log(number * 2)
// });

//const numbers = [1, 2, 3, 4, 5]; //map metoduyla işlem yaptırdık.

//const squares = numbers.map(number => number * number); /// squares is now [1, 4, 9, 16, 25]
//////////

// const dizi = [1,2,3,4,5,6];

// const sonuc = dizi.map(deger => { veya deger => deger *2 ile de aynı sonuc verir.
//   return deger * 2
// })
// console.log(sonuc)



//////////////////filter

// const cars = ["renault","citroen","ford","mercedes","bmw","maybach","bentley","kia"]; 

// const newcars = cars.filter(item => item.length >   5) 
// console.log(newcars) //length 5ten büyük olanları yazdırmasını istedik.

// const users = [
// 	{fullName: "orhan şeyma", isActive: false},
// 	{fullName: "habib kaynar", isActive: true},
//     {fullName: "şehmus cevşen", isActive: true},
//     {fullName: "rıza atak", isActive: false},
// ];

// const newusers = users.filter(user => user.isActive == false) 
// console.log(newusers)

// const person = [{
//     name: "Adem",
//     age: 25,
//     languages: ["JavaScript", "CSS"],
//   },
//   {
//     name: "Oğuz",
//     age: 33,
//     languages: ["Java", "HTML"],
//     }
//   ];

//   const oldAge = person.filter(kisi => kisi.age >  30)
//   console.log(oldAge);

  // const js = person.filter(bilen => bilen.languages.includes("JavaScript"));

  // console.log(js)

// const javascriptUsers = person.filter(user => user.languages.includes("JavaScript")); //içerisinde javascript olanı yazdırdık includes metoduyla

//   console.log(javascriptUsers)

////////////////////////gerekli olacak

////////////baş harfleri büyükle başlayan

// let meyveler = ["kivi","muz","avokado","şeftali"];

// const newmeyve = meyveler.map(user => user.toLowerCase())
// console.log(newmeyve)

// const userobj = meyveler.map(item => (
//   //returnle de oluyor fakat parantezler yerine süslü parantezlerle birlikte kullanılması gerekli
//    {
//     username:item,
//     shortname:`${item[0]}.`,
//     newname:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//   }
// )

// )
// console.log(userobj)

///////////////////////////////2 ile çarpma

// const dizi = [1,2,3,4,5,6];

// const sonuc = dizi.map(deger => {
//   return deger * 2
// })
// console.log(sonuc)

///////////////////////////////maas yüzdesi hesaplama

// const wage = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];

// const newwage = wage.map((e)=>{
//   if(e > 3000){
//     return Math.round(e * 1.15)
//   }else {
//     return Math.round(e * 1.25)
//   }
// })
// console.log(newwage)  //[1375, 14950, 3125, 5175, 1875, 28750, 2500]

