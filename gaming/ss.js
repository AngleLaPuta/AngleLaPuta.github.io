// Define las imágenes de publicidad.
const adPics = ["image01.jpg", "image02.jpg"];

// Inicializa el contador.
let adCounter = 0;

// Define la función para cambiar las imágenes de publicidad.
function cycleAd() {
  // Verifica si las imágenes son soportadas por el navegador.
  if (document.images) {
    // Obtiene la imagen actual.
    const currentAdPic = document.images[0];

    // Verifica si la imagen actual se ha cargado completamente.
    if (currentAdPic.complete) {
      // Incrementa el contador.
      adCounter++;

      // Resetea el contador si llega al final del array.
      if (adCounter >= adPics.length) {
        adCounter = 0;
      }

      // Establece la siguiente imagen de publicidad.
      currentAdPic.src = adPics[adCounter];
    }

    // Llama a la función de nuevo después de 500ms.
    setTimeout(cycleAd, 500);
  } else {
    // Si las imágenes no son soportadas, resetea el contador.
    adCounter = 0;
  }
}

// Define las imágenes a cambiar.
const myPics = ["image01.jpg", "image02.jpg"];

// Inicializa el índice de la imagen.
let myPicIndex = 0;

// Define la función para cambiar las imágenes.
function changePic() {
  // Incrementa el índice de la imagen.
  myPicIndex++;

  // Resetea el índice si llega al final del array.
  if (myPicIndex >= myPics.length) {
    myPicIndex = 0;
  }

  // Establece la siguiente imagen.
  document.images[0].src = myPics[myPicIndex];

  // Previene el comportamiento predeterminado del enlace.
  return false;
}

// Inicializa la página.
function init() {
  // Inicializa el ciclo de publicidad.
  cycleAd();

  // Agrega un evento al enlace para cambiar las imágenes al hacer clic.
  const link = document.getElementById("changePicLink");
  link.addEventListener("click", changePic);
}

// Espera a que la página se cargue completamente antes de inicializarla.
window.addEventListener("load", init);
