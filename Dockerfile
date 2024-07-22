# Usa una imagen base con una versión de Node.js compatible con Next.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de dependencias y luego instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que Next.js correrá
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]