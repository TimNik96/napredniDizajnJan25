// 1. Na osnovu unosa korisnika, kreirati broj paragrafa koji korisnik unese u input.
// 2. Izbrisati paragraf koji korisnik zeli.
// 3. Napraviti dva inputa. Uneti dva broja od kojih treba ispisati u paragrafu sledece:
//    Zbir brojeva je: 
//    Razlika brojeva je: 
//    Proizvod brojeva je: 
//    Akcija se desava na klik dugmeta Pokreni.

// 1. 
// const body = document.body
// const inputBrojParagrafa = document.querySelector("#brojParagrafa")
// const btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//     // I nacin
//     // if(+inputBrojParagrafa.value > 0)
//     // {
//     //     for(let i = 0; i < +inputBrojParagrafa.value; i++) {
//     //         const p = document.createElement("p")
//     //         p.textContent = "Neki test paragraf"
//     //         p.style.color = "#00f"
//     //         body.appendChild(p)
//     //     }
//     // } else {
//     //     alert("Morate uneti broj koji je veci od 0!")
//     // }

//     // II nacin Guard clause
//     if(+inputBrojParagrafa.value <= 0) {
//         alert("Morate uneti broj koji je veci od 0!")
//         return
//     }

//     for(let i = 0; i < +inputBrojParagrafa.value; i++) {
//         const p = document.createElement("p")
//         p.textContent = "Neki test paragraf"
//         p.style.color = "#00f"
//         body.appendChild(p)
//     }
// })

// 2. 
// const allP = document.querySelector(".pContainer")
// const inputBrojZaBrisanje = document.querySelector("#brojZaBrisanje")
// const btnBrisi = document.querySelector("button")

// btnBrisi.addEventListener("click", () => {
//     if(+inputBrojZaBrisanje.value < 0 || +inputBrojZaBrisanje.value > allP.children.length) {
//         alert(`Morate uneti odgovarajuci broj of 1 do ${allP.children.length}.`)
//         return
//     }

//     for(let i = 0; i < allP.children.length; i++)
//     {
//         if(i === +inputBrojZaBrisanje.value - 1) {
//             allP.children[i].style.opacity = 0;
//         }
//     }
// })

// 3.
const pRezultat = document.querySelector(".rezultat")
const inputPrviBroj = document.querySelector("#prviBroj")
const inputDrugiBroj = document.querySelector("#drugiBroj")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let zbir = "Zbir brojeva je: " + (+inputPrviBroj.value + +inputDrugiBroj.value) 
    let razlika = `Razlika brojeva je: ${+inputPrviBroj.value - +inputDrugiBroj.value}`
    let proizvod = `Proizvod brojeva je: ${+inputPrviBroj.value * +inputDrugiBroj.value}`      
    pRezultat.innerHTML = `${zbir} <br> ${razlika} <br> ${proizvod}`
}) 