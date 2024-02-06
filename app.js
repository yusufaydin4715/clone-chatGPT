/*
    ! tarayıcıların depolama alanları
    localStorage ve sessionStorage ,tarayıcının sundugu iki farklı web depolama


*/

// localStorage a veri ekleme
localStorage.setItem("kullaniciAdi","ömer");

//localStorage den veri çekme
const kullaniciAdi = localStorage.getItem("kullaniciAdi");
console.log(kullaniciAdi);