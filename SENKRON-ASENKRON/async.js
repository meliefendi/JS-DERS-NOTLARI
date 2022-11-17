function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("veriler alınmaya çalışılıyor")

        if (data) {
            resolve("veriler alındı")
        } else {
            reject("veriler alınamadı")
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("veriler düzenleniyor")

        if (receivedData) {
            resolve("veriler düzenlendi")
        } else {
            reject("veriler düzenlenemedi")
        }
    })
}
///////////promise

// getData(true)
// .then(result =>{
//     console.log(result);
//     return cleanData(true)
// }).then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error)
// })


////////////////async/await 

//burda try catch i kullanıyoruz sebebi hatayı yakalamak üzerine methodumuz yok false verdiğimizde hatayı doğru şekilde almamızı try catch özelliği sağlıyor.

// async function procesData() {
  
//         const receivedData = await getData(false);
//         console.log(receivedData);
//         const cleanedData = await cleanData(true)
//         console.log(cleanedData);
//     } 


// procesData();


async function procesData() {
    try {
        const receivedData = await getData(false);
        console.log(receivedData);
        const cleanedData = await cleanData(true)
        console.log(cleanedData);
    } catch (error) {
        console.log(error)
    }
}

procesData();