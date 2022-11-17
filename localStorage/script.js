


let user = {userName : "melih akkas",age :"31" }; //değişken içerisinde olduğu için konsoldan buraya ulaşmak mümkün isteiğin şekilde ve nesne şeklinde atıldığı için. Değiştirip string şekilde atınca ulaşılamıyo içerisine.

//[object object] = yukardaki gibi yani nesne verisi demek. //{userName : "melih akkas",age :"31" } = bu şekildeyse strimg veri türünde depolanmıştır.

//localStorage.setItem("userbilgisi",user); //burda bilgileri user bilgilerini userbilgisi key ine verdik.yani bu keyle user a ulaşabileceğiz.

localStorage.setItem("userbilgisi", JSON.stringify(user)); // burda bilgiyi [object object] sonucu çıkıyor diye veya usulü stringfy diye çevirisini yapıyoruz. zaten bu şekilde depolanır. 

let userBilgisi = localStorage.getItem("userbilgisi") //burda userBilgisi değişkeni içerisine getItem yöntemini atadık hızlı işlem yapabilmek için.

userBilgisi = JSON.parse(userBilgisi) //ve getItem metodunu parse edilmiş bilgisini userBilgisine atıyoruz, aşağıdaki işlemden sonra sebebi ise bilgileri alırken dediğim gibi kolay ulaşılabilir ve yöntemi bu olduğu için.
console.log(userBilgisi); 


//////////////////////////////////////////////////////parse etmeden önce aşağısı (ilk burası)

//son hali userBilgisi // '{"userName":"melih akkas","age":"31"}'  //yukarıdaki işlemlerden sonraki çıktısı bu şekilde

//bu işlemlerden sonra bilgilere ulaşmak için ister buraya ister tarayıcı konsoluna; 

//JSON.parse(userBilgisi) // {userName: 'melih akkas', age: '31'}  //userBilgisi'ni json.parse ediyoruz içeriğine ulaşmak için.

//userBilgisi = JSON.parse(userBilgisi) //{userName: 'melih akkas', age: '31'}   //parse edip bilgilere daha rahat ulaşabilmek için yani her seferinde bir üstteki metodu yazmamak için.

//userBilgisi.userName //'melih akkas' //istediğimizi bilgiye ulaşıyoruz.


