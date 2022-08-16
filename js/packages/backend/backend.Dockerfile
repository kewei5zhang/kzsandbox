FROM node:alpine
COPY --from=builder /build .
WORKDIR /build
CMD ["node", "./dist/server.js"]