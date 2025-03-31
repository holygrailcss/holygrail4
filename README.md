
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

- **watch**: 
  - Este script ejecuta Eleventy en modo de vigilancia, lo que significa que observará los cambios en los archivos y recompilará automáticamente el sitio cuando se detecten cambios.

- **serve**: 
  - Este script inicia un servidor de desarrollo utilizando Eleventy, permitiendo ver el sitio en un navegador web local.

- **deploy**: 
  - Este script agrega todos los cambios al repositorio git, realiza un commit con la versión actual del proyecto, empuja los cambios a la rama principal y publica el paquete en npm. Si no hay cambios para hacer commit, muestra un mensaje indicándolo.

- **start:watch**: 
  - Este script ejecuta en paralelo los scripts `watch`, `serve` y `open:guide` utilizando `npm-run-all`. Es útil para iniciar el entorno de desarrollo completo con un solo comando.

- **generate**: 
  - Este script ejecuta un archivo JavaScript que genera variables SCSS. Es útil para automatizar la creación de variables SCSS basadas en alguna lógica definida en el archivo `generate-scss-variables.js`.

- **css**: 
  - Este script compila los archivos SCSS a CSS utilizando Sass. Genera tres archivos CSS: `style.css`, `style-rtl.css` y `docs.css` a partir de sus respectivos archivos SCSS.

- **site**:
  - Este script ejecuta Eleventy para generar el sitio estático.

- **build**:
  - Este script ejecuta una serie de comandos en secuencia: primero genera las variables SCSS, luego compila los archivos SCSS a CSS y finalmente genera el sitio estático con Eleventy.

- **start**: 
  - Este script ejecuta el script `build` y luego abre la guía del proyecto en el navegador.

- **open:guide**:
  - Este script abre el archivo `index.html` de la guía del proyecto en el navegador predeterminado del sistema.

Estos scripts están diseñados para facilitar el desarrollo, compilación y despliegue del proyecto, proporcionando un flujo de trabajo eficiente y automatizado.

##Proceso de test de un componente holygrail

lo meteremos en la guia
Testear todas las resoluciones
Testear navegadores
Testear accesibilidad
Testear rtl

## Checklist de pruebas para una maqueta HTML/CSS

### Resoluciones (Responsive)

- **Móvil, Tablet y Escritorio**
  - Revisa que no aparezca scroll horizontal o elementos fuera de lugar.
  - Ajusta los breakpoints para cada tamaño de pantalla.

### Navegadores principales

- **Chrome, Firefox, Safari y Edge**
  - (Opcional) Internet Explorer si es necesario.
  - Usa resets o normaliza el CSS para evitar diferencias de estilos.

### Accesibilidad

- **Estructura semántica**: Utiliza etiquetas HTML5 como `header`, `main`, `footer`, `nav`, `section`, `article`, etc., para definir la estructura del contenido.
- **Texto alternativo en imágenes**: Asegúrate de que todas las imágenes tengan un atributo `alt` descriptivo.
- **Roles ARIA**: Utiliza roles ARIA apropiados para mejorar la accesibilidad de los elementos interactivos.
- **Contraste de colores**: Asegúrate de que el contraste de colores cumpla con los estándares WCAG (AA mínimo).
- **Navegación por teclado**: Verifica que todos los elementos interactivos sean accesibles y operables mediante el teclado.
- **Etiquetas de formulario**: Asegúrate de que todos los campos de formulario tengan etiquetas (`label`) asociadas.
- **Enlaces descriptivos**: Utiliza textos de enlace que describan claramente el destino del enlace.
- **Orden de tabulación**: Asegúrate de que el orden de tabulación sea lógico y siga la secuencia de lectura.
- **Evitar contenido parpadeante**: No utilices contenido que parpadee o destelle, ya que puede causar problemas a personas con epilepsia fotosensible.
- **Tiempo suficiente para leer**: Proporciona suficiente tiempo para que los usuarios puedan leer y utilizar el contenido.
- **Compatibilidad con lectores de pantalla**: Verifica que el contenido sea compatible con lectores de pantalla.
- **Evitar el uso exclusivo de color**: No confíes únicamente en el color para transmitir información.
- **Texto escalable**: Asegúrate de que el texto sea escalable sin pérdida de contenido o funcionalidad.
- **Contenido multimedia accesible**: Proporciona subtítulos y descripciones de audio para contenido multimedia.
- **Evitar el uso de tablas para diseño**: Utiliza tablas solo para datos tabulares, no para diseño de página.
- **Proporcionar alternativas para contenido no textual**: Asegúrate de que todo el contenido no textual tenga una alternativa textual.
- **Evitar el uso de CAPTCHA**: Si es necesario, proporciona una alternativa accesible.
- **Proporcionar retroalimentación clara**: Asegúrate de que los usuarios reciban retroalimentación clara y comprensible sobre sus acciones.
- **Evitar el uso de scripts que interfieran con la accesibilidad**: Asegúrate de que los scripts no interfieran con la accesibilidad del contenido.

### Diseño RTL (Right To Left)

- **Propiedad** `direction: rtl;`
- Revisa que la alineación y flotados funcionen en modo RTL.
- Comprueba fuentes y caracteres para idiomas como árabe o hebreo.

### Extras útiles

- Validar el HTML y el CSS (W3C Validator).
- Revisar rendimiento con Lighthouse o PageSpeed.
- Usar linters (ej. stylelint) para un código más limpio.
