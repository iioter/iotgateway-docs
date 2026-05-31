---
title: 3.1.2 TcpClient Demo
---

## Scenario Simulation

A TCP Server listens on port 6666 with a custom binary protocol:
- Request: `0x01` to `0x04` (command bytes)
- Response: Little-endian byte stream containing total bytes, run status, temperature (float), and motor speed

## Driver Development

Create a new class library project under `Plugins\Drivers`:

```csharp
[DriverInfo("SimTcpClient", "TCP Client Simulator", "1.0.0")]
public class SimTcpClient : IDriver
{
    private TcpClient _client;
    private NetworkStream _stream;

    [ConfigParameter("IP Address", "127.0.0.1")]
    public string IpAddress { get; set; }

    [ConfigParameter("Port", "6666")]
    public int Port { get; set; }

    public bool IsConnected => _client?.Connected ?? false;

    public bool Connect()
    {
        try
        {
            _client = new TcpClient(IpAddress, Port);
            _stream = _client.GetStream();
            return true;
        }
        catch { return false; }
    }

    public bool Close()
    {
        _stream?.Close();
        _client?.Close();
        return true;
    }

    [MethodAttribute]
    public DriverReturnValueModel Read(DriverAddressIoArgModel ioArg)
    {
        byte[] request = new byte[] { 0x01, 0x02, 0x03, 0x04 };
        _stream.Write(request, 0, request.Length);

        byte[] buffer = new byte[256];
        int bytesRead = _stream.Read(buffer, 0, buffer.Length);

        return ParseResponse(ioArg, buffer, bytesRead);
    }

    public void Dispose()
    {
        Close();
    }
}
```

## Register the Driver

1. Build the driver project
2. Copy the output DLL to the `Plugins\Drivers` directory
3. Restart IoTGateway — the driver will be auto-discovered

## Create a Device

1. Navigate to **Device Management** in the web UI
2. Add a new device
3. Select `SimTcpClient` as the driver
4. Configure IP address and port

## Add Variables

Add variables manually or import via Excel template. Define each variable's address mapping according to the protocol specification.

## Start Collection

Click **Start** to begin data collection. Monitor real-time values in the variable list.

## Verify Data

Check the collected data in the web interface. The variable values should update according to the TCP server responses.
