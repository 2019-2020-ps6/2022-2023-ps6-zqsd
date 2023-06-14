FROM node:20-alpine3.17 as install-step


RUN mkdir -p /app
WORKDIR /app

COPY --chown=node:node  ./package*.json .
RUN npm install
USER node
COPY --chown=node:node  . .

CMD ["npm", "run", "build"] 

FROM nginx:1.25-alpine

EXPOSE 4200


COPY --from=install-step /app/default.conf /etc/nginx/conf.d/default.conf
COPY --from=install-step /app/dist/front-end /usr/share/nginx/html