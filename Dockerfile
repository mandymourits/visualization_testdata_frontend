FROM node:latest

EXPOSE 8081

# Update aptitude with new repo
RUN apt-get update

# Install software
RUN apt-get install -y git
# Make ssh dir

RUN  apt-get update \
     # Install latest chrome dev package, which installs the necessary libs to
     # make the bundled version of Chromium that Puppeteer installs work.
     && apt-get install -y wget --no-install-recommends \
     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
     && apt-get update \
     && apt-get install -y google-chrome-unstable --no-install-recommends \
     && rm -rf /var/lib/apt/lists/*

RUN mkdir -p ~/app
WORKDIR /app
COPY . .
RUN ls -a

RUN npm install
RUN npm install cross-env -g
RUN npm install puppeteer
CMD [ "npm","run","serve-prod-static" ]
