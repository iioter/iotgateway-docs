---
sidebar_position: 1
title: 驱动简介
---

## 关于驱动
  **驱动**是对传统的*数据采集程序*的标准化，驱动可以作为你的**资产**进行管理
- 系统为每个**设备**创建一个**驱动实例**
- 通过**反射**创建**驱动实例**
- 驱动**不可以**是**静态**的
- 驱动**要继承IDriver接口**
- 驱动内需要通过web配置的属性(支持枚举等基本类型),上要加上*Attribute*
   ``` csharp
   [ConfigParameter("端口号")]
   public int Port { get; set; } = 666;
   ```
   
- 系统通过**反射**为属性**赋值**
- 若设备设置为**启动**，则进行**连接**、**读取**的工作
- 可以在驱动内，使用任何**C#语法**，记得在关闭和释放后**释放你创建的资源**，尤其是**后台线程**等

## 驱动生命周期
1. 构造
   ``` csharp
   [DriverInfoAttribute("YourDriver", "V1.0.0", "Copyright iotgateway© 2022-06-04")]
    public class YourDriverClass : IDriver{

    }
   ```
2. 连接
   ``` csharp
   public bool Connect(){
        
    }
   ```
3. 读取
   ``` csharp
   [Method("方法中文名", description: "方法描述")]
   public DriverReturnValueModel Read(DriverAddressIoArgModel ioarg){
        
    }
   ```
4. 断开
   ``` csharp
   public bool Close(){
        
    }
   ```
5. 释放
   ``` csharp
   public void Dispose(){
        
    }
   ```
