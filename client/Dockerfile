FROM node:22
WORKDIR /app

COPY package.json ./
RUN npm i

COPY . .
EXPOSE 5173

ENV BASE_URL=""
CMD ["npm","run","dev"]