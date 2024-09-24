#!/bin/bash

# Check if docker-compose is installed
if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

# Build the Docker images
echo "Building Docker containers..."
docker-compose build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Error: Docker build failed!" >&2
  exit 1
fi

# Start the Docker containers
echo "Starting Docker containers..."
docker-compose up -d



# Check if containers started successfully
if [ $? -eq 0 ]; then
  echo "Docker containers are up and running!"
else
  echo "Error: Failed to start Docker containers!" >&2
  exit 1
fi
