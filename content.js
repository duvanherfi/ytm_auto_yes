console.log('[Auto-KeepAlive] Script cargado en el contexto MAIN.');

// Sobrescribimos y mantenemos viva la variable de actividad
setInterval(() => {
  // Reseteamos la variable nativa de inactividad de YouTube
  window._lact = Date.now();
}, 5000);

// Inyectamos CSS para ocultar cualquier modal sobrante
const style = document.createElement('style');
style.textContent = `
  ytmusic-you-there-renderer,
  tp-yt-paper-dialog:has(ytmusic-you-there-renderer) {
    display: none !important;
  }
`;

if (document.head) {
  document.head.appendChild(style);
} else {
  document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
}