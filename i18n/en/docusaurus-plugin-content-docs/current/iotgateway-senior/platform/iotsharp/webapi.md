---
sidebar_position: 5
title: WebAPI Query
---

# Query Telemetry via WebAPI

Open your browser to `http://localhost:5000/swagger/index.html`.

## Login

Authenticate and copy the returned access_token.

## Get Device Telemetry

Call `/api/Devices/{deviceId}/TelemetryLatest` with the authenticated token to retrieve the latest telemetry data.
