# Gestión de Tareas | Melboss

Caso práctico de una plataforma de gestión de tareas realizada con Next.js y JSON-Server.

## Requisitos previos

- Instalación de Docker Desktop (https://www.docker.com/products/docker-desktop/)
- Docker Composer (normalmente viene con Docker Desktop)

## Instrucciones para ejecutar el proyecto

1. **Abrir Terminal de Windows**
![image](https://github.com/user-attachments/assets/ab576a8c-5dfe-4bd7-b531-eb3dd4cfce02)

2. **Seleccionar la carpeta de destino del proyecto**

   - Utilizando el comando mkdir [nombre del directorio] se crea la nueva carpeta de destino.
   ![image](https://github.com/user-attachments/assets/7b30f0a9-f5e1-431b-8c6e-effd27f7f9f3)

3. **Clonar el repositorio dentro de tu carpeta**

   - Una vez situado en la carpeta, ejecutar el comando para clonar el repositorio.
   ```bash
   git clone https://github.com/dariusmurariu/task-management.git
   ```

   - Después de clonar el repositorio, se deberá acceder al proyecto:
   ```bash
   cd task-management
   ```
4. **Ejecutar Docker**

   - Dentro de la carpeta "task-management" ejecutar los siguientes comandos:
   ```bash
   docker-compose build
   ```
   - Una vez termine el proceso de "build"
   ```bash
   docker-compose up
   ```
5. **Acceder a la URL del proyecto**

   Una vez se termine de ejecutar Docker, se podrá acceder al proyecto:
   http://localhost:3000/


