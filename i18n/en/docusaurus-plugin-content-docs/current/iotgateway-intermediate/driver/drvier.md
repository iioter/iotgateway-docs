---
title: 3.1.1 Driver Introduction
---

## About Drivers

Drivers are the core abstraction for data collection in IoTGateway. They standardize the interface for communicating with different devices and protocols.

Each driver:
- Is instantiated per device via .NET reflection
- Must implement the `IDriver` interface
- Uses `[ConfigParameter]` attributes to expose configurable properties in the web UI

## Driver Lifecycle

### 1. Construction

The driver class is decorated with `[DriverInfoAttribute]` and implements `IDriver`:

```csharp
[DriverInfo("DriverName", "DriverDescription", "DriverVersion")]
public class MyDriver : IDriver
{
    [ConfigParameter("IP Address")]
    public string IpAddress { get; set; }

    [ConfigParameter("Port")]
    public int Port { get; set; }
}
```

### 2. Connect

Establishes the connection to the target device using the configured parameters.

### 3. Read

Variables are decorated with `[MethodAttribute]` to define their address mapping:

```csharp
[MethodAttribute]
public DriverReturnValueModel Read(DriverAddressIoArgModel ioArg)
{
    // Read data from the device
    return new DriverReturnValueModel
    {
        StatusType = VaribaleStatusTypeEnum.Good,
        Value = dataValue
    };
}
```

### 4. Close & Dispose

Properly release all resources when the driver is stopped or the application shuts down.
