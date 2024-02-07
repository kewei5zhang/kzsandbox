FROM node:latest

# Install pnpm
RUN npm install -g pnpm

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN pnpm install

# Copy the rest of your app's source code
COPY . .

EXPOSE 3000

CMD [ "pnpm", "start" ]
