FROM heroku/nodejs-hello-world

WORKDIR /app
COPY package*.json /app/
COPY nginx.conf /app/
RUN npm install
COPY ./ /app/
RUN npm run prod-static
COPY /app/docs/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY app/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
