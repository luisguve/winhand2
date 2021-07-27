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
