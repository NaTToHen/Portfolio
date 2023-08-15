//responsivo
const menuMobile = document.querySelector('.menuMobile');
const nav = document.querySelector('.navBar');

menuMobile.addEventListener('click', () => {
   nav.classList.toggle('active');
});

//modal
const fecharModalYalle = document.querySelector('.YalleSair');
const fecharModalCalcula = document.querySelector('.CalculaSair');

const fecharMobileYalle = document.querySelector('.sairMobileYalle');
const fecharMobileCalcula = document.querySelector('.sairMobileCalcula');

const abrirYalle = document.querySelector('.abrirYalle');
const modalYalle = document.querySelector('.modalYalle');

const modalCalculaGasto = document.querySelector('.modalCalculaGasto')
const abrirCalculaGasto = document.querySelector('.abrirCalculaGasto')

function abreModal(modal) {

   if(modal == "modalYalle") {
      abrirYalle.onclick = function() {
         modalYalle.showModal();
      }
      fecharModalYalle.onclick = function() {
         modalYalle.close();
      }
      fecharMobileYalle.onclick = function() {
         modalYalle.close();
      }
   } else if(modal == "modalCalculaGasto") {
      abrirCalculaGasto.onclick = function() {
         modalCalculaGasto.showModal();
      }
      fecharModalCalcula.onclick = function() {
         modalCalculaGasto.close();
      }
      fecharMobileCalcula.onclick = function() {
         modalCalculaGasto.close();
      }
   }

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