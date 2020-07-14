/* eslint-disable no-unused-vars */

const poljeZaIspisBrojeva = document.getElementById('brojevi')
const dugme = document.getElementById('dugme')

function generisiBrojeve () {
  poljeZaIspisBrojeva.innerHTML = ' '
  const brojevi = []
  for (let i = 1; i < 37; i++) {
    brojevi.push(i)
  }
  for (let i = brojevi.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = brojevi[i]
    brojevi[i] = brojevi[j]
    brojevi[j] = temp
  }
  for (let i = 0; i < 7; i++) {
    poljeZaIspisBrojeva.innerHTML += brojevi.pop() + '<br>'
  }
}
dugme.addEventListener('click', generisiBrojeve)
