---
title: 3.2 MQTT Interface
---

## Data Push

Using IoTSharp as an example, the MQTT topic structure is as follows:

### Device Connection/Disconnection

- Connect: `v1/gateway/connect`
- Disconnect: `v1/gateway/disconnect`

### Telemetry Data

- Telemetry topic: `devices/{deviceName}/telemetry`

### Attributes

- Attribute topic: `devices/{deviceName}/attributes`

## Subscribe to Platform Requests (Reverse Write)

RPC request/response topics enable bidirectional control:

- RPC request: `devices/{deviceName}/request`
- RPC response: `devices/{deviceName}/response`

This allows the platform to send control commands back to edge devices through the gateway.
