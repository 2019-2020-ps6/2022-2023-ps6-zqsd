FROM node:20-alpine3.17 as install-step
USER node
WORKDIR /app

COPY --chown=node:node  ./package*.json .
RUN npm install

COPY --chown=node:node  . .

RUN npm run build:production


FROM nginx:1.25-alpine

COPY --from=install-step /app/default.conf /etc/nginx/conf.d/default.conf
COPY --from=install-step /app/dist/front-end /usr/share/nginx/html