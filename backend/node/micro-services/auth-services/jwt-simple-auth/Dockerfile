FROM node:20.18.0

WORKDIR / app

COPY package*.json ./

RUN npm install

COPY . .

# Make sure the entry point script is executable
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 5001


CMD ["node","app.js"]