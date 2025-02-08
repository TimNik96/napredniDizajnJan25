// Metode za dohvatanje elemenata sa DOM-a

// const divElement = document.getElementById("mojDiv")
// const p = document.querySelector("div p")
// const allP = document.querySelectorAll("div p")
// const allClassElements = document.getElementsByClassName("mojaKlasa")
// const allElements = document.getElementsByTagName("article")

// Metode za manipulaciju contentom elemenata

// divElement.textContent
// divElement.innerText
// divElement.innerHTML
// divElement.innerHTML = "<h1> Pozdrav iz H1 </h1>"

// Stajliranje
// divElement.style.color = "#f00"
// divElement.style.backgroundColor = "#000"

// divElement.classList.add("element")
// divElement.classList.remove("element")
// divElement.className = "abc"

// Kreiranje elemenata i dodavanje na DOM
// const body = document.body
// body.style.backgroundColor = "#888"

// const div = document.createElement("div")
// body.appendChild(div)
// // body.append(p1, p2, p3)

// const p = document.createElement("p")
// p.textContent = "Pozdrav iz JS-a kroz paragraf!"
// p.style.color = "#fff"
// p.style.padding = "1rem"
// p.style.border = "1px solid #000"

// div.appendChild(p)

// ZADACI

// 1. Kreirati paragraf i u njega upisati svoje ime i prezime. U HTML-u 
//    napraviti klasu sa proizvoljnim stilom i dodati je paragrafu.
// 2. Kreirati x paragrafa u nekoj sekciji. Svaki paran treba da ima boju
//    teksta crvenu, a neparan boju pozadine crnu sa belim tekstom.
// 3. Napraviti HTML stranicu koja se sastoji od nekoliko elemenata. 
//    Evo strukture koja treba da se napravi.
        // <h1>Moj/moja prva stranica kreirana iz JS!</h1>
        // <section>
            // <h2>Mali podnaslov</h2>
            // <p>Ne ide mi lose!</p>
        // </section>
        // <footer class="footer">Ovaj tekst je centriran i ima padding 2rem.</footer>
// 4. Napisati kod koji ce iz dva inputa pokupiti vrednosti i sabrati. 
//    Rezultat se upisuje u paragraf ispod sa porukom. Sabiranje se pokrece na 
//    klik dugmeta.

// 1. 
// const body = document.body
// const p = document.createElement("p")

// p.textContent = "Nikola Timotic"
// p.classList.add("element")

// body.appendChild(p)

// 2. 
// let brojParagrafa = 20
// const body = document.body

// for(let i = 0; i < brojParagrafa; i++) {
//     const p = document.createElement("p")
//     p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, ea!"

//     if(i % 2 == 0)
//     {
//         p.style.color = "#f00"
//     } else {
//         p.style.backgroundColor = "#000"
//         p.style.color = "#fff"
//     }

//     body.appendChild(p)
// }

// 3.
// const h1 = document.createElement("h1")
// h1.textContent = "Moj/moja prva stranica kreirana iz JS-a!"

// const section = document.createElement("section")

// const h2 = document.createElement("h2")
// h2.textContent = "Mali podnaslov"

// const p = document.createElement("p")
// p.textContent = "Ne ide mi lose!"

// section.append(h2, p)

// const footer = document.createElement("footer")
// footer.classList.add("footer")
// footer.textContent = "Ovaj tekst je centriran i ima padding 2rem."

// document.body.append(h1, section, footer)

// 4.
const inputPrviBroj = document.querySelector("#broj1")
const inputDrugiBroj = document.querySelector("#broj2")
const pRezultat = document.querySelector(".rezultat")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    let rezultat = +inputPrviBroj.value + +inputDrugiBroj.value
    pRezultat.textContent = `Rezultat sabiranja je: ${rezultat}`
})
