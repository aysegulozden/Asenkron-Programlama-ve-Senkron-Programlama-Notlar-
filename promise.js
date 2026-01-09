// ---------PROMİSE---------
//CALLBACKLERİN GELİŞMİŞ VERSİYONU . ASENKRON PROGRAMLAMALARI SENKRONA ÇEVİRMEDE KULLANILIR
// Eğer promisemiz başarılı bir şekilde çalışırsa bunu ".then" ile yakalarız.sonucu
//Eğer promisemiz başarısız olursa bunu ".catch" ile yakalarız.sonucu


const check= true;

// const promise1=new Promise ((resolve, reject)=>{

//     if(check){
//         resolve("Promise başarılı")
//     }
//     else{
//         reject("Promise başarısız")
//     }
// })
// console.log(promise1)

function createPromise (){
    return new Promise((resolve , reject)=>{
        if(check){
            resolve("Promise başarılı")
        }else{
            reject("Promise başarısız")
        }
    })
}
createPromise()
.then((respons)=>{
    console.log(respons)
})
.catch((error)=>{
    console.log(error)
})