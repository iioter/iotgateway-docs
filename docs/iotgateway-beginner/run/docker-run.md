---
sidebar_position: 1
title: 2.2.2 docker运行
---

## AMD64(官方仓)
``` bash
 docker run -d -p 518:518 -p 1888:1888 -p 503:503 --name iotgateway --restart always 15261671110/iotgateway:latest
```
## AMD64(阿里仓)
``` bash
 docker run -d -p 518:518 -p 1888:1888 -p 503:503 --name iotgateway --restart always registry.cn-hangzhou.aliyuncs.com/iotgateway/iotgateway:latest
```
 
## ARM64(官方仓)
``` bash
 docker run -d -p 518:518 -p 1888:1888 -p 503:503 --name iotgateway --restart always 15261671110/iotgateway:arm
 ```
## ARM64(阿里仓)
``` bash
 docker run -d -p 518:518 -p 1888:1888 -p 503:503 --name iotgateway --restart always registry.cn-hangzhou.aliyuncs.com/iotgateway/iotgateway:arm
```
