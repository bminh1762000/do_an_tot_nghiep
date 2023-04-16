FROM node:10.16.0 as shop-app
WORKDIR /app

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules /app/
COPY . /app
RUN cd /app && npm run build

FROM nginx
WORKDIR /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=shop-app /app/build/ .
EXPOSE 80
