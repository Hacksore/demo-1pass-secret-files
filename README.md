# demo-1pass-secret-file

This example shows how you can pull secrets from a 1password vault into a config file.

Command to inject to the secret(s) into the `.env` file using the `.env.tpl` file for reference.
```
op inject -i .env.tpl -o .env
```