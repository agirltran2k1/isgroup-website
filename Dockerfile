# syntax=docker/dockerfile:1.4

# 1. For build React app
FROM node:18.17.0 AS development

# Set working directory
WORKDIR /app

# 
COPY package*.json ./

# Same as npm install
RUN yarn

COPY . .

RUN yarn build

# install Docker tools (cli, buildx, compose)

# 2. For Nginx setup
FROM nginx:alpine

COPY --from=development /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=development /app/dist/ /var/www/dist/
COPY --from=development /app/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=development /app/out .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
