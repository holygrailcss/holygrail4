
<p align="center">
  <a href="https://holyguide.es">
    <img width="200" src="https://res.cloudinary.com/manuel-ruiz/image/upload/v1576145416/holygrail/logoholy.svg" alt="Holygrail logo">
  </a>
</p>

<h1 align="center">Holygrail4</h1>

## ✨ Características

- 🌈 **Diseño de UI agnóstico**: Ideal para empezar con un lienzo limpio y definir tu propio estilo.
- 📦 **Componentes de alta calidad**: Conjunto de estilos y utilidades listos para usar, basados en SCSS.
- 🛡 **Tipado predecible**: Variables y mixins en SCSS con consistencia y predictibilidad.
- ⚙️ **Herramientas de desarrollo**: Scripts para compilar, vigilar y desplegar fácilmente.
- 🌍 **Soporte multi-idioma**: Preparado para proyectos que requieren internacionalización.
- 🎨 **Personalización avanzada**: Sobrescribe variables y mixins sin complicarte.

## 🖥 Compatibilidad con Navegadores

- Navegadores modernos
- Renderizado del lado del servidor
- Electron

![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) Edge  
![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) Firefox  
![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) Chrome  
![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) Safari  
![Electron](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png) Electron  

**Edge**: Últimas 2 versiones  
**Firefox**: Últimas 2 versiones  
**Chrome**: Últimas 2 versiones  
**Safari**: Últimas 2 versiones  
**Electron**: Últimas 2 versiones  

## 📦 Instalación

### Desde npm

Instala el paquete directamente con npm o Yarn:


### Scripts en package.json

A continuación se detallan los scripts disponibles en el archivo `package.json` y su propósito:

- **watch**: `npx @11ty/eleventy --watch`
  - Este script ejecuta Eleventy en modo de vigilancia, lo que significa que observará los cambios en los archivos y recompilará automáticamente el sitio cuando se detecten cambios.

- **serve**: `npx @11ty/eleventy --serve`
  - Este script inicia un servidor de desarrollo utilizando Eleventy, permitiendo ver el sitio en un navegador web local.

- **deploy**: `git add . && (git commit -m "$(node -p \"require('./package.json').version\")" || echo 'No hay cambios para commit') && git push origin main && npm publish`
  - Este script agrega todos los cambios al repositorio git, realiza un commit con la versión actual del proyecto, empuja los cambios a la rama principal y publica el paquete en npm. Si no hay cambios para hacer commit, muestra un mensaje indicándolo.

- **start:watch**: `npm-run-all --parallel watch serve open:guide`
  - Este script ejecuta en paralelo los scripts `watch`, `serve` y `open:guide` utilizando `npm-run-all`. Es útil para iniciar el entorno de desarrollo completo con un solo comando.

- **generate**: `node generate-scss-variables.js`
  - Este script ejecuta un archivo JavaScript que genera variables SCSS. Es útil para automatizar la creación de variables SCSS basadas en alguna lógica definida en el archivo `generate-scss-variables.js`.

- **css**: `sass scss/style.scss dist/style.css && sass scss/style-rtl.scss dist/style-rtl.css && sass scss/docs.scss dist/docs.css`
  - Este script compila los archivos SCSS a CSS utilizando Sass. Genera tres archivos CSS: `style.css`, `style-rtl.css` y `docs.css` a partir de sus respectivos archivos SCSS.

- **site**: `npx @11ty/eleventy`
  - Este script ejecuta Eleventy para generar el sitio estático.

- **build**: `npm run generate && npm run css && npm run site`
  - Este script ejecuta una serie de comandos en secuencia: primero genera las variables SCSS, luego compila los archivos SCSS a CSS y finalmente genera el sitio estático con Eleventy.

- **start**: `npm run build && npm run open:guide`
  - Este script ejecuta el script `build` y luego abre la guía del proyecto en el navegador.

- **open:guide**: `open guia/index.html`
  - Este script abre el archivo `index.html` de la guía del proyecto en el navegador predeterminado del sistema.

Estos scripts están diseñados para facilitar el desarrollo, compilación y despliegue del proyecto, proporcionando un flujo de trabajo eficiente y automatizado.
