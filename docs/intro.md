---
sidebar_position: 1
title: 1. 简介
---

- 基于.NET6的跨平台工业物联网网关
- B/S架构，可视化配置
- 南向连接到你的任何设备和系统(如PLC、扫码枪、CNC、数据库、串口设备、上位机、OPC Server、OPC UA Server、Mqtt Server等)
- 北向连接Thingsboard、IoTSharp或您自己的物联网平台（或MES、SCADA等）进行双向数据通讯
- 当然也可以进行边缘计算
## 交流

| 微信扫我进群 |   [QQ群:895199932](https://jq.qq.com/?_wv=1027&k=mus0CV0W)  |公众号:工业物联网网关 |  
| ------ | ------ | ---- |
| ![wx](../static/img/wxgroup.png) | ![qq](../static/img/qq.png) | ![wx](../static/img/qrcode.jpg) |

## 南向
- 支持设备数据写入
  ![set-variabl](./images/set-variable.png)  
- 支持计算表达式  
  ![express](./images/express.png)
- 支持变化上传和定时归档
  ![change-uploa](./images/change-upload.png)

- 支持三菱PLC、Modbus驱动全协议支持、欧姆龙PLC、OPCUA客户端、西门子PLC、ABPLC、MT机床
- 驱动支持二次开发

## 北向
- thingsboard、iotsharp第三方平台
- 遥测、属性上传
- RPC反向控制
  ![rpc](./images/rpc.gif)

## 服务
- 内置Mqtt服务(1888,1888/mqtt),支持websocker-mqtt，直连你的MES、SCADA等
  ![mqtt](./images/mqtt.png)
- 内置OpcUA(opc.tcp://localhost:62541/Quickstarts/ReferenceServer)，你的设备也可以通过OPCUA和其他设备通信
  ![opcua](./images/opcua.png)
- 内置ModbusSlave(模拟设备)，端口503

## 展示
- Websocker免刷新
![variables](./images/variables.gif)

- 3D数字孪生Demo
![3d](./images/3d.gif)
  
- 支持接入web组态项目
![scada](./images/scada.gif)
![scada-config](./images/scada-config.png)


## Star&Fork
你点亮的小星星，是我不断更新的动力。

## 赞助请留言
|   微信赞赏 |   支付宝赞赏  |   个人微信  |
| ------ | ---- |---- |
| ![微信赞赏](./images/wx-pay.jpg) | ![支付宝收款](./images/ali-pay.png) | ![支付宝收款](../static/img/wxgroup.png) |


## 声明
- 使用OPCUA协议**请联系OPC基金会进行授权**，产生一切**纠纷与本项目无关**
- 请*严格*遵循**MIT**协议
- 我们**接受并感谢**资金以及任何方式的的**赞助**，但并**不意味着我们会为您承诺或担保任何事情**
- 若你使用IoTGateway**获利**，但对IoTGateway**毫无建树**，我们觉得这可能是自私的
- 商业版本正在开发中