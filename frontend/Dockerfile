# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy only package files first to leverage Docker layer caching
COPY package*.json tsconfig.app.json vite.config.ts ./

# Install dependencies
RUN npm install --ignore-platform

# Copy the rest of the source code
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS production

WORKDIR /app

# Install serve to run the frontend
RUN npm install -g serve

# Copy build output from build stage
COPY --from=build /app/dist ./dist

# Expose frontend port
EXPOSE 3000

# Command to serve the frontend
CMD ["serve", "-s", "dist", "-l", "3000"]
