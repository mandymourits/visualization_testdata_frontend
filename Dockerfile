FROM nginx:1.15

RUN mkdir -p /app
WORKDIR /app
RUN chmod 755 /app
COPY . /app
RUN ls -a
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN ls -a
ADD /app/docs .
EXPOSE 80
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
