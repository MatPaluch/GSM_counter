let count = 0;
const body = document.querySelector('BODY');
const div = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const counter = document.createElement('p');
const reset = document.createElement('button');
div.style.padding = '12px';
div.style.backgroundColor = '#1b1e24';
div.style.position = 'fixed';
div.style.zIndex = '999';
div.style.bottom = '20px';
div.style.left = '20px';
div.style.borderRadius = '6px';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.flexWrap = 'wrap';
div.style.gap = '10px';
div.style.fontSize = '12px';
div.style.fontWeight = '700';
div.style.boxShadow = '0px 0px 12px 0px grey';
div.style.color = 'white';
input.style.width = '40px';
input.style.borderRadius = '4px';
input.style.color = 'black';
input.style.fontWeight = '400';
input.style.paddingLeft = '12px';
button.style.backgroundColor = '#337ab7';
button.style.borderRadius = '4px';
button.style.padding = '6px 12px';
button.textContent = "<- Licz pozycje";
counter.innerHTML = '0';
counter.style.margin = '0';
reset.textContent = "Reset";
reset.style.backgroundColor = 'rgb(255, 51, 108)';
reset.style.borderRadius = '4px';
reset.style.padding = '6px 12px';
body.append(div);
div.prepend(input, counter, button, reset);

button.addEventListener('click', () => {
  counter.textContent = liczPozycje(input.value);
});
reset.addEventListener('click', () => {
  count = 0;
  counter.textContent = '0';
});
input.addEventListener('keydown',e=>{
  e.key==='Enter'?counter.textContent = liczPozycje(input.value):false;
});

function liczPozycje(ini) {
  const tabela = document.querySelector("TBODY");
  const wiersze = Object(tabela.children);
  for (const klucz in wiersze) {
    if (wiersze[klucz].nodeName === "TR") {
      if (wiersze[klucz].childNodes[1].innerText === ini) {
        count++;
      }
    }
  }
  return count;
}

console.log('Dodano 2 funkcje liczPozycje() oraz reset().\n\nWpisz swoje inicjały z WIELKICH LITER w białe pole, a następnie kliknij "Licz pozycje".\n\nOtrzymamy liczbe policzonych pozycji na JEDNEJ stronie! Aby policzyć kolejną stronę kliknij w nią i ponownie kliknij "Licz pozycje", skrypt automatycznie zsumuje poprzednią i aktualną stronę.\n\nJeśli chcemy zresetować stan licznika klikamy przycisk "Reset".');
