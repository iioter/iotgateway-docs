---
slug: IIoTGateway
title: IoTGateway Overview
authors: [iioter]
tags: [iiotgateway, iotgateway, iot]
---

## What is IoTGateway

A cross-platform IoT gateway with B/S architecture built on .NET, serving as a bridge between southbound devices (PLCs, CNCs, robots, etc.) and northbound platforms (IoT platforms, SCADA, MES).

### Data Flow
1. Device → Cloud (Data Collection)
2. Cloud → Device (Reverse Control)
3. Device → Device (M2M)

## Key Features

- **Cross-platform**: Windows/Linux, bare metal or Docker, x86/ARM
- **Built-in drivers**: Modbus, Siemens, Mitsubishi, Omron, Allen-Bradley, MTConnect CNC, and custom driver SDK
- **Calculation expressions**: Dynamic C# scripting for data transformation
- **MQTT Server**: Built-in for business system integration
- **OPC UA Server**: For industrial control system data access
- **Digital Twin 3D**: Three.js demo with real-time MQTT-WebSocket updates
- **Multi-platform integration**: IoTSharp, ThingsBoard, ThingsCloud, ThingsPanel
- **Online SCADA**: Seamless visualization integration

## Why You Need an IoT Gateway

- **Protocol Conversion**: Abstract protocol differences
- **Security**: Gateway as first line of defense
- **Scalability**: Manage complex changes without full-system upgrades
- **Data Preprocessing**: Ratios, offsets, edge computing
- **Data Filtering**: Only transmit meaningful changes
- **Data Aggregation**: Compute across devices before sending
- **Data Caching**: Buffer during network disconnections
