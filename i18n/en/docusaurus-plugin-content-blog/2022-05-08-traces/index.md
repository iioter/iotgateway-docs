---
slug: Traces
title: OpenTelemetry Tracing in Industrial IoT
authors: [iioter]
tags: [iiotgateway, Traces, iot]
---

Exploring distributed tracing in .NET8 industrial IoT projects using OpenTelemetry, Jaeger, and Seq.

Industrial IoT systems span ERP, MES, SCADA, WCS, edge gateways, and devices. When issues arise, APM systems help trace problems across the full stack.

## OpenTelemetry

OpenTelemetry is a vendor-neutral protocol standard from Google and Microsoft, unifying OpenTracing and OpenCensus. It supports 11 languages including .NET, and can collect metrics, logs, and traces.

## Jaeger & Seq

[Jaeger](https://www.jaegertracing.io/) provides distributed tracing storage and query. [Seq](https://datalust.co/seq) serves as the log platform with SQL query and chart support.

## Source Code

[ExploringIoTDistributedTracingNet6](https://github.com/iioter/ExploringIoTDistributedTracingNet6)
