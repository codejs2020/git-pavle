/* eslint-disable no-unused-vars */
const forma = document.createElement('form')
document.body.appendChild(forma)
const listaGodina = document.createElement('select')
forma.appendChild(listaGodina)

function generisiGodine (pocetna, zavrsna) {
  for (let i = pocetna; i < zavrsna + 1; i++) {
    listaGodina.innerHTML += `<option>${i}</option>`
  }
}

generisiGodine(1900, 2020)
