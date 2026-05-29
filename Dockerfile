# ========== Stage 1: Build ==========
FROM node:20-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm 并安装依赖
RUN npm install -g pnpm && pnpm install

# 复制源码（构建时无需 .env，运行时注入）
COPY . .

# 构建静态导出
RUN pnpm build

# ========== Stage 2: Nginx ==========
FROM nginx:alpine

# 复制构建产物到 Nginx 静态目录
COPY --from=builder /app/out /usr/share/nginx/html

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 复制运行时注入脚本
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
