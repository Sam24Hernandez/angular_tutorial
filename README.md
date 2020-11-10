# Introducción a Angular

Este es el repositorio de mis prácticas y aprendizajes con Angular, mis conocimientos y experiencias estarán en este repositorio.
Angular es un marco de diseño de aplicaciones y una plataforma de desarrollo para crear aplicaciones eficientes y sofisticadas de una sola página.

## Prerrequisitos

Debes tener conocimientos previos de:

- [Introducción a HTML](https://github.com/Sam24Hernandez/html-tutorial).
- [Introducción a CSS](https://github.com/Sam24Hernandez/css-tutorial).
- [Introducción a Javascript](https://github.com/Sam24Hernandez/javascript-tutorial).

- **Node**: Angular requiere una versión LTS actual, activa o de mantenimiento de Node.js.

Para más información sobre la instalación de Node.js, ver [nodejs.org](https://nodejs.org/es/). Si no está seguro de qué versión de Node.js se ejecuta en su sistema, ejecute `node -v` en una ventana terminal.

### ¿Qué herramientas necesitarás?

- **Instalación de Angular CLI**: Utilizas Angular CLI para crear proyectos, generar código de aplicación y de biblioteca, y realizar una variedad de tareas de desarrollo en curso como pruebas, agrupación y despliegue.

Para instalar Angular CLI, abra una ventana de terminal y ejecute el siguiente comando:

`npm install -g @angular/cli`

- **Instalación de los paquetes necesarios**: Para instalar los paquetes y las carpetas especificas para los proyectos angular ejecuta, en la terminal el siguiente comando para instalar todos los paquetes necesarios:

`npm install`

- **Un editor de texto, para escribir código**: Puedes usar un editor de texto libre (ej. Brackets, Atom, Notepad++, Sublime Text, Visual Studio Code) o un editor híbrido (Dreamweaver). Los editores de documentos de oficina no son adecuados para esto, pues dependen de elementos ocultos que interfieren con los motores de renderizado usados por los navegadores.
- **Navegadores web, para probar el código**: Actualmente los navegadores más usados son Firefox, Chrome, Opera, Safari, Vivaldi, Brave.

### Correr la Aplicación en el navegador

El Angular CLI incluye un servidor, para que puedas construir y servir tu aplicación localmente.

- Navega a la carpeta del espacio de trabajo en la terminal y ejecuta el siguiente comando:

`cd nombre_carpeta`
`ng serve --open`

El comando ng serve lanza el servidor, vigila tus archivos y reconstruye la aplicación a medida que haces cambios en esos archivos.

La opción --open (o sólo -o) abre automáticamente tu navegador a http://localhost:4200/.
