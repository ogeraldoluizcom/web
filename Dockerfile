# Base image
FROM node:18-alpine AS base

WORKDIR /app

# === Install dependencies ===
FROM base AS deps

# Instala dependências do sistema necessárias para o sharp
RUN apk add --no-cache \
  python3 \
  make \
  g++ \
  libc6-compat

COPY package.json package-lock.json ./
RUN npm ci

# sharp já está listado nas dependências, não precisa instalar separado, mas se for necessário:
# RUN npm install sharp

# Ajusta permissões para cache do Next.js (evita erro EACCES)
RUN mkdir -p /app/.next/cache && chown -R node:node /app/.next

USER node

# === Build the application ===
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# === Production image ===
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Instala dependências de sistema necessárias para sharp em runtime
RUN apk add --no-cache \
  libc6-compat

# Cria usuário sem root para rodar o app (boa prática de segurança)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copia somente o que é necessário para rodar a aplicação standalone
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

USER appuser

EXPOSE 3000

CMD ["node", "server.js"]
