FROM node:22
WORKDIR /app

COPY package.json ./
RUN npm i

COPY . .
EXPOSE 5173

ENV SERVER_HOST=""
CMD ["npm","run","dev"]