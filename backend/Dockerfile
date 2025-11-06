# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Install build tools for native dependencies
RUN apk add --no-cache python3 g++ make

# Copy only package files first
COPY package*.json tsconfig.json ./

# Install all dependencies
RUN npm install

# Copy all source code
COPY . .

# Build TypeScript
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS production

WORKDIR /app

# Copy package files to install only production dependencies
COPY package*.json tsconfig.json ./

# Install only production dependencies
RUN npm install --only=production --retry=5 --network-timeout=100000

# Copy the built files from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/src ./src

# Expose backend port
EXPOSE 5000

# Command to run server
CMD ["node", "dist/server.js"]
