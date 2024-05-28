FROM node:20-alpine as builder

WORKDIR /srv
RUN corepack enable
COPY . .
RUN yarn install
RUN yarn build


FROM nginx

COPY --from=builder /srv/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
