# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as builder
WORKDIR /app
COPY package*.json /app/
COPY nginx.conf /app/
RUN npm install
COPY ./ /app/
RUN npm run prod-static
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15 as production
COPY --from=builder /app/docs/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=builder app/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

