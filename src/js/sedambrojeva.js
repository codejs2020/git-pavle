/* eslint-disable no-unused-vars */

const poljeZaIspisBrojeva = document.getElementById('brojevi')
const dugme = document.getElementById('dugme')
const izvuceniBrojevi = []

function generisiBrojeve (odKoliko, doKoliko, brojIzvucenih) {
  const brojevi = []
  for (let i = odKoliko; i <= doKoliko; i++) {
    brojevi.push(i)
  }
  for (let i = brojevi.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = brojevi[i]
    brojevi[i] = brojevi[j]
    brojevi[j] = temp
  }
  for (let i = 0; i < brojIzvucenih; i++) {
    izvuceniBrojevi.push(brojevi.pop())
  }
  return izvuceniBrojevi
}
dugme.addEventListener('click', function () {
  poljeZaIspisBrojeva.innerHTML = generisiBrojeve(1, 36, 7)
})
