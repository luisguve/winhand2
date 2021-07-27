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

async function metamaskDetection() {
  const provider = await detectEthereumProvider()

  if (provider) {
    handleEthereum("detectEthereumProvider")
  } else {
    // handle no provider
    if (window.ethereum) {
      handleEthereum("window");
    } else {
      window.addEventListener('ethereum#initialized', () => handleEthereum("evento"), {
        once: true,
      });

      // If the event is not dispatched by the end of the timeout,
      // the user probably doesn't have MetaMask installed.
      setTimeout(() => handleEthereum("timeout"), 3000); // 3 seconds
    }
  }
}

metamaskDetection()


function handleEthereum(from) {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    alert('MetaMask detectado desde ' + from);
    // Access the decentralized web!
  } else {
    alert('Please install MetaMask!');
  }
}