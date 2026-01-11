//? ---------FETCH API KULLANIMI ------
// server'a istek atmak için kullanırız
//* fetch API ile url'mize istek attık bize Promise döndü ama "response" tipinde döndü
//* bizim response içindeki "json" metodunu kullanmamız lazım
//* o yüzden iki tane than kullanıyoruz

function getStudents(url){
    fetch(url)
    .then((response)=> {
        return response.json() // json metodunu yakaladık ama bu da bizze promise dönüyor
    })
    .then((data)=>{
        console.log(data) // istediğimiz datayı yakaladık ve konsola bastık
    })
    .chatch((error)=>console.log(error))
  

}
getStudents("student.JSON")