let preostaloPokusaja = 5
const broj = Math.floor(Math.random() * 100)
while (preostaloPokusaja > 0) {
  const pokusaj = prompt(`Pogodi broj od 0 do 99, imas jos ${preostaloPokusaja} pokusaja`)
  if (pokusaj === broj) {
    alert('BRAVO ! POGODIO SI!')
    break
  } else {
    if (pokusaj > broj) {
      alert(`Moj broj je manji od ${pokusaj} `)
      preostaloPokusaja--
    } else {
      alert(`Moj broj je veci od ${pokusaj}`)
      preostaloPokusaja--
    }
    if (preostaloPokusaja === 0) {
      alert(`Nisi uspeo da pogodis! Broj je bio ${broj}`)
    }
  }
}
