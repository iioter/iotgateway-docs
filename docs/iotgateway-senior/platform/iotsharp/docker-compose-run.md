---
sidebar_position: 2
title: docker运行
---

# docker运行

本教程使用**rabbit_mongo_influx** 方式进行部署

## 修改docker-compose.yml文件

:::danger 注意
删除`influxdb_cli`容器的相关配置，做的是通过此命令行容器，初始化influxdb，但是通过本人测试，在`windows`和`linux`中均无法达到此目的，故而删除之
:::

```yml title="/IoTSharp/Deployments/rabbit_mongo_influx/docker-compose.yml"
influxdb_cli:
    links:
        - influx
    image: quay.io/influxdb/influxdb:v2.0.4
    entrypoint: influx setup --bucket iotsharp-bucket -t iotsharp-token -o iotsharp --username=root --password=1-q2-w3-e4-r5-t --host=http://influx:8086 -f
    restart: on-failure:20
    depends_on:
         - influx
```


## 启动容器

进入`/IoTSharp/Deployments/rabbit_mongo_influx`，执行
```bash docker-compose
docker-compose up -d
```
看到下图说明运行成功
![docker-compose启动成功](./images/rabbit_mongo_influx.png)

## 初始化influxdb

浏览器访问 `http://localhost:8086/`，初始化influxdb

![初始化influxdb](./images/influx.png)

Org: `iotsharp`  Bucket: `iotsharp-bucket`

然后点`Config Later`

## 创建token
![添加token](./images/token.png)

## 复制token
![复制token](./images/copy-token.png)

## 修改配置文件

```yml title="/IoTSharp/Deployments/rabbit_mongo_influx/appsettings.Production.json"
"TelemetryStorage":"http://influx:8086/?org=iotsharp&bucket=iotsharp-bucket&token=iotsharp-token&&latest=-72h",
```
将**iotsharp-token**修改为你的真实token


## 重启IoTSharp容器

命令行执行
```bash docker
docker restart iotsharp
```

## 注册

Chrome浏览器访问 `http://localhost:2927/`

![注册](./images/regist.png)


## 访问
注册后登入进入首页
![访问](./images/login.png)

