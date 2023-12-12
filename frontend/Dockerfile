FROM node:20-alpine
LABEL authors="Jeremy Dufroy"

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY .. .
