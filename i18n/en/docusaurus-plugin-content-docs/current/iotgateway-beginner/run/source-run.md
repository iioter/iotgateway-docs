---
sidebar_position: 3
title: 2.2.3 Build from Source
---

## Prerequisites

- Visual Studio 2022 or later
- .NET 8 SDK

## Clone the Repository

```bash
git clone https://github.com/iioter/iotgateway.git
# or
git clone https://gitee.com/iioter/iotgateway.git
```

## Build the Solution

1. Open `IoTGateway.sln` in Visual Studio 2022
2. Build the entire solution (**important**: drivers are loaded via reflection, so all projects must be compiled)
3. Set `IoTGateway` as the startup project

## Run the Project

Press `F5` or run:

```bash
dotnet run --project IoTGateway
```

## Access the Gateway

Open your browser and navigate to `http://localhost:518`

Default credentials: `admin` / `iotgateway.net`
