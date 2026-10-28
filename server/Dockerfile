FROM node:22
WORKDIR /app

COPY package.json ./
RUN npm i

COPY . .
EXPOSE 3000

ENV MONGODB_HOST=""
ENV MONGODB_USER=""
ENV MONGODB_PASS=""
CMD ["node","index.js"]
