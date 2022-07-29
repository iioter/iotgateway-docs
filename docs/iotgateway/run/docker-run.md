---
sidebar_position: 1
title: Docker运行
---

## amd64(官方仓)
``` bash
 docker run -d -p 518:518 -p 1888:1888 -p 62541:62541 -p 503:503 --name iotgateway --restart always 15261671110/iotgateway:latest
```
## amd64(阿里仓)
``` bash
 docker run -d -p 518:518 -p 1888:1888 -p 62541:62541 -p 503:503 --name iotgateway --restart always registry.cn-hangzhou.aliyuncs.com/iotgateway/iotgateway:latest
```
 
## arm64(官方仓)
``` bash
 docker run -d -p 518:518 -p 1888:1888 -p 62541:62541 -p 503:503 --name iotgateway --restart always 15261671110/iotgateway:arm-latest
 ```
## arm64(阿里仓)
``` bash
 docker run -d -p 518:518 -p 1888:1888 -p 62541:62541 -p 503:503 --name iotgateway --restart always registry.cn-hangzhou.aliyuncs.com/iotgateway/iotgateway:arm-latest
```
