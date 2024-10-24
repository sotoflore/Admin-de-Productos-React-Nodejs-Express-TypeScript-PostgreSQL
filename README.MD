# Administrador de productos con el stack PERN

## Lista productos
![admin](https://github.com/sotoflore/Administrador-de-Productos-React-Nodejs-Express-TypeScript-PostgreSQL/blob/main/client/public/admin.png)

## Agregar productos
![admin](https://github.com/sotoflore/Administrador-de-Productos-React-Nodejs-Express-TypeScript-PostgreSQL/blob/main/client/public/add-product.png)

## Eidtar un producto
![admin](https://github.com/sotoflore/Administrador-de-Productos-React-Nodejs-Express-TypeScript-PostgreSQL/blob/main/client/public/edit-product.png)

## Tecnologias
El proyecto consta de 3 partes:
- Frontend : React, Tailwindcss, React Router Dom, Axios, Valibot
- Backend : Nodejs, Express, TypeScript, Morgan para los logs
- Bases de Datos : PostgreSQL

## Deployment

- Frontend : [Vercel](https://vercel.com/home)
- Backend y Bases de Datos : [Render](https://render.com/)
- Codigo del proyecto : GitHub

## Script para compilar el Backend
```json
"scripts": {
    "build": "tsc"
  }
```

## Rutas para para vercel : vercel.json

Crear un archivo **`vercel.json`** en la raiz de tu proyecto.

```json
{ "routes": [{ "src": "/[^.]+", "dest": "/", "status": 200 }] }
```
