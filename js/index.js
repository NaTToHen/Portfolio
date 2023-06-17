
//efeito maquina
const texto = document.querySelector(".tituloInicio");
function maquinaEscrever(elemento) {
   const textoArray = elemento.innerHTML.split('');
   elemento.innerHTML = '';
   textoArray.forEach((letra, i) => {
      setTimeout(function() {
         elemento.innerHTML += letra;
      }, 300 * i);
   });
}
maquinaEscrever(texto);

//oculta btnTopo
const btnTopo = document.querySelector('#topo');
btnTopo.addEventListener('click', () => {
   window.scrollTo(0, 0);
});
document.addEventListener('scroll', ocultaBtn);

function ocultaBtn() {
   if(window.scrollY > 10) {
      btnTopo.style.display = 'flex';
   } else {
      btnTopo.style.display = 'none';
   }
}
ocultaBtn();

//efeito header
window.addEventListener('scroll', function() {
   const header = document.querySelector('#header');
   header.classList.toggle('fundoHeader', window.scrollY > 20);
});