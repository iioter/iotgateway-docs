---
sidebar_position: 4
title: 3.2 MQTT接口
---
> 不通平台的规则不用，目前已经实现了iotsharp、thingsboard、thingscloud、华为ROMA等平台
>
> 其他平台请参阅对应的文档
>

下面以**iotsharp**为例

## 推送数据
> 设备上线
```bash
v1/gateway/connect
```

> 设备离线
```bash
v1/gateway/disconnect
```

> 设备遥测
```bash
devices/{devicename}/telemetry
devices/+/telemetry
```

> 设备属性
```bash
devices/{devicename}/attributes
devices/+/attributes
```

## 订阅平台请求（反写）
> rpc请求

```bash
devices/{设备名称}/rpc/request/{方法名称}/{请求唯一标识}
devices/+/rpc/request/write/{请求唯一标识}

{
    "key1":v1,
    "k2":v2
}

```

> rpc回复
```bash
devices/{设备名称}/rpc/response/{方法名称}/{请求唯一标识}
```
