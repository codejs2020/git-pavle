/* eslint-disable no-unused-vars */
const poljeTeksta = document.getElementById('poljeTeksta')
const validacija = document.getElementById('validacija')
const tasterZaValidaciju = document.getElementById('tasterZaValidaciju')
const latinica = 'A,a,B,b,C,c,Č,č,Ć,ć,D,d,Dž,dž,Đ,đ,E,e,F,f,G,g,H,h,I,i,J,j,K,k,L,l,Lj,lj,M,m,N,n,Nj,nj,O,o,P,p,R,r,S,s,Š,š,T,t,U,u,V,v,Z,z,Ž,ž'.split(',')
const cirilica = 'А,а,Б,б,Ц,ц,Ч,ч,Ћ,ћ,Д,д,Џ,џ,Ђ,ђ,Е,е,Ф,ф,Г,г,Х,х,И,и,Ј,ј,К,к,Л,л,Љ,љ,М,м,Н,н,Њ,њ,О,о,П,п,Р,р,С,с,Ш,ш,Т,т,У,у,В,в,З,з,Ж,ж'.split(',')

function validirajCirilicu () {
  for (const i of poljeTeksta.value.split('')) {
    if (cirilica.includes(i)) {
      return 'Tekst je napisan u ćirilici'
    } else if (latinica.includes(i)) {
      return 'Tekst je napisan u latinici'
    } else {
      return 'Piši srpski da te ceo svet razume'
    }
  }
}

tasterZaValidaciju.addEventListener('click', function () { validacija.innerHTML = validirajCirilicu() })
