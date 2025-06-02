<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Orders Microservice

```bash
docker compose up -d
```

## Description

1. Clonar el repositorio
2. Crear un archivo `.env` a partir del archivo `.env.example`
3. Levantar la base de datos

```bash
docker compose up -d
```

4. Levantar el servidor de Nats

```bash
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```

5. Levantar el proyecto

```bash
yarn start:dev
```
