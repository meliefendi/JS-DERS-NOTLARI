

const formDom = document.getElementById("userForm");
const input = document.getElementById("ınputScore");
const resetBtn = document.querySelector(".btnReset");
const gonderBtn = document.querySelector(".btnGonder");

////////////////////////////////////////////////////
// formDom.addEventListener("submit",formSubmit)

// function formSubmit(e){
// e.preventDefault(); 
// console.log("işlem engellendi");

// let inputScore = document.getElementById("ınputScore");
// console.log(inputScore.value);
// localStorage.setItem("formKayıt",inputScore.value)
// }
////////////////////////////////////////////////////

const newDiv = document.createElement("div"); //div elementi oluşturduk
userForm.appendChild(newDiv); //div elementini formun altına attık
newDiv.setAttribute("id","ekleDiv"); //div e id ekledik
const ekleDiv = document.getElementById("ekleDiv"); //div i seçip değişken atadık kş işlerimiz kolaylaşsın.

const newUl = document.createElement("ul");//ul elementi oluşturduk.
newDiv.appendChild(newUl); //ul elementini div e appendechild ettik.
newUl.setAttribute("id","ulNew"); //ul ye id verdik.



formDom.addEventListener("submit",function(e){       
    e.preventDefault()
    const newLi = document.createElement("li") //submit yapılınca li elementi oluşturmasını söyledik.

    newLi.textContent=input.value;  //li içerisine yazı olarak ne geleceğini söyledik.inputa girilen değer.
    input.value=""                //ve değer girildikten sonra input tekrar boş olması için bu şekilde ayarlama yapılması gerekli

    ulNew.appendChild(newLi)   //en son olarak appendchild ettik. sıralamayı düzgün yapmadığım için burası yüzünden çok uğraştım.Dikkat et.

});



