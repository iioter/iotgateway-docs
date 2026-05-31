---
title: Gateway Connection
---

## Prepare a Modbus Device (or Simulator)

Set up a Modbus device or use a simulator for testing.

## Create a Gateway in ThingsBoard

1. In ThingsBoard, navigate to **Devices** → **Add Device**
2. Select **Gateway** as the device type (not a regular device)
3. Copy the gateway access token

## Configure Gateway Parameters

In IoTGateway:
1. Navigate to **Platform Configuration**
2. Add a new ThingsBoard platform connection
3. Enter the ThingsBoard server URL and gateway token

## Create Device Groups and Devices

In ThingsBoard, create device profiles and individual devices that correspond to the devices configured in IoTGateway.

## Device Communication Configuration

Configure the communication parameters for each device in IoTGateway:
- Select the appropriate driver (e.g., Modbus RTU/TCP)
- Set connection parameters (IP, port, baud rate, etc.)
- Define variable addresses

## Variable Configuration

Map device variables in IoTGateway to match the telemetry keys expected by ThingsBoard.

## Start the Device

Activate the device in IoTGateway to begin data collection and transmission.

## View Data in ThingsBoard

Navigate to the device dashboard in ThingsBoard to view real-time telemetry data and device status.

## RPC Control

Use ThingsBoard's RPC feature to send control commands back through the gateway to the edge devices.
