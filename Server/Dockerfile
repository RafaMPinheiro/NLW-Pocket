FROM node:20-alpine

WORKDIR /usr/api
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["npm", "start"]
