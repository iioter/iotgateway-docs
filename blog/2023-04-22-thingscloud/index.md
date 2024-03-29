---
slug: ThingsCloud
title: ThingsCloud
authors: [iioter]
tags: [iiotgateway, thingscloud, iot]
---

# 5分钟、零代码搭建物联网应用

 [ThingsCloud](https://www.thingscloud.xyz/)作为PaaS 平台，广泛部署在全球主流云计算基础设施平台上，也提供私有部署方式。在设备和用户之间建立**开箱即用**的云平台和云应用，实现数据采集、实时控制、数据可视化、开放 API，构建灵活强大的物联网应用。
 ## 1. 成果展示
- 仪表板
![Dashboard](dashboard.gif)
- 小程序+App
  ![app](app.gif)
## 2.手摸手
### 运行IoTGateway

   - 参考[Github](https://github.com/iioter/iotgateway/wiki)运行网关
   - 或者参考[Gitee](https://gitee.com/iioter/iotgateway/wikis/Home)
   - 访问网关[后台](http://localhost:518/),进入**传输配置**页面，修改配置，并保存
   - ![iotgateway-config](iotgateway-config.png)

### 注册、登录、创建项目

   - 访问[控制台](https://console.thingscloud.xyz/signin)，注册并登录ThingsCloud。
   - 创建项目，并进入控制台
### 创建设备类型
   - 创建**网关**和**网关子设备**设备类型
    ![device-type](device-type.gif)
### 创建设备
- 创建网关、网关子设备并进行绑定
  ![device-type](devices.gif)
- 复制**网关**的*Token*和*AccessKey*
- ![device-type](gateway-token.png)
  
   - 
### 查看数据  
   - ![device-data](device-data.gif)
### 设备功能配置
  - ![device-type-function](device-type-function.gif)
### 大屏配置
  - ![dashboard](create-dashboard.gif)
### 设备面板
   设计面板，并保存
  - ![device-board](device-board.gif)

### App配置
  - ![create-app](create-app.png)
### 创建App用户，关联设备
  - ![create-app](user.png)

### 小程序或app访问
  - 进入app详情页，扫小程序二维码即可

## 总体体验非常丝滑