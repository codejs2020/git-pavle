/* eslint-disable no-unused-vars */
// 1
const niz1 = ['a', 'b', 'c']
// 2
const niz2 = [1, 2, 3]
// 4
const randomVelikiNiz = () => {
  const randomNiz = []
  for (let i = 0; i < 50; i++) {
    const broj = Math.ceil(Math.random() * 1000000)
    for (const num in randomNiz) {
      if (broj !== num) {
        randomNiz.push(broj)
      } else {
        i--
      }
    }
  }
  return randomNiz
}
// 5
const nizSlova = () => {
  const niz = []
  const slova = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < 200; i++) {
    niz.push(slova[Math.ceil(Math.random() * 26)])
  }
  return niz
}
// 6
const cetiriNiza = () => {
  const slova = 'abcdefghijklmnopqrstuvwxyz'
  const nizSlova = slova.split()
  for (let i = nizSlova.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = nizSlova[i]
    nizSlova[i] = nizSlova[j]
    nizSlova[j] = temp
  }
  let niz1, niz2, niz3, niz4
  for (let i = 0; i < 3; i++) {
    niz1.push(nizSlova.pop())
    niz2.push(nizSlova.pop())
    niz3.push(nizSlova.pop())
  }
}

// 7

for (const i in niz1) {
  console.log(niz1[i])
}

// 8

for (let i = 0; i < niz1.length; i++) {
  console.log(niz1[i])
}
