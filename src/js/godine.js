/* eslint-disable no-unused-vars */
const listaGodina = document.getElementById('listaGodina')
function generisiGodine (pocetna, zavrsna) {
  for (let i = pocetna; i < zavrsna + 1; i++) {
    listaGodina.innerHTML += `<option>${i}</option>`
  }
}

generisiGodine(1900, 2020)
