---
slug: NLog
title: NLog-MQTT Custom Target
authors: [iioter]
tags: [Traces, log, iot]
---

Creating a custom NLog Target that outputs logs to an MQTT Server for real-time web-based log monitoring via WebSocket-MQTT, instead of traditional WebAPI polling.

## Implementation

The custom target overrides the Write method, serializes log events to JSON with both default and custom fields, and publishes to an MQTT topic.

## Source Code

[NLog.Targets.MQTT](https://github.com/iioter/NLog.Targets.MQTT)
