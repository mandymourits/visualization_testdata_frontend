FROM nginx:1.15

RUN mkdir -p ~/app
ADD docs/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
