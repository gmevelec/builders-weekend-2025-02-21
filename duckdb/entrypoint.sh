#!/bin/bash

# Check if the init.sql file exists
if [ -f "/data/init.sql" ]; then
    echo "Initializing database with init.sql..."
    duckdb -c ".read /data/init.sql"
else
    echo "init.sql not found. Starting DuckDB without initialization."
fi

# Start the DuckDB shell
echo "Starting DuckDB shell..."
duckdb
