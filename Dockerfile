# Use Node.js 18, which is required by Next.js 14
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application for production
RUN npm run build || { echo 'Build failed'; exit 1; }

# Expose port 8080, which is the port Google Cloud Run expects
EXPOSE 8080

# Set environment variable for production
ENV NODE_ENV=production

# Start the Next.js server
CMD ["npm", "start"]
