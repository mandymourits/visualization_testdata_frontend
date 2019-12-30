FROM nginx:1.17.6

ADD docs /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
RUN cd /usr/share/nginx/html
RUN ls -a
EXPOSE 80
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
