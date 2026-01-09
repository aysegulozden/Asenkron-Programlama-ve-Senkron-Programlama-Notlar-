//ASENKRON PROBLEMİ

const users = [
  {
    userId: 5,
    post: "Ayse post1",
  },
    {
    userId: 5,
    post: "Ayse post2",
  },
    {
    userId: 9,
    post: "Nisa post1",
  },
    {
    userId: 7,
    post: "Ece post1",
  },
];

function getUserById(userId){
    setTimeout(() => {
        //servise gittik ve cevabı aldık 
        return 5;
    }, 1000);
}


function getPostByUserId(userId){

    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId === userId){
               console.log(user.post
               ) 
            }
        })
    }, 500);

}

let userId= getUserById();
getPostByUserId(userId);

//ÇIKTI: Ekranda hiçbir şey çıkmaz çünkü getUserById fonksiyonunuz çağırıyoruz ama o fonksiyon 
//setTimeout içerdiği için asenkron bir fonksiyondur daha sonra getPostUserById fonksiyonunu çalışıyor
//ama o da setTimeout içerdiği için o da asenkron bir fonksiyon olarak çalışıyor.
