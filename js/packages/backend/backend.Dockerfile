FROM node:alpine
COPY --from=keweizhang/builder /build .
WORKDIR /build
CMD ["node", "./dist/server.js"]