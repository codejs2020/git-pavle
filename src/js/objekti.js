/* eslint-disable no-unused-vars */
// 1
const osobe = {
  clanovi: [
    {
      ime: 'Pera',
      prezime: 'Peric',
      zanimanje: 'Lekar',
      visina: 180,
      tezina: 90
    },
    {
      ime: 'Laza',
      prezime: 'Lazic',
      zanimanje: 'Advokat',
      visina: 170,
      tezina: 80
    },
    {
      ime: 'Maja',
      prezime: 'Majic',
      zanimanje: 'Profesor',
      visina: 170,
      tezina: 55
    },
    {
      ime: 'Marko',
      prezime: 'Markovic',
      zanimanje: 'Programer',
      visina: 190,
      tezina: 80
    },
    {
      ime: 'Vera',
      prezime: 'Veric',
      zanimanje: 'Student',
      visina: 165,
      tezina: 50
    }
  ]
}
// 2
const automobili = {

  ponuda: [
    {
      marka: 'Fiat',
      boja: 'Crna',
      brojVrata: 4
    },
    {
      marka: 'Mazda',
      boja: 'Crvena',
      brojVrata: 4
    },
    {
      marka: 'Opel',
      boja: 'Siva',
      brojVrata: 2
    },
    {
      marka: 'Volksvagen',
      boja: 'Plava',
      brojVrata: 4
    },
    {
      marka: 'Tojota',
      boja: 'Bela',
      brojVrata: 2
    }
  ]
}
// 3
osobe.clanovi[0].automobil = automobili.ponuda[1]
osobe.clanovi[1].automobil = automobili.ponuda[0]
osobe.clanovi[2].automobil = automobili.ponuda[4]
osobe.clanovi[3].automobil = automobili.ponuda[1]
osobe.clanovi[4].automobili = automobili.ponuda[1]
osobe.clanovi[4].automobili.push = automobili.ponuda[1]

// 4
const osobaNiz = ['Pera', 'Peric', 'Lekar', 180, 90]
const osobaObjekat = {}
osobaObjekat.ime = osobaNiz[0]
osobaObjekat.prezime = osobaNiz[1]
osobaObjekat.zanimanje = osobaNiz[2]
osobaObjekat.visina = osobaNiz[3]
osobaObjekat.tezina = osobaNiz[4]

// 5

// const tableToObject = (table) => {

// }
