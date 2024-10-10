# OzoCare - Backend

## Descripción

Este repositorio contiene el código backend del proyecto de medición ambiental. El backend está construido usando **Node.js** con **Express** y utiliza una base de datos **MongoDB** para almacenar las mediciones de temperatura y concentración de gases enviadas por el sistema basado en **Arduino**.

### Funcionalidades:
- Almacenar mediciones de sensores (temperatura, concentración de gas).
- Proveer endpoints para acceder a las mediciones almacenadas.
- Exponer una API REST para la comunicación con otros componentes como la aplicación **Frontend** y **Android**.

## Despliegue

### Requisitos previos:
- **Node.js** y **npm** instalados.
- **MongoDB** (local o en un contenedor Docker).

### Pasos para desplegar:

1. Clonar el repositorio:
    git clone https://github.com/usuario/backend-medicion.git
    cd backend-medicion
2. Instalar las dependencias:
    npm install
3. Configurar Docker:
    localizarte en el directorio principal
    docker-compose build
4. Iniciar el servidor:
    docker-compose up
5. Abrir el backend:
    http://localhost:3000

### API endpoints
- **GET /api/v1/medidas**: obtener medidas registradas.
- **POST /api/v1/medidas**: enviar nuevas medidas.