# build environment
FROM node:16-alpine AS builder
WORKDIR /usr/src/app
COPY .npmrc ./
COPY package*.json ./
RUN npm ci
COPY src ./src
COPY public ./public
COPY .env ./
RUN npm run build

# production environment
FROM nginx:1.19-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY ./nginx/default.conf.template /etc/nginx/templates/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]