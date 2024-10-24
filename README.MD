# Checklist Deployment

El proyecto consta de 3 partes:
- Frontend : React
- Backend : Nodejs, Express, TypeScript
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