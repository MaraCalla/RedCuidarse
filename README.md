# RedCuidarse
RedCuidarse es una página web orientada a la promoción del cuidado de la salud mental en jóvenes. El proyecto reúne recursos, herramientas y canales de participación comunitaria para facilitar el acceso a información, apoyo y orientación.

## Funcionalidades principales

- Página de inicio (`index.html`) con navegación clara hacia las secciones principales: Inicio, Nosotros, Comunidad, Herramientas y Emergencias.
- Integración de recursos externos:
	- Frase del día mediante un Padlet embebido.
	- Formulario de feedback embebido (Google Forms) para recoger opiniones y sugerencias.
	- Enlaces a publicaciones y redes sociales para ampliar el alcance.
- Carrusel de novedades para destacar publicaciones, eventos o recursos recientes (implementado en HTML/CSS/JS).
- Menú móvil responsive y efectos de navegación: menú hamburguesa, navegación suave y animaciones con Intersection Observer (implementados en `java.js`).
- Sección de contacto y pie de página con información de la organización, correo y redes sociales.

## Importancia del proyecto

RedCuidarse busca bajar las barreras de acceso a información sobre salud mental y crear un espacio seguro donde la juventud pueda informarse, participar y encontrar apoyo. Las ventajas incluyen:

- Accesibilidad a recursos relevantes y actualizados.
- Promoción de la participación comunitaria mediante espacios interactivos (Padlet, formularios, enlaces a redes).
- Diseño responsivo para llegar a las y los jóvenes desde dispositivos móviles, donde suelen buscar información.

## Cualidades destacadas

- Código simple y modular: HTML, CSS y JavaScript separados por secciones (`Comunidad`, `Herramientas`, `Emergencias`, `Nosotros`).
- Uso de embebidos seguros (Padlet, Google Forms) para mantener el contenido dinámico sin exponer infraestructura adicional.
- Enfoque en usabilidad: navegación clara, carrusel de novedades y formulario de retroalimentación.
- Fácil de adaptar y extender: se pueden añadir nuevas publicaciones, entradas de blog o recursos sin reestructurar la base del sitio.

## Estructura del repositorio

- `index.html` – Página principal.
- `style.css` – Estilos globales.
- `java.js` – Lógica de interacción (menú móvil, animaciones, carrusel, scroll suave).
- `Comunidad/`, `Herramientas/`, `Emergencias/`, `Nosotros/` – Carpetas con HTML, CSS y JS de cada sección.
- `IMAGENESCU/` – Imágenes utilizadas en la web.
- `test/` – Contiene un proyecto Java de ejemplo (parece un demo o pruebas unitarias) que no forma parte del frontend principal.

## Cómo ejecutar localmente

1. Abrir `index.html` en un navegador moderno (Chrome, Edge, Firefox).
2. Asegurarse de que la estructura de carpetas y las imágenes se mantengan en la misma ubicación relativa para que los recursos se carguen correctamente.

Nota: No se requiere servidor para la versión estática; para desarrollo local con recarga usar un servidor estático (por ejemplo, `Live Server` en VS Code).

## Buenas prácticas y recomendaciones

- Validar y sanitizar cualquier contenido generado por usuarios antes de publicarlo.
- Optimizar imágenes (webp / tamaños reducidos) para mejorar el rendimiento móvil.
- Añadir atributos `alt` descriptivos a todas las imágenes para mejorar accesibilidad.
- Añadir meta tags para SEO y Open Graph para mejorar el compartido en redes.

## Cómo contribuir

1. Haz fork del repositorio y crea una rama con tu mejora: `feature/tu-mejora`.
2. Abre un Pull Request describiendo los cambios y el propósito.
3. Si deseas proponer contenido (frases, recursos), usa la sección `Comunidad` o abre un issue.

## Ideas para próximas mejoras

- Añadir un módulo de blog o CMS ligero para gestionar publicaciones desde la web.
- Implementar tests de integración visuales (por ejemplo, con Playwright) para asegurar que componentes clave funcionan en móvil y escritorio.
- Añadir un formulario local propio (con backend) para recoger feedback sin depender de servicios externos.
- Internacionalización (i18n) para soportar más idiomas.


---

Si quieres, puedo:

- Añadir badges (build, license, live demo) al inicio del README.
- Escribir una guía de contribución `CONTRIBUTING.md` y plantillas de issue/PR.
- Generar un archivo `README` en otro idioma.

Di qué prefieres y lo agrego.
