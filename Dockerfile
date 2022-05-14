FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY ./yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start", "--hostname=0.0.0.0", "--port=3000"]

