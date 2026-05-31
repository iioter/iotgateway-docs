---
sidebar_position: 1
title: 2.2.1 Release Package
---

## Download Release

Starting from v1.0, IoTGateway is split into **Community Edition** and **Enterprise Edition**.

### v3.0.1 Release Downloads

| Platform | Architecture | Download Link |
|----------|-------------|---------------|
| Windows | x64 | [Download](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/IoTGateway-v3.0.1-win-x64.zip) |
| Windows | x86 | [Download](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/IoTGateway-v3.0.1-win-x86.zip) |
| Linux | x64 | [Download](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/IoTGateway-v3.0.1-linux-x64.zip) |
| Linux | ARM64 | [Download](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/IoTGateway-v3.0.1-linux-arm64.zip) |
| Linux | ARMv7 | [Download](https://gitee.com/iioter/iotgateway/releases/download/v3.0.1/IoTGateway-v3.0.1-linux-armv7l.zip) |

### Release History

See [Gitee Releases](https://gitee.com/iioter/iotgateway/releases) or [GitHub Releases](https://github.com/iioter/iotgateway/releases) for all versions.

## Running

### Windows

1. Download and extract the release package
2. Right-click `IoTGateway.exe` and select **Run as Administrator**
3. Open your browser and navigate to `http://localhost:518`

### Linux

1. Download and extract the release package
2. Grant execute permissions:

```bash
chmod +x IoTGateway
```

3. Run the gateway:

```bash
sudo ./IoTGateway
```

4. Access the web interface at `http://<your-ip>:518`
