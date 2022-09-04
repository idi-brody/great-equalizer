FROM nginx:1.22.0-alpine

COPY dist /opt/gequalizer
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
