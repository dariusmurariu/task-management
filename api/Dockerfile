# Usa una imagen base con Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /api

# Copia el archivo de dependencias y luego instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código de la API
COPY . .

# Expone el puerto en el que json-server correrá
EXPOSE 3001

# Comando para iniciar json-server
CMD ["node", "server.js"]