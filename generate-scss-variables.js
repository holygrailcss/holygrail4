const fs = require('fs');
const path = require('path');

// Importar los archivos JSON necesarios
const colors = require('./src/_data/colors.json');
const maps = require('./src/_data/maps.json');

// Función para generar contenido HTML para colores
function generarHtmlColores(colors) {
  let htmlContent = '';
  Object.entries(colors).forEach(([key, data]) => {
    htmlContent += `
    <li class="variable-item">
      <div class="variable-box" style="background-color: ${data.value};"></div>
      <div class="variable-info">
        <div>${data.var_name}</div>
        <span class="code-snippet">${data.value}</span>
      </div>
    </li>
    `;
  });
  return htmlContent;
}

// Función para generar contenido HTML para mapas
function generarHtmlMapas(maps) {
  let mapHtmlContent = '';
  Object.entries(maps).forEach(([key, data]) => {
    mapHtmlContent += `
    <h3>${data.var_name}</h3>
    `;
    Object.entries(data.value).forEach(([subKey, value]) => {
      mapHtmlContent += `
      <div>${subKey}: ${value}</div>
      `;
    });
  });
  return mapHtmlContent;
}

// Función para insertar contenido en el HTML
function insertarContenidoEnHtml(siteHtml, insertionPoint, content) {
  if (siteHtml.includes(insertionPoint)) {
    return siteHtml.replace(insertionPoint, content);
  } else {
    console.error(`Punto de inserción para ${insertionPoint} no encontrado.`);
    return siteHtml;
  }
}

// Rutas de archivos
const sitePath = path.join(__dirname, '_site', 'guia', 'index.html');
const guiaPath = path.join(__dirname, 'designsystem', 'index.html');

// Leer contenido del archivo HTML
let siteHtml = fs.readFileSync(sitePath, 'utf8');

// Generar y insertar contenido de colores
const htmlContent = generarHtmlColores(colors);
siteHtml = insertarContenidoEnHtml(siteHtml, '<!-- Insertar variables de color aquí -->', htmlContent);

// Generar y insertar contenido de mapas
const mapHtmlContent = generarHtmlMapas(maps);
siteHtml = insertarContenidoEnHtml(siteHtml, '<!-- Insertar variables de mapa aquí -->', mapHtmlContent);

// Escribir el contenido actualizado en el archivo HTML
fs.writeFileSync(guiaPath, siteHtml);
console.log('Variables de color y mapa insertadas en /designsystem/index.html');



// Función para generar contenido HTML para variables
function generarHtmlVariables(variables) {
  let variablesHtmlContent = '';
  Object.entries(variables).forEach(([key, data]) => {
    variablesHtmlContent += `
    <h3>${data.var_name}</h3>
    `;
    if (Array.isArray(data.value)) {
      data.value.forEach(value => {
        variablesHtmlContent += `
        <div>${value}</div>
        `;
      });
    } else {
      variablesHtmlContent += `
      <div>${data.value}</div>
      `;
    }
  });
  return variablesHtmlContent;
}

// Leer contenido del archivo variables.json
const variablesPath = path.join(__dirname, 'src', '_data', 'variables.json');
const variablesJson = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

// Generar y insertar contenido de variables
const variablesHtmlContent = generarHtmlVariables(variablesJson);
siteHtml = insertarContenidoEnHtml(siteHtml, '<!-- Insertar variables aquí -->', variablesHtmlContent);

// Escribir el contenido actualizado en el archivo HTML
fs.writeFileSync(guiaPath, siteHtml);
console.log('Variables  insertadas en /designsystem/index.html');
