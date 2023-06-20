//responsivo
const menuMobile = document.querySelector('.menuMobile');
const nav = document.querySelector('.navBar');

menuMobile.addEventListener('click', () => {
   nav.classList.toggle('active');
});

//modal
const abrirYalle = document.querySelector('.abrirYalle');
const fecharModal = document.querySelector('.sairModal');
const fecharMobile = document.querySelector('.sair');
const modalYalle = document.querySelector('.modalYalle');

abrirYalle.onclick = function() {
   modalYalle.showModal();
}
fecharModal.onclick = function() {
   modalYalle.close();
}
fecharMobile.onclick = function() {
   modalYalle.close();
}


//efeito maquina
const texto = document.querySelector(".tituloInicio");
function maquinaEscrever(elemento) {
   const textoArray = elemento.innerHTML.split('');//cada letra vira um indice da array
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