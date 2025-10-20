# syntax=docker/dockerfile:1.7

# --- deps ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY student-soc/package*.json ./
RUN npm ci

# --- build ---
FROM node:20-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY student-soc/ .
RUN npm run build

# --- runner (standalone) ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy the self-contained server produced by 'output: standalone'
COPY --from=build /app/.next/standalone ./
# Static assets & public files
COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000
# Healthcheck
HEALTHCHECK --interval=10s --timeout=3s --retries=6 \
  CMD wget -qO- http://127.0.0.1:3000/health || exit 1

# The standalone bundle includes server.js at its root
CMD ["node", "server.js"]