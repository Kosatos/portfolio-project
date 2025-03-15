FROM node:23.0-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

FROM node:23.0-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 7700
CMD ["yarn", "run", "start:prod"]