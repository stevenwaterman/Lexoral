FROM node:14

COPY ./src ./src
COPY ./public ./public
COPY package-lock.json package.json tsconfig.json rollup.config.js ./

RUN npm ci
RUN npm run build
RUN npm i -g serve

EXPOSE 5000
ENTRYPOINT ["serve", "-s", "public" ]