function clickConfirmButton() {
  // Selector típico del contenedor del modal y botón de confirmación en YouTube Music
  const modalSelectors = [
    'ytmusic-you-there-renderer #confirm-button',
    'tp-yt-paper-dialog #confirm-button',
    'yt-confirm-dialog-renderer #confirm-button'
  ];

  for (const selector of modalSelectors) {
    const button = document.querySelector(selector);
    if (button && button.offsetParent !== null) { // Verifica que el botón esté visible
      console.log('[YTM Auto-Keep-Alive] Modal detectado. Confirmando reproducción...');
      button.click();
      return true;
    }
  }
  return false;
}

// 1. Escuchar cambios dinámicos en el DOM para actuar inmediatamente
const observer = new MutationObserver(() => {
  clickConfirmButton();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// 2. Respaldo por temporizador (cada 5 segundos) por si el modal ya estaba presente
setInterval(clickConfirmButton, 5000);