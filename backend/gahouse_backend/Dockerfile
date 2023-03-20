FROM node:16.17 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=whatEver
RUN npm run build
ENTRYPOINT node dist/index.js




