ARG NODE=node:18-alpine

# Stage 1: Install dependencies
FROM ${NODE} AS deps
WORKDIR /app

COPY ./package.json ./package.json
RUN ["npm", "install"]

# Stage 2: Build the app
FROM ${NODE} AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY ./package.json ./package.json
COPY ./*config* ./
COPY ./app ./app
COPY ./components ./components
COPY ./css ./css
COPY ./data ./data
COPY ./layouts ./layouts
COPY ./public ./public
COPY ./scripts ./scripts

RUN ["npm", "run", "build"]

# Stage 3: Run the production
FROM ${NODE} AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy assets and the generated standalone server
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Serve the app
CMD ["node", "server.js"]
