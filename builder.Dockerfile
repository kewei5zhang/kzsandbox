FROM node:alpine
WORKDIR /build
COPY js/packages/backend/ .
RUN npm install
RUN npx tsc
CMD ["true"]