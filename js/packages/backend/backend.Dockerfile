FROM node:alpine
COPY --from=builder:latest /build .
WORKDIR /build
CMD ["node", "./dist/server.js"]