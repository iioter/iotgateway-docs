---
sidebar_position: 2
title: Docker Deployment
---

# Docker Deployment

This tutorial uses the **rabbit_mongo_influx** configuration for deployment.

## Start Containers

Navigate to `/IoTSharp/Deployments/rabbit_mongo_influx` and run:

```bash
docker-compose up -d
```

## Initialize InfluxDB

Open your browser to `http://localhost:8086/` and initialize InfluxDB.
Set Org: `iotsharp`, Bucket: `iotsharp-bucket`, then click "Config Later".

## Create and Copy Token

Create an API token in InfluxDB and update the configuration file with your real token.

## Restart IoTSharp Container

```bash
docker restart iotsharp
```

## Register and Login

Open Chrome and navigate to `http://localhost:2927/` to register and access the dashboard.
