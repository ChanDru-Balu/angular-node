# Use Node.js as the base image
FROM node:20.18.0

WORKDIR /app

# Clear npm cache
RUN npm cache clean --force

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

RUN npm install -g @angular/cli  

# Use npm ci for clean install
RUN npm install

# Copy the rest of the project files
COPY . .

# Start the application
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
