FROM node:20-alpine

WORKDIR /app
COPY package.json ./
COPY server.js ./
COPY public ./public
COPY .env.example ./.env.example

EXPOSE 3000

CMD ["node", "server.js"]
