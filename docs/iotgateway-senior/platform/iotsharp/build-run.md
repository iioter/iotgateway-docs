---
sidebar_position: 3
title: 编译运行
---

# 编译运行

本教程使用**rabbit_mongo_influx** 方式进行源码运行


:::danger 注意
编译运行要在docker运行的基础上进行，因为需要使用rabbitmq、mongo、influxdb等应用；
要先停止容器中的iotsharp
:::
```bash docker
docker stop iotsharp
```

:::danger 注意
另外前端使用angular，需要安装node、npm或yarn才可以进行前端编译
:::
我的node版本`v16.13.1`，npm版本`8.1.2`，yarn版本`1.22.17`，可用


## 生成解决方案
打开解决方案**IoTSharp.sln** 

先生成解决方案，第一次生成ng的前端比较慢

## 修改配置文件

```json title="/IoTSharp/IoTSharp/appsettings.Development.json"
{
  "ConnectionStrings": {
    "IoTSharp": "Server=127.0.0.1;Database=IoTSharp;Username=postgres;Password=future;Pooling=true;MaxPoolSize=1024;",
    "EventBusStore": "mongodb://root:kissme@127.0.0.1:27017",
    "TelemetryStorage": "http://127.0.0.1:8086/?org=iotsharp&bucket=iotsharp-bucket&token=iotsharp-token&&latest=-72h",
    "EventBusMQ": "amqp://root:kissme@127.0.0.1:5672"
  },
  "DataBase": "PostgreSql",
  "EventBusStore": "MongoDB",
  "EventBusMQ": "RabbitMQ",
  "TelemetryStorage": "InfluxDB"
}
```
:::danger 注意
一定要把iotsharp-token换成你自己的token才行
:::

## 源码启动

`IoTSharp`项目设为启动项目，运行

![源码启动](./images/source-start.png)


## 访问后台前端
等待一会，浏览器自动弹出后台前端，可以看到后台组件运行状态，以及swagger的webapi页面

![访问后台前端](./images/be-fe.png)

## 访问前端
要有耐心，大概5分钟左右，angular编译完成，会弹出一个新的前端
![访问前端](./images/fe.png)

