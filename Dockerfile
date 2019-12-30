FROM nginx:1.15

RUN mkdir -p /app
RUN chmod 755 /app
COPY . /app
RUN ls -a
ADD /app/docs /usr/share/nginx/html
COPY /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
