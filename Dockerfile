FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install
RUN npm install mysql2 -save
RUN npm install typeorm -save


COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
