---
sidebar_position: 0
title: 2.2.1 发行包运行
---

- 为了项目更健康长久的发展，从`1.0版本`开始区分`社区版(c)`和`企业版(e)`
- 作为开源网关，这个版本足够稳定，已经在多个项目生产落地
- 企业版会有更多特性，可以下载体验，也会逐步更新在社区版中

### 下载对应版本

| 版本 | Windows-x64 | Windows-x86 | Linu-x64 | Linux-Arm64 |Linux-ArmV7 |
| -- | -- | -- | -- | --  |--  |
| 社区版点击下载 | [v3.0.1](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/iotgateway-3.0.1-win-x64.zip) | [v3.0.1](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/iotgateway-3.0.1-win-x86.zip) | [v3.0.1](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/iotgateway-3.0.1-linux-x64.zip) | [v3.0.1](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/iotgateway-3.0.1-linux-arm64.zip)  |[v3.0.1](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/iotgateway-3.0.1-linux-arm.zip)  |

### 发布记录
[详见：https://gitee.com/iioter/iotgateway/releases](https://gitee.com/iioter/iotgateway/releases)

### 运行

- #### windows

1. 解压
3. 管理员权限 运行IoTGateway.exe
4. Chrome访问518端口
- ### linux

1. 解压

2. 修改权限并运行
```bash
sudo chmod 777 IoTGateway
sudo ./IoTGateway
```

3. Chrome访问518端口
-  [浏览器访问：http://localhost:518/Login/Login](http://localhost:518/Login/Login)