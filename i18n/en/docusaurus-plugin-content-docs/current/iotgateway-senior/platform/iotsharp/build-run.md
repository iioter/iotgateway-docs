---
sidebar_position: 3
title: Build & Run
---

# Build & Run from Source

This tutorial uses the **rabbit_mongo_influx** configuration for source code deployment.

:::danger Important
Building and running requires the Docker-based infrastructure (RabbitMQ, MongoDB, InfluxDB) to be running first. Stop the IoTSharp container before running from source:

```bash
docker stop iotsharp
```
:::

## Build the Solution

Open **IoTSharp.sln** and build the entire solution. The first build compiles the Angular front-end and takes longer.

## Modify Configuration File

Update the connection strings in `appsettings.Development.json` with your actual InfluxDB token.

## Start from Source

Set `IoTSharp` as the startup project and run. The back-end dashboard and Swagger WebAPI will open automatically.
