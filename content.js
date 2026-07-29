// Función para confirmar la presencia y simular el clic en el botón "Sí"
function handleYouTubeYouThereModal() {
  // 1. Intentamos seleccionar el modal de inactividad
  const dialog = document.querySelector('tp-yt-paper-dialog ytmusic-you-there-renderer');
  
  if (dialog) {
    // Buscar el botón dentro de la estructura de YouTube
    const confirmButton = dialog.querySelector('yt-button-renderer[dialog-confirm] button') || 
                          dialog.querySelector('button[aria-label="Sí"]');

    if (confirmButton) {
      console.log('[Auto-Confirm] Modal de inactividad detectado. Confirmando...');
      confirmButton.click();
    }

    // 2. Por seguridad, forzamos la reanudación del reproductor si quedó pausado
    const videoElement = document.querySelector('video');
    if (videoElement && videoElement.paused) {
      videoElement.play().catch(err => {
        console.warn('[Auto-Confirm] No se pudo reanudar el reproductor automáticamente:', err);
      });
    }
  }
}

// Escuchar cambios en la estructura de la página (DOM)
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      handleYouTubeYouThereModal();
    }
  }
});

// Iniciar la observación en todo el cuerpo de la página
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Comprobación periódica alternativa (Safety Fallback) cada 3 segundos
setInterval(handleYouTubeYouThereModal, 3000);