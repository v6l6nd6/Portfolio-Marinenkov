FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm install -g npm@8.3.0

COPY . .

CMD ["npm", "start"]