// try-catch, JavaScript ve diğer birçok programlama dillerinde hata yakalama mekanizmasıdır. try bloğu içinde, potansiyel olarak hata oluşabilecek kod yerleştirilir ve eğer bir hata oluşursa catch bloğu çalışır.

// try bloğu içindeki kod çalıştırılır ve eğer bir hata oluşmazsa, catch bloğu atlanır ve normal olarak program devam eder. Eğer bir hata oluşursa, çalıştırılacak olan catch bloğu belirli bir hata işleme kodu içerir. Bu işlem hata için bir log kaydı oluşturmak, hata mesajını görüntülemek, kullanıcıya bir uyarı vermek veya hata oluştuğunda programın nasıl devam edeceğini belirlemek için kullanılabilir.

// try-catch bloğunun kullanılması, programın hata oluştuğunda çökmemesini ve hata oluştuğunda programın nasıl yanıt vereceğini belirlememizi sağlar. Bu, kullanıcılar için daha iyi bir kullanıcı deneyimi sağlar ve ayrıca, hata oluştuğunda hata kayıtlarını almamıza ve hata nedenini takip etmemize olanak tanır.

// try {
//     uyariver("Merhaba JavaScript");
//   }
//   catch(e) {
//     alert(e);
//   }
///////////////////////////////////////////

// try {
//    console.log("Kodları test etmek için çalıştırılacak kod bloğu") 
// }
// catch(e) {
//     console.log(e)
// }
///////////////////////////////////////////
// var yas = prompt();

// try {
//   if(yas == "") throw "Boş değer";
//   if(isNaN(yas)) throw "Sayı değil";
//   yas = Number(yas);
//   if(yas < 18) throw "Yaşın 18'den küçük";
//   if(yas > 65) throw "Yaşın 65'den büyük"
// }
// catch(hata) {
//   alert(hata);
// }finally {
//     //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
//   }
///////////////////////////////////////////
// setTimeout(function() {
//     try {
//         // error in the code
//         console.log("Kodları test etmek için çalıştırılacak kod bloğu") 
//     } catch {
//         console.log( "error is caught" );
//     }
// }, 3000);
///////////////////////////////////////////
// try {
//     //Çalıştırılacak kodlar
//   }catch(hata) {
//     //Hata yakalandığında çalışacak kodlar
//   }finally {
//     //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
//   }

///////////////////////////////////////////
//     <input type="text" id="dogumTarihi" />
// <button onclick="valid()">Gönder</button>

// function valid(){
//     try {
//         if (document.querySelector("#dogumTarihi").value == "") {
//             throw 'Doğum tarihini boş geçemezsiniz';
//         };
//     }catch(err) {
//         alert(err);
//     }
// }

///////////////////////////////////////////
//json dosyası üzerinden veri çektik
// fetch("/settings.json")
//     .then(response => {
//         return response.json()
//     }).then(responseJson => {
//         console.log(responseJson)
//         console.log(responseJson.userName)
//     })

// let userListDom = document.querySelector("#userList")
//     //apı üzerinden veri çektik
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(responseJson => {
//     responseJson.forEach(item => {
//         let liDom = document.createElement("li")
//         liDom.innerHTML = item.name
// userListDom.appendChild(liDom)
//     })

        // console.log(item)) //tek tek konsola yazdırdık
    // console.log(responseJson) 
    // console.log(responseJson[0])
// })

