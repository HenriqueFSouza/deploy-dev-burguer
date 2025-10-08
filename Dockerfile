FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3001
EXPOSE 3001
CMD npx sequelize-cli db:migrate && node ./src/server.js


