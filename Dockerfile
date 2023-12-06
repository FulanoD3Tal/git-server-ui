FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1
RUN npx prisma generate
RUN npm run build


# Production image, copy all the files and run next

FROM base as runner
WORKDIR /app

ENV NODE_ENV=production
# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add git

COPY --from=builder /app/public ./public

# Set the correct permision for prerender cache
RUN mkdir .next

COPY --from=builder  /app/.next/standalone ./
COPY --from=builder  /app/.next/static ./.next/static
COPY  prisma ./prisma/
COPY  config ./config/
COPY  repos ./repos/


EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"

CMD [ "npm","run","start:prod" ]
