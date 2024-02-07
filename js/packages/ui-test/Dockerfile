FROM mcr.microsoft.com/playwright:v1.41.1

# Install pnpm
RUN npm install -g pnpm

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN pnpm install

# Copy the rest of your test code
COPY . .

CMD ["pnpm", "test"]
