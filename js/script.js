const secciones = document.querySelectorAll('main section')
const enlacesMenu = document.querySelectorAll('.navbar .nav-link')
const menu = document.querySelector('#navbarMenu')

// para detectar mediante scroll que sección está viendo el usuario y destacar su enlace en el navbar
window.addEventListener('scroll', () => {
  let seccionActual = ''

  for (let i = 0; i < secciones.length; i++) {
    const seccion = secciones[i]
    const posicionSeccion = seccion.offsetTop

    if (window.scrollY >= posicionSeccion - 150) {
      seccionActual = seccion.id
    }
  }

  // recorrer los enlaces del menu
  for (let i = 0; i < enlacesMenu.length; i++) {
    const enlace = enlacesMenu[i]

    enlace.classList.remove('activo')

    const destinoEnlace = enlace.getAttribute('href')

    if (destinoEnlace === '#' + seccionActual) {
      enlace.classList.add('activo')
    }
  }
})

// para que en dispositivos moviles,se cierre el menú hamburguesa después de seleccionar una sección
for (let i = 0; i < enlacesMenu.length; i++) {
  const enlace = enlacesMenu[i]

  enlace.addEventListener('click', function () {
    if (menu.classList.contains('show')) {
      const menuBootstrap = bootstrap.Collapse.getOrCreateInstance(menu)

      menuBootstrap.hide()
    }
  })
}
