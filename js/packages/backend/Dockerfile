FROM node:alpine as builder
WORKDIR /build
COPY js/packages/backend/ .
RUN npm install
RUN npx tsc
CMD ["true"]

FROM node:alpine
COPY --from=builder /build .
WORKDIR /build
CMD ["node", "./dist/server.js"]