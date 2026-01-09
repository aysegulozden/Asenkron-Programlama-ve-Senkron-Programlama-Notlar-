//CallBack Nedir
/*
Asenkron problemini çözmek için kullanılan en eski çözüm yolu. ŞUAN KULLANILMIYOR.
Bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz
*/

function getName(callBack) {
  setTimeout(() => {
    console.log("Aysegul");
    callBack();
  }, 1000);
}

function getSurname() {
  setTimeout(() => {
    console.log("Ozden");
  }, 500);
}

getName(getSurname);

// getName();
// getSurname();
