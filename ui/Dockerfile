FROM node:16-alpine as build

ARG GTM_ID
ARG CONTENT_TYPE

WORKDIR /ui

COPY package.json package-lock.json ./
RUN npm install

COPY webpack.config.js webpack.config.js
COPY tsconfig.json tsconfig.json
COPY src src

RUN GTM_ID=$GTM_ID CONTENT_TYPE=$CONTENT_TYPE npm run build

FROM nginx:1.19.10

COPY --from=build /ui/dist /ui
COPY ui.conf /etc/nginx/conf.d/default.conf
