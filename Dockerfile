FROM node:alpine

# Install bash

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD ["npm", "start"]

EXPOSE 5000
