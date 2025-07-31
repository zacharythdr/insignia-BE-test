# Use lightweight Node.js base image
FROM node

# Set working directory in container
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]