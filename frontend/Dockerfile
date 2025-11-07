# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Runtime
FROM node:18-alpine AS runtime
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package.json ./

EXPOSE 5173
ENV NODE_ENV=production

CMD ["npm", "run", "preview"]
