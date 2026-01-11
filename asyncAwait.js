//?  ----- ASYNC AWAİT------
//* then kullanımı yerine async await kullanıyoruz
//! Bir function "async" ile işaretlenmişse geriye bize promise döner

/// Örnek: Aşağıda hem fetch API hem de async await kullanarak aynı işlemi yapıyoruz


// document.querySelector("#button").addEventListener("click",()=>{
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response)=>{
//     return response.json()
//   })
//   .then((post)=>{
//    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//    .then((response)=>{
//     return response.json()
//    })
//    .then((comments)=>{
//     console.log(comments)
//    })
//   })

// })

//* async ile yapılışı
document.querySelector("#button").addEventListener("click",async ()=>{
   const responsePost= await fetch("https://jsonplaceholder.typicode.com/posts/1")
   const post= await responsePost.json();
   const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
   const comments= await responseComments.json()
   console.log(comments)
})
