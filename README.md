Welcome to your new Morph project!

### Using the starter project

Try running the following commands:

- Run your data app

If you're on windows
```bash
Set-ExecutionPolicy Unrestricted -Scope Process
```

```bash
python3.11 -m venv "python-env"
# Windows
pip install -r .\requirements.txt
# MacOs
pip install -r ./requirements.txt
```

Run server
```bash
morph serve
```

### Resources
- Learn more about Morph [in the docs](https://docs.morph-data.io)
- Check out [the blog](https://www.morph-data.io/blogs)

### Getting started

Write connection info in `~/.morph/config.yml` like this:

```yml
connections:
  connection_name:
    type: postgres
    host: localhost
    port: 5432
    user: postgres
    password: postgres
```

You can set it up by running the following command:

```bash
morph config
```

Run the database
```Bash
docker compose build
docker compose up
```
