FROM node:alpine as builder
WORKDIR /home/kzsandbox
COPY js/packages/backend/package.json .
RUN npm install
COPY . .
RUN npx tsc

FROM node:alpine
WORKDIR /home/kzsandbox
COPY --from=builder /home/kzsandbox .
CMD ["node", "./dist/server.js"]