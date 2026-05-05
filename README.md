# Suárez & Abogados - Firma Jurídica Premium

Sitio web estático creado para "Suárez & Abogados", diseñado con un enfoque altamente profesional, estético y conversional. Optimizado especialmente para integrarse en **Google Sites** u otras plataformas de gestión mediante `iframe`.

## Características Principales

*   **Diseño Premium y Lujoso:** Paleta de colores sofisticada (Negro `#111111` y Dorado `#c5a880`), uso de fuentes elegantes (`Playfair Display` + `Plus Jakarta Sans`) y efectos de cristal asimétricos (Glassmorphism).
*   **Hero Interactiva (Slider):** Un carrusel de imágenes al lado derecho de la pantalla impulsado por **Swiper.js**, configurado para hacer transiciones en "fade" cada 4.5 segundos.
*   **UX Guiada por Pasos:** Sección estructurada "Acompañamiento Paulatino" para explicar al usuario cómo será asesorado.
*   **Grid Asimétrica (Bento Grid):** Formato visual para listar ramas jurídicas que escapa a los aburridos formatos de cuadrícula tradicionales.
*   **Totalmente Responsivo:** Menú estilo "hamburguesa" para teléfonos, y columnas que se auto ajustan a la resolución de pantalla.
*   **Animaciones on Scroll (AOS):** Elementos que aparecen suavemente a medida que el usuario inspecciona la web.

## Tecnologías Utilizadas

*   **HTML5** (Semántica estructurada)
*   **Vanilla CSS3** (Variables CSS, Flexbox, CSS Grid)
*   **Vanilla JS** (Interacciones del Navbar y menú móvil)
*   **Swiper.js** (Librería externa por CDN para el carrusel de imágenes)
*   **AOS.js** (Librería externa por CDN para las animaciones al hacer scroll)
*   **FontAwesome** (Librería de íconos)

## Cómo Verlo Localmente

No se requiere instalación de paquetes (no necesita Node.js ni servidor web).
Simplemente haz **doble clic** en el archivo `index.html` para abrirlo en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

## Instrucciones de Despliegue para Google Sites

Para poder integrar este código tan avanzado y personalizado dentro de Google Sites, primero necesitas alojarlo (subirlo) a un servidor gratuito, ya que Google Sites no permite subir carpetas creadas en código puro directamente.

1.  **Sube este proyecto a un Hosting Gratuito:**
    *   **Opción A (Netlify):** Entra a [netlify.com](https://www.netlify.com/), crea una cuenta gratuita. En la sección "Sites", simplemente arrastra y suelta toda la carpeta `Suarez_Abogados_Web`. Netlify te dará un link automático (ej. `mi-firma.netlify.app`).
    *   **Opción B (GitHub Pages):** Sube los archivos a un nuevo repositorio de GitHub y activa GitHub Pages en las opciones.

2.  **Integrarlo en Google Sites:**
    *   Abre tu Google Sites.
    *   Haz clic en "Insertar" y luego en la opción **"Incorporar" (Embed)** o `< >`.
    *   Selecciona "Incorporar código" o "URL".
    *   Pega el enlace de Netlify que has conseguido en el paso 1 (ej: `https://mi-firma.netlify.app`).
    *   Expande la viñeta / caja para que encaje a pantalla completa.

---

*Diseñado para brindar confianza, exclusividad y tranquilidad al cliente jurídico actual.*
