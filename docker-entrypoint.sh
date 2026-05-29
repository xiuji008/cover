#!/bin/sh

# 替换运行时环境变量占位符
if [ -n "$NEXT_PUBLIC_API_ACCESS_KEY" ]; then
    find /usr/share/nginx/html -type f -name '*.html' -exec \
        sed -i "s/__UNSPLASH_KEY_PLACEHOLDER__/$NEXT_PUBLIC_API_ACCESS_KEY/g" {} +
else
    find /usr/share/nginx/html -type f -name '*.html' -exec \
        sed -i 's/__UNSPLASH_KEY_PLACEHOLDER__//g' {} +
fi

if [ -n "$NEXT_PUBLIC_API_ICONIFY_URL" ]; then
    find /usr/share/nginx/html -type f -name '*.html' -exec \
        sed -i "s|__ICONIFY_URL_PLACEHOLDER__|$NEXT_PUBLIC_API_ICONIFY_URL|g" {} +
else
    find /usr/share/nginx/html -type f -name '*.html' -exec \
        sed -i 's/__ICONIFY_URL_PLACEHOLDER__//g' {} +
fi

# 启动 Nginx
exec nginx -g "daemon off;"
