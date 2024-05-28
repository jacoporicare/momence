FROM node:20-alpine as builder

WORKDIR /srv
RUN corepack enable
COPY . .
ENV CI=true
RUN yarn install
RUN yarn test
RUN yarn build


FROM nginx

COPY --from=builder /srv/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
