FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# Install deps (prefer ci when lockfile exists)
RUN npm install

# Copy source and build
COPY . .
# Vite builds to /app/dist by default
RUN npm run build

# ---- Run stage (Nginx static) ----
FROM nginx:1.27-alpine AS prod

# Remove default config and add our SPA-friendly config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the builder
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: light healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
