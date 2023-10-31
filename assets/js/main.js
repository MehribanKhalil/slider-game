//slider task

// const img=document.querySelectorAll('img')
// const main=document.querySelector('.main-img')

// // way1
// img.forEach(element => element.onclick=()=>main.src=element.src);

// // way2
// img.forEach(element => element.onclick=()=>main.setAttribute('src' , element.getAttribute("src")));


//game


const rock1 = document.getElementById('rock1')
const paper1 = document.getElementById('paper1')
const scissors1 = document.getElementById('scissors1')
const rock2 = document.getElementById('rock2')
const paper2 = document.getElementById('paper2')
const scissors2 = document.getElementById('scissors2')
const birinciOyuncununSecimi = document.getElementById('birinciOyuncununSecimi')
const ikinciOyuncununSecimi = document.getElementById('ikinciOyuncununSecimi')

const secimler=['rock','paper','scissors']



// rock1.addEventListener('click',()=>{
//     birinciOyuncununSecimi.textContent='rock'
// })
// paper1.addEventListener('click',()=>{
//     birinciOyuncununSecimi.textContent='paper'
// })
// scissors1.addEventListener('click',()=>{
//     birinciOyuncununSecimi.textContent='scissors'
// })




// rock2.addEventListener('click',()=>{
//     ikinciOyuncununSecimi.innerHTML='rock'
// })
// paper2.addEventListener('click',()=>{
//     ikinciOyuncununSecimi.innerHTML='paper'
// })
// scissors2.addEventListener('click',()=>{
//     ikinciOyuncununSecimi.innerHTML='scissors'
// })

// function secim(param) {
//     param.addEventListener('click',()=>{
//         birinciOyuncununSecimi.innerHTML=`birinci oyuncunun secimi ${param}`
//         console.log(birinciOyuncununSecimi);
//     })
// }

secimler.forEach(element => {
    // console.log(element);
   element.addEventListener("click")
    
});



// function oyuncu1(birinciOyuncununSecimi) {
    
// }

// function oyuncu2() {
    
// }


// secim(paper1)