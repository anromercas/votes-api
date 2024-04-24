FROM node:20.10-alpine3.19

WORKDIR /src

COPY package*.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]