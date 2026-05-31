---
title: Gateway Connection
---

## Overview

This guide walks through connecting IoTGateway to ThingsPanel, a Go-based open-source IoT platform.

## ThingsPanel Introduction

ThingsPanel is an open-source IoT platform built with Go, providing device management, data visualization, and rule engine capabilities.

## Install ThingsPanel

Deploy ThingsPanel using Docker Compose:

```bash
docker-compose up -d
```

Refer to the [official documentation](https://docs.thingspanel.cn) for detailed installation instructions.

## IoTGateway Configuration

### Add ThingsPanel Platform Type

Add the `ThingsPanel` enum value in the platform type enumeration:

```csharp
public enum PlatformType
{
    IoTSharp,
    ThingsBoard,
    ThingsPanel,  // Add this
}
```

### Implement ThingsPanelHandler

Create a new handler class implementing the platform communication interface.

### Register in PlatformHandlerFactory

Add the ThingsPanel case to the factory.

### Configure Gateway-Side Devices

Add sub-devices with their communication parameters, configure driver and connection settings, define variables, and verify data flow in the ThingsPanel dashboard.
