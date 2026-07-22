FROM oven/bun:1.3.10-alpine AS base

WORKDIR /usr/src/app

FROM base AS deps

COPY package.json bun.lock* ./

RUN bun install --frozen-lockfile

FROM base AS builder

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

FROM base AS runner

WORKDIR /usr/src/app

ENV NEXT_TELEMETRY_DISABLED=1

USER bun

COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/public ./public

EXPOSE 3000

CMD ["bun", "server.js"]
