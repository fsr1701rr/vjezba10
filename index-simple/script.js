// var korisnici =[
//     { korisnicko_ime:"Mateo222",datum_registracije:"2022-01-15",premium_pretplata: true},
//     { korisnicko_ime:"Marija111",datum_registracije:"2022-02-15",premium_pretplata: false},
//     { korisnicko_ime:"Magdalena222",datum_registracije:"2022-07-11",premium_pretplata: true},
//     { korisnicko_ime:"Mila665",datum_registracije:"2022-01-08",premium_pretplata: true},
//     { korisnicko_ime:"David88",datum_registracije:"2022-05-08",premium_pretplata: false},
// ];
// var premiumKorisnici= document.querySelector("#premium-korisnici");
// var freemiumKorisnici= document.querySelector("#freemium-korisnici");

// // for (var i=0; i<korisnici.length; i++){
// //     var korisnik=korisnici[i];
// //     let listItem=document.createElement("li")
// //     listItem.textContent=korisnik.korisnicko_ime;

// //     if (korisnik.premium_pretplata){
// //         premiumKorisnici.appendChild(listItem);
// //     } else {
// //         freemiumKorisnici.appendChild(listItem);
// //     }
// //     }

//     //zadatak2
//     const nizFilmova=[
//         {
//             naslov:'Titanic',
//             oznaka:[
//                 {
//                     ime:'romanticna komedija',
//                     slug:'rom-kom'
//                 }
//                 {
//                     ime:'Avantura',
//                     slug:'avan'
                
//                 }
//             ]
//         }
//     ]
   
        
    
// for (let index=0; index<nizFilmova.length; index++){
//     const film=nizFilmova[index];
//     const kontejner=document.createElement("div");
//     const naslovFilma=document.createElement("h2");
//     naslovFilma.textContent=film.naslov;
//     kontejner.appendChild(naslovFilma);
//     const nizOznaka=film.oznake;

//     document.body.appendChild(kontejner);
// }  

// function provjeri(){
//     const randomBroj=Math.floor(Math.random()*5 +1);
//     if (randomBroj==1){
//         rezultatParagraf.textContent="bravo,pogodili ste broj 1";
//     }{
//        rezultatParagraf.textContent="zao nam je,pokusajte opet";
    
//     }
//         }
//         const rezultatParagraf=document.querySelector("p");
//         const nasiButtoni=document.querySelectorAll("button");
//         nasiButtoni.forEach((button) => {
//             button.addEventListener("click",provjeri);

//         });

//         function biraj(event){
//             const vrijednost=event.target.textContent;
//             nizBrojeva.push(vrijednost);
//             console.log("nizBrojeva");
//             console.log(nizBrojeva);
        
//         }
//         function pozovi(){
//             console.log("nizBrojeva")
//             console.log(nizBrojeva.join(""))
//             nizBrojeva=[]

//         }
//         let nizBrojeva=[];
//         const pozoviButton=document.querySelector(".pozovi");
//         pozoviButton.addEventListener("click",pozovi);
//         const nasiBrojevi=document.querySelectorAll(".brojevi");
//         nasiBrojevi.forEach((button)=>{
//             button.addEventListener("click",biraj);
//         });
// function handleSearch(event){
//     const korisnikInput=event.target.value;
//     for (let index=0; index<stavkeListe.length; index++){
//         const stavka=stavkeListe[index];
//         if(stavka.textContent.includes(korisnikInput)){
//             stavka.style.display="List-Item";
//         }
         
//             else stavka.style.display="none"
//         }

//     }
    

//     const stavkeListe=document.querySelectorAll("li");
//     const unosTrazilice=document.querySelector("input");
//     unosTrazilice.addEventListener("input",handleSearch);

//"kamen"
//"skare"
//"papir"
 const OPTIONS =["kamen","skare","papir"];
 const rand=Math.floor(Math.random()* OPTIONS.length);
 console.log(OPTIONS[rand]);
const paraRez = document.getElementById('rez');
let userScore=0;
let computerScore=0;
const playerScoreCount=document.getElementById("player-score");
const computerScoreCount=document.getElementById("computer-score");

const updateScore =() => {
    playerScoreCount.textContent=userScore;
    computerScoreCount.textContent=computerScore;
}

const checkResult=(event) => {
    const userInput=event.target.textContent.toLowerCase();
    const randomInput=OPTIONS[Math.floor(Math.random()*OPTIONS.length)];

    if (userInput===randomInput){
        paraRez.textContent = "It's a tie!"
    }else if(
        (userInput==="kamen"&& randomInput==="skare")||
        (userInput==="skare"&& randomInput==="papir")||
        (userInput==="papir"&& randomInput==="kamen")
    ){
        paraRez.textContent = "Congrats,you won."
        userScore++;
        updateScore();
    } else{
        paraRez.textContent = "You lose.Try again"
        computerScore++;
        updateScore();
    }
};

const buttonArray= document.querySelectorAll("button");
buttonArray.forEach((button) => {
    button.addEventListener("click",checkResult);
})

const paragraf=document.querySelector('p');