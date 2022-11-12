let add = document.getElementById("add");

add.classList.add("fancy","add","addMethod");

add.innerHTML = add.classList;

let yaz = document.getElementById("pAdd").innerHTML = add.classList;


// add.classList.remove("addMethod");
// document.getElementById("pRemove").innerHTML = add.classList;


document.getElementById("pItem").innerHTML = add.classList.item(0);

// alert(add.classList[0])

//document.getElementById("pContainsTrue").innerHTML = add.classList.contains("addMethod")
// let truee = add.classList.contains("class");

// if(truee == true) 
// { alert("TRUE");
//  } else { 
//   alert("FALSE");
//  }

// document.getElementById("pContainsFalse").innerHTML = add.classList.contains("addMethod")



add.classList.replace("add","newClass");
document.getElementById("pReplace").innerHTML = add.classList;




let pToggle = document.getElementById("pToggle");
let buton = document.getElementById("toggleButton");

buton.addEventListener("click",function(){
  buton.classList.toggle("colorp")
})

document.getElementById("length").innerHTML = add.classList.length;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let div = document.getElementById("add");
// div.classList.add("fancy","add","addMethod")

// document.getElementById("pAdd").innerHTML = div.classList;

// div.classList.remove("addMethod");
// document.getElementById("pRemove").innerHTML = div.classList;


// document.getElementById("pItem").innerHTML ="İlk class ı yazdırmaca " + div.classList.item(0)

// document.getElementById("pContainsTrue").innerHTML = div.classList.contains("add");
// document.getElementById("pContainsFalse").innerHTML = div.classList.contains("addMethod");

// div.classList.replace("add","newClass");
// document.getElementById("pReplace").innerHTML = div.classList;


// let ptoogle = document.getElementById("pToggle");
// let buton = document.getElementById("toggleButton");
// buton.addEventListener("click",function(){
//   ptoogle.classList.toggle("colorp")
// })

// document.getElementById("length").innerHTML = div.classList.length;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
burda da dom eventine click beriyoruz ve tıklanan bilginin neresi veya içeriğine ulaşabiliyoruz
let greeting = document.getElementById("greeting")

greeting.addEventListener("click",domClick);

function domClick(){
    console.log("tıklandı") //tıklandı
    console.log(this) //<h1 id="greeting">Kodluyoruz - Front-End 101</h1>
  console.log(this.innerHTML) //Kodluyoruz Front-End
   console.log(this.innerHTML = "içeriği istediğimiz gibi değiştiriyoruz")
   console.log(this.style.color = "red") //,çeriği kırmızı yapar
  this.style.color = "red //bu da konsala yazmadan yazıyı kırmızı yapar.
  
this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" //burda da toggle varmış gibi her tıklandığında değişim gösterir.yani kırmızıysa siyah yapar, siyahsa kırmızı yapar.
  
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ve toggle kullanımı :

// let greeting = document.getElementById("greeting")

// greeting.addEventListener("click",function(){
//     greeting.classList.toggle("text-primary")
// })
