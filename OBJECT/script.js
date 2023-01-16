// let artist = {
// name : "Zoe",

// album : {
// title :"Reptilect",
// year : 2008
// }
// }
// console.log(artist.album.title)
//console.log(artist[album][album])
//////////////////////////////////////////////

// let countriesTalkSpanish = {
// continent: "South America",
// language: "Spanish"
// };

// let uruguay = {
//     continent:countriesTalkSpanish.continent,
// language:countriesTalkSpanish.language,
// capital:"Montevideo"
// }
// console.log(uruguay)

//veya

// let uruguay = {...countriesTalkSpanish,capital:"montevideo"}

// console.log(uruguay)

//veya

// let uruguay = Object.create(countriesTalkSpanish);
//     uruguay.capital = "Montevideo"
//     console.log(uruguay)

//Object.create ile oluşturulan nesne sadece prototipi olan bir boş nesnedir, içinde hiçbir özellik yoktur. Özellikleri eklemek için manuel olarak eklemelisiniz, örnekte olduğu gibi. 

//Diğer iki yöntem (Nesne yıkma ve Yayılma operatörü) mevcut nesnenin özellikleri ile birlikte yeni bir nesne oluşturur, bu nedenle özellikleri manuel olarak eklemeniz gerekmez.

//Bu 3 yöntem arasındaki temel fark, ilk iki yöntemde var olan nesnenin özellikleriyle direk yeni bir nesne oluşturabildiğiniz, ancak son yöntemde prototip özellikleriyle yeni bir nesne oluşturduktan sonra özellikleri ayrı olarak tanımlamak zorundasınızdır.

//////////////////////////////////////////////


// let state = {
// 	users:[
// 		{name: "Brock", age: 25, favoriteColor: "red"},
// 		{name: "Jessie", age: 17, favoriteColor: "yellow"},
// 		{name: "James", age: 41, favoriteColor: "blue"},
// 		{name: "Winnie", age: 18, favoriteColor: "purple"}
// 	],
// 	settings:{
// 		version: "1.0.5",
//         DNS: "105.xx.xx.xx",
//         website: "https://www.example.com/"
// 	},
// 	banList: ["Ash", "Angelica", "Tom", "Jerry"]
// }

// console.log(state)

// console.log(state.users[2].age)

//////////////////////////////////////////////

// let show = {
//     showName:"How I Met Your Mother",
//     characters:[
//     {

//   	name:"Ted",
//   	age: 35,
//   	job: ["Architect"]
//   },
//   {
//   	name: "Robin",
//   	age: 32,
//   	job: ["News Anchor", "Pop-Star"]
//   }
//   ]
// };

// console.log(show.characters[1].job[1])

//////////////////////////////////////////////

// var person = {
//     name:"melih",
//     lastName:"cansev",
//     age:"31",
//     introduce : ()=>{
//         return `My name is ${this.name} ${this.lastName} ${this.age}  `
//     }
// }

// console.log(person.introduce())

// person.myCity = function(){
// person.city= "izmir"

//     console.log(`I live in ${this.city}`)
// }

// person.myCity()
//////////////////////////////////////////////

// function Insan(isim,yas) {
//     this.isim = isim;
//     this.yas = yas;
//   }

//   const ali = new Insan("ali",21);
// console.log(ali.yas);
// // 21

// ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
// console.log(ali.yeniOzellik);
// // "Sonradan eklenmiş bir özellik"

//////////////////////////////////////////////

// //Bir constructor fonksiyonu oluşturalım.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   //Person constructor fonksiyonuna bir prototype nesnesi ekleyelim.
//   Person.prototype.sayHello = function() {
//     console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
//   }
  
//   //Bir Person nesnesi oluşturalım
//   var john = new Person("John", 25);
  
//   //John nesnesi Person prototype nesnesinde tanımlı olan sayHello metodunu kullanabilir
//   john.sayHello();
  

//////////////////////////////////////////////

// function Person (person_name,person_age,person_gender){
//     this.name = person_name,
//     this.age = person_age,
//     this.gender = person_gender,

//     this.greet = function(){
//         return ("Hi"+" " +this.name)
//     }
// }

// const person1 = new Person("John",23,"male");
// const person2 = new Person ("Sam",25,"female");

// console.log(person1.gender)
//////////////////////////////////////////////
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// // checking the prototype value
// console.log(Person.prototype); // { ... }
//////////////////////////////////////////////
// const foo = {
//     a:123,
//     b:true
// }
// var a = foo.a;
// var b = foo.b;

// var foo1 = {...foo};

// var {a,b} = foo

// console.log
//////////////////////////////////////////////
// let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
// let {name:foo}=person;

// console.log(foo)
////////////////////////////////////////////// map
// const USERS = ["AYSe","MehMET","tuğÇe","aKSel"];


// const new_users= USERS.map(user =>user.toLocaleLowerCase())

// console.log(new_users);


// const user_obj = USERS.map(item => {
//     return {userName:item,shortName:`${item[0]}.`,newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
// })

// console.log(user_obj)

