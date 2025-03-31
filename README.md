

<p align="center">
  <a href="https://holyguide.es">
    <img width="200" src="https://res.cloudinary.com/manuel-ruiz/image/upload/v1576145416/holygrail/logoholy.svg" alt="Holygrail logo">
  </a>
</p>

<h1 align="center">Holygrail4</h1>



✨ Características
🌈 Diseño de UI agnóstico: Ideal para empezar con un lienzo limpio y definir tu propio estilo.

📦 Componentes de alta calidad: Conjunto de estilos y utilidades listos para usar, basados en SCSS.

🛡 Tipado predecible: Variables y mixins en SCSS con consistencia y predictibilidad.

⚙️ Herramientas de desarrollo: Scripts para compilar, vigilar y desplegar fácilmente.

🌍 Soporte multi-idioma: Preparado para proyectos que requieren internacionalización.

🎨 Personalización avanzada: Sobrescribe variables y mixins sin complicarte.

🖥 Compatibilidad con Navegadores
Navegadores modernos

Renderizado del lado del servidor

Electron

<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br>Edge	<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br>Firefox	<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br>Chrome	<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br>Safari	<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" /><br>Electron
Edge	Últimas 2 versiones	Últimas 2 versiones	Últimas 2 versiones	Últimas 2 versiones
📦 Instalación
Desde npm
Instala el paquete directamente con npm o Yarn:

bash
Copiar
Editar
npm install holygrail4
bash
Copiar
Editar
yarn add holygrail4
Importar en tu proyecto
En tu archivo SCSS principal:

scss
Copiar
Editar
@import 'holygrail4/scss/style.scss';
O incluye el CSS compilado en tu HTML:

html
Copiar
Editar
<link rel="stylesheet" href="node_modules/holygrail4/dist/style.css">
Uso Rápido (CDN)
Para usar Holygrail4 sin configurar nada localmente, añade este <link> en tu <head>:

html
Copiar
Editar
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/holygrail4@latest/dist/style.css">
¡Listo! Ahora puedes usar los estilos base de Holygrail4 en tu proyecto sin necesidad de instalaciones adicionales.

Scripts Disponibles
En el archivo package.json se han definido varios scripts para facilitar tu flujo de trabajo:

watch: Inicia Eleventy en modo watch para regenerar el sitio al detectar cambios.

serve: Levanta un servidor local para previsualizar el sitio.

deploy: Crea un commit con la versión actual (basada en el package.json) y realiza push a la rama main, luego hace npm publish.

start:watch: Ejecuta en paralelo watch, serve y open:guide.

generate: Ejecuta el script generate-scss-variables.js para generar variables en Sass.

css: Compila los archivos Sass (style.scss, style-rtl.scss, docs.scss) a la carpeta dist.

site: Genera el sitio estático con Eleventy.

build: Ejecuta en secuencia generate, css y site, construyendo el proyecto completo.

start: Ejecuta build y luego open:guide.

open:guide: Abre la documentación localizada en guia/index.html en el navegador.

Ejemplo de flujo de desarrollo
bash
Copiar
Editar
# Instala dependencias
npm install

# Genera el proyecto y abre la guía
npm run start

# o bien, para desarrollo continuo:
npm run start:watch
Estructura del Proyecto
dist/: Contiene los archivos CSS compilados y los assets listos para distribución.

scss/: Carpeta principal con los archivos fuente en SCSS y variables.

guia/: Documentación y guía de uso.

generate-scss-variables.js: Script para generar variables personalizadas en SCSS.

package.json: Incluye la información del paquete, dependencias y scripts.

🌍 Internacionalización
Holygrail4 soporta múltiples idiomas. Puedes configurar tu proyecto para adaptarse a diferentes idiomas sin mayores complicaciones.

🤝 Contribuciones
¡Siéntete libre de abrir un issue o enviar un pull request!
Se agradece cualquier forma de contribución para mejorar este proyecto.