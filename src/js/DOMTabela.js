/* eslint-disable no-unused-vars */
const domTabela = document.getElementById('domTabela')
const redovi = document.getElementById('redovi')
const kolone = document.getElementById('kolone')
const dugme = document.getElementById('dugme')

for (let i = 0; i < 22; i++) {
  redovi.innerHTML += `<option>${i}</option>`
  kolone.innerHTML += `<option>${i}</option>`
}

function generisiTabelu (brojRedova, brojKolona) {
  let tabela = '<table>'
  for (let i = 0; i < brojRedova; i++) {
    tabela += '<tr>'
    for (let j = 0; j < brojKolona; j++) {
      tabela += `<td>${j}</td>`
    }
    tabela += '</tr>'
  }
  tabela += '</table>'
  return tabela
}
dugme.addEventListener('click', function () { domTabela.innerHTML = generisiTabelu(parseInt(redovi.value), parseInt(kolone.value)) })
