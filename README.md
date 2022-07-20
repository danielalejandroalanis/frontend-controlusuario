# Documentación Front-End - Control de Usuarios

-----

## Autor
- [Daniel Alanis](https://github.com/danielalejandroalanis)

-----

## Ambiente de prueba

    - OS Local: Linux Mint 19
    - Node Version: v14.17.1
    - NPM version: v6.14.13

## Tecnologías utilizadas:

    - React: v18.1.0
    - Redux: v8.0.1
    - Redux Toolkit: v1.8.1
    - React Router: v6
    - React Persist: para persistencia de datos
    - http-proxy-middleware: proxy entre Back y Front
    - Visual Studio Code
    - Bootstrap
    - Material UI
    - React Hook Form

## Estructura del proyecto

```bash
├── node_modules
├── public
├── src
│   ├── components
│   ├── pages
│   ├── routes
│   ├── sass
│   ├── store
│   ├── theme
│   ├── App.js
│   ├── index.js
│   ├── setupProxy.js
├── .gitignore
├── package.json
└── README.md
```

## Arquitectura

![alt text](https://github.com/danielalejandroalanis/frontend-controlusuario/blob/main/Arquitectura.png?raw=true)

## Ejecución local

**Clonar repositorio:** 

> git clone https://github.com/danielalejandroalanis/frontend-controlusuario.git

**Instalar dependencias**

> npm i

**Ejecución en consola:**

> npm start

## Pantallas

### Home

En esta vista se podrá visualizar la lista (en forma de tabla) de usuarios cargados. Además, con el botón de la columna *Acción*, podremos ver la información detallada (en un modal) con datos no incluidos en la tabla.

En el recuadro de *Busqueda por Nombre*, podremos filtrar los usuarios según el criterio *Nombre*.

### Crear Usuario

Podremos crear un nuevo usuario haciendo uso de esta pantalla. Deberemos rellenar el formulario, y una vez se presiona el botón *Crear Usuario*, se cargará el nuevo usuario en la base de datos devolviendonos el ID del mismo. Podremos corroborar esto en el **Home**.


