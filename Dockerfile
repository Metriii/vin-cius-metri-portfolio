# syntax=docker/dockerfile:1

# ---- build ----
FROM node:22-alpine AS build
WORKDIR /app
COPY vin-cius-metri-portfolio/package.json vin-cius-metri-portfolio/package-lock.json ./
RUN npm ci
COPY vin-cius-metri-portfolio/ ./
# O config do projeto usa Cloudflare por padrão; aqui geramos um servidor Node.
ENV NITRO_PRESET=node-server
RUN npm run build

# ---- runtime ----
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=10000
COPY --from=build /app/.output ./.output
USER node
EXPOSE 10000
CMD ["node", ".output/server/index.mjs"]
