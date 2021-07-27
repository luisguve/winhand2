// Evita pasar el evento al contenedor al hacer click sobre el menu
document.querySelector("#menu").onclick = e => e.stopPropagation()

const contenedorMenu = document.querySelector(".contenedor-menu")
// Cierra el menu cuando se hace click fuera de el
contenedorMenu.onclick = () => cerrarMenu()

const btnCerrar = document.querySelector(".close")
btnCerrar.onclick = cerrarMenu

document.querySelector(".slide a").onclick = abrirMenu

function abrirMenu() {
  contenedorMenu.classList.add("abierto")
  menu.classList.add("abierto")
}
function cerrarMenu() {
  contenedorMenu.classList.remove("abierto")
  menu.classList.remove("abierto")
}

if (window.ethereum) {
  handleEthereum();
} else {
  window.addEventListener('ethereum#initialized', handleEthereum, {
    once: true,
  });

  // If the event is not dispatched by the end of the timeout,
  // the user probably doesn't have MetaMask installed.
  setTimeout(handleEthereum, 3000); // 3 seconds
}

function handleEthereum() {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    alert('Ethereum successfully detected!');
    // Access the decentralized web!
  } else {
    alert('Please install MetaMask!');
  }
}