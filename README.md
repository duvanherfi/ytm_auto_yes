# 🎵 YouTube Music - Auto Confirm (No Pause)

Una extensión ligera para navegadores basados en Chromium (Google Chrome, Brave, Edge, Opera) que elimina las interrupciones por inactividad en **YouTube Music** ("*Se ha pausado el vídeo. ¿Quieres seguir viéndolo?*").

A diferencia de otras extensiones que esperan a que aparezca la ventana para hacerle clic, esta extensión mantiene actualizado el registro de actividad interno de la aplicación (`window._lact`), **evitando que el diálogo llegue a mostrarse** y eliminando las micro-pausas en la música.

---

## 🚀 Características

- ⚡ **Prevención en origen:** Actualiza el contador de inactividad nativo de YouTube Music en tiempo real.
- 🎨 **Sin interrupciones:** Previene que el modal interrumpa el flujo de audio.
- 🪶 **Ultra ligera:** Consumo de recursos prácticamente nulo y sin dependencias externas.
- 🔒 **Privacidad:** No recopila datos ni realiza peticiones a servidores externos.

---

## 📥 Instalación Manual (Modo Desarrollador)

Dado que es una extensión personalizada, puedes instalarla en tu navegador siguiendo estos pasos:

1. Ve a la sección de [Releases](../../releases) de este repositorio y descarga el archivo Zip de la última versión (`ytmusic-auto-confirm-v1.0.zip`).
2. Descomprime el archivo `.zip` en una carpeta de tu preferencia.
3. Abre tu navegador e ingresa a la sección de extensiones:
   - **Chrome / Brave:** `chrome://extensions/`
   - **Microsoft Edge:** `edge://extensions/`
4. Activa el **Modo de desarrollador** (palanca ubicada en la esquina superior derecha).
5. Haz clic en el botón **Cargar descomprimida** (Load unpacked).
6. Selecciona la carpeta donde descomprimiste los archivos.
7. ¡Listo! Abre o recarga [music.youtube.com](https://music.youtube.com) y disfruta tu música sin interrupciones.

---

## 🛠️ Estructura del Proyecto

```text
ytmusic-auto-confirm/
├── manifest.json
├── content.js
└── README.md