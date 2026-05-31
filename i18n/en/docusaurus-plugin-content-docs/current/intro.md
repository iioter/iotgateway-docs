---
sidebar_position: 1
title: 1. Introduction
---

- Cross-platform Industrial IoT Gateway built on .NET8
- B/S architecture with visual configuration
- Southbound connectivity to any device or system (PLCs, barcode scanners, CNCs, databases, serial devices, SCADA systems, OPC Server, OPC UA Server, MQTT Server, etc.)
- Northbound connectivity to ThingsBoard, IoTSharp, or your own IoT platform (MES, SCADA, etc.) for bidirectional data communication
- Edge computing capabilities included

## Community

| WeChat Group |   [QQ Group: 895199932](https://jq.qq.com/?_wv=1027&k=mus0CV0W)  | WeChat Official Account: Industrial IoT Gateway  |
| ------ | ------ | ---- |
| ![wx](/img/wxgroup.png) | ![qq](/img/qq.png) | ![wx](/img/qrcode.jpg) |

## Southbound

- Support device data writing
  ![set-variable](@site/docs/images/set-variable.png)
- Support calculation expressions
  ![express](@site/docs/images/express.png)
- Support change-triggered upload and scheduled archiving
  ![change-upload](@site/docs/images/change-upload.png)

- Support Mitsubishi PLC, full Modbus protocol suite, Omron PLC, OPC UA Client, Siemens PLC, Allen-Bradley PLC, MT machine tools
- Driver SDK for custom driver development

## Northbound

- ThingsBoard, IoTSharp and other third-party platform integration
- Telemetry and attribute upload
- RPC reverse control
  ![rpc](@site/docs/images/rpc.gif)

## Built-in Services

- Built-in MQTT Server (port 1888, 1888/mqtt), with WebSocket-MQTT support for direct MES/SCADA connectivity
  ![mqtt](@site/docs/images/mqtt.png)
- Built-in OPC UA Server (opc.tcp://localhost:62541/Quickstarts/ReferenceServer) — enables inter-device communication via OPC UA
  ![opcua](@site/docs/images/opcua.png)
- Built-in Modbus Slave (device simulator), port 503

## Showcase

- WebSocket real-time data refresh
![variables](@site/docs/images/variables.gif)

- 3D Digital Twin Demo
![3d](@site/docs/images/3d.gif)

- Web SCADA project integration
![scada](@site/docs/images/scada.gif)
![scada-config](@site/docs/images/scada-config.png)


## Star & Fork
Your stars are the motivation that keeps us updating.

## Sponsorship
|   WeChat Reward |   Alipay Reward  |   Personal WeChat  |
| ------ | ---- |---- |
| ![WeChat Reward](@site/docs/images/wx-pay.jpg) | ![Alipay](@site/docs/images/ali-pay.png) | ![Personal WeChat](/img/wxgroup.png) |

## Video Tutorials

[https://www.bilibili.com/video/BV16f4y1Z75Y/](https://www.bilibili.com/video/BV16f4y1Z75Y/)

## Disclaimer

- **Please contact the OPC Foundation for authorization** when using the OPC UA protocol. **Any disputes arising are unrelated to this project.**
- We **welcome and appreciate** financial and any other form of **sponsorship**, but this **does not mean we will commit to or guarantee anything on your behalf.**
- If you **profit** from using IoTGateway, we hope you **contribute to IoTGateway** (not limited to code — ideas, suggestions, or sponsorship according to your ability).
- Please **strictly** follow the **MIT** license.
- [Enterprise Edition Introduction](./enterprise/intro.md)
