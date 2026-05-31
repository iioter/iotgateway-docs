---
sidebar_position: 2
title: 2.2.2 Docker Deployment
---

## General

```bash
docker run -d -p 518:518 -p 1888:1888 -p 503:503 15261671110/iotgateway:latest
```

## China (Aliyun Registry)

```bash
docker run -d -p 518:518 -p 1888:1888 -p 503:503 registry.cn-shanghai.aliyuncs.com/iotgateway/iotgateway:latest
```
