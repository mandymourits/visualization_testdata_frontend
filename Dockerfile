# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM heroku/heroku:18-build AS builder
RUN apt-get update && \
      apt-get -y install sudo
RUN   apt-get update -yq \
        && apt-get install curl gnupg -yq \
        && curl -sL https://deb.nodesource.com/setup_8.x | bash \
        && apt-get install nodejs -yq
        
WORKDIR /app
COPY package*.json /app/
COPY nginx.conf /app/
RUN npm install
COPY ./ /app/
RUN npm run prod-static
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM heroku/heroku:18 AS production
RUN apt-get update && \
      apt-get -y install sudo

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo
RUN apt-get update && \
      apt-get -y install sudo
RUN   apt-get update -yq \
        && apt-get install curl gnupg -yq \
        && curl -sL https://deb.nodesource.com/setup_8.x | bash \
        && apt-get install nodejs -yq

COPY --from=builder /app/docs/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=builder app/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

