# Use the official Ubuntu image as the base image
FROM ubuntu:latest

# Install necessary packages
RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Download and install DuckDB
RUN wget https://github.com/duckdb/duckdb/releases/download/v0.7.1/duckdb_cli-linux-amd64.zip \
    && unzip duckdb_cli-linux-amd64.zip \
    && mv duckdb /usr/local/bin/

# Create the /data directory
RUN mkdir -p /data

# Copy the initialization script to the container
COPY init.sql /data/init.sql

# Copy the entry point script to the container
COPY entrypoint.sh /entrypoint.sh

# Make the entry point script executable
RUN chmod +x /entrypoint.sh

# Set the working directory
WORKDIR /data

# Set the entrypoint to the shell script
ENTRYPOINT ["/entrypoint.sh"]
