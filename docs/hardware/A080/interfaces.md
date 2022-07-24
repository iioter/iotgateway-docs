---
sidebar_position: 5
title: 功能接口
---


这里描述IIoT-A080硬件接口, 和一些功能模块, 包括信号Pinout, 以及对应的软件用法.


## 系统功能
### 扩展micro SD卡

支持双存储方案, eMMC + micro SD卡. eMMC用于主文件系统, micro SD卡可以用于扩展数据存储.

> 注: micro SD卡仅可用于扩展存储, 不能从SD卡启动.

如果您使用桌面版系统, 系统可自动检测SD卡的插入, 并自动挂载, 以盘符的图标形式显示在桌面上. 若您使用Lite版系统, 可通过lsblk和mount命令检测设备并挂载.

#### 检测块设备

lsblk

```
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0 14.6G  0 disk
├─mmcblk0p1  179:1    0  256M  0 part /boot
└─mmcblk0p2  179:2    0 14.3G  0 part /
mmcblk0boot0 179:32   0    4M  1 disk
mmcblk0boot1 179:64   0    4M  1 disk
mmcblk2      179:96   0 14.9G  0 disk
└─mmcblk2p1  179:97   0 14.9G  0 part
```
```lsblk```命令会列出来操作系统可以检测到的所有块设备, 包括eMMC, micro SD卡, U盘等. 上述命令执行结果:

- mmcblk0是eMMC设备, 有两个分区, mmcblk0p1是boot分区, mmcblk0p2挂载主文件系统
- mmcblk2是插入的micro SD卡, 有一个分区, 还没有挂载
#### 挂载SD卡分区

要使用micro SD卡, 我们必须要挂载到一个目录上, 我们以挂载到/mnt为例:

```sudo mount /dev/mmcblk2p1 /mnt```

然后我们就可以通过对 /mnt目录的读写来读写SD卡.

#### 卸载SD卡分区

```
sync
sudo umount /mnt
```
#### 开机自动挂载

我们可以通过修改 fstab(文件系统表)来达到开机自动挂载的目的, 更多请参考 fstab的用法.

#### 参考链接

- [fstab手册](https://man7.org/linux/man-pages/man5/fstab.5.html)
- [mount手册](https://man7.org/linux/man-pages/man8/mount.8.html)
  
### RTC实时时钟
IIoT-A080上集成有RTC, 对于国内销售的版本, 我们出货会默认附带安装CR1220纽扣电池(RTC备份电源). 这样, 可以保障系统有一个不间断的可靠的时钟, 不受设备下电等因素影响.

默认出货系统镜像, 会集成我们编写的RTC自动同步服务, 客人无需设置, 即可自动同步时钟, 可无感使用RTC. 大概的原理是:

- 系统开机时, 服务自动从RTC读出保存的时间, 并同步到系统时间
- 若有连接互联网, 系统会自动从NTP服务器同步时间, 使用互联网时间更新本地系统时间
- 系统关机时, 服务自动把系统时间写入RTC, 更新RTC的时间
- 因为有安装纽扣电池, 尽管IIoT-A080下电, 但是RTC仍在工作计时
这样, 可以保证我们的时间是准确可靠的.

> 注: 若是第一次开机, 因为RTC中无有效时间, 可能会同步失败, 直接重启即可. 重启的时候, 会把系统时间写入RTC, 后续正常使用.

#### 若您不想用此服务, 可手动关闭:

```
sudo systemctl disable rtc
sudo reboot
```
重新使能此服务
```
sudo systemctl enable rtc
sudo reboot
```
#### 手动操作RTC
手动读取RTC的时间

```sudo hwclock -r```···```
#### 手动同步RTC时间到系统

```sudo hwclock -s```
#### 把系统时间写入RTC

```sudo hwclock -w```
#### 问题排查
请首先看是否有rtc设备(/dev/rtc0)加载:

```ls /dev/rtc0```

如果没有, 可能是您使用了官方标准系统, 但是没有安装我们的BSP包, 请参考章节: "通过apt-get安装BSP包"安装BSP, 另外, 您同样需要安装 ed-rtc包使能RTC自动同步功能.

其他可能的检查点:

- CR1220纽扣电池有没有安装
- NTP网络时间协议, 需要连接互联网才可自动同步时间, 另外, 需要开放端口(UDP, 123), 否则同步失败


## 有线接口
### 千兆以太网
IIoT-A080上有一路自适应 10 / 100 / 1000Mbsp 以太网接口, 建议使用Cat6(六类)网线配合使用. 系统默认```10.10.0.10```, 如果希望配置静态IP, DNS等, 请参考 dhcpcd的用法: [dhcpcd手册](https://man.archlinux.org/man/core/dhcpcd/dhcpcd.8.en)(opens new window)

### USB 2.0 Host
IIoT-A080上有2个USB 2.0 Type A接口, 若使用我们的出厂镜像, USB Host功能是可用的, 若使用官方镜像, 需要按照我们的BSP包, 请参考章节: "通过apt-get安装BSP包"安装BSP.

### USB micro-B
J22 USB micor-B接口, 主要用来eMMC的烧录, 如何烧录, 请参考章节: eMMC烧录

## 无线通信
IIoT-A080提供了丰富的无线通信支持, 支持双频WiFi, 蓝牙5.0和可选的4G LTE全网通通信支持.

### 双频WiFi
客户可选购带WiFi版本的IIoT-A080, 支持 2.4 GHz, 5.0 GHz IEEE 802.11 b/g/n/ac 双频WiFi. 我们提供双频外置天线, 已通过无线认证.

### 外置天线 / 内置PCB天线
可以通过软件配置, 来切换使用外置天线还是内置PCB天线. 考虑到兼容性和最广泛的支持性, 出厂默认系统是选用的内置PCB天线, 若客户选配带外壳的整机, 并配置了外置天线, 可以通过以下操作来切换:

编辑 /boot/config.txt
```
sudo nano /boot/config.txt
```
选择外置天线, 加入
```
dtparam=ant2
```
然后重启设备后生效.

### AP
IIoT-A080上的WiFi还支持配置为:

AP路由器模式 / a Routed Wireless Access Point
```
                                        +- RPi -------+
                                     +---+ 10.10.0.2   |          +- Laptop ----+
                                     |   |     WLAN AP +-)))  (((-+ WLAN Client |
                                     |   | 192.168.4.1 |          | 192.168.4.2 |
                                     |   +-------------+          +-------------+
                 +- Router ----+     |
                 | Firewall    |     |   +- PC#2 ------+
(Internet)---WAN-+ DHCP server +-LAN-+---+ 10.10.0.3   |
                 |   10.10.0.1 |     |   +-------------+
                 +-------------+     |
                                     |   +- PC#1 ------+
                                     +---+ 10.10.0.4   |
                                         +-------------+
```
桥接模式 / a Bridged Wireless Access Point
```

                                         +- RPi -------+
                                     +---+ 10.10.0.2   |          +- Laptop ----+
                                     |   |     WLAN AP +-)))  (((-+ WLAN Client |
                                     |   |  Bridge     |          | 10.10.0.5   |
                                     |   +-------------+          +-------------+
                 +- Router ----+     |
                 | Firewall    |     |   +- PC#2 ------+
(Internet)---WAN-+ DHCP server +-LAN-+---+ 10.10.0.3   |
                 |   10.10.0.1 |     |   +-------------+
                 +-------------+     |
                                     |   +- PC#1 ------+
                                     +---+ 10.10.0.4   |
                                         +-------------+
```
或者混合模式

请客人参考开源项目 github: garywill/linux-router (opens new window)了解如何配置.

### 蓝牙5.0
IIoT-A080可选配是否集成蓝牙功能, 如若带蓝牙的话, 此功能默认是开启的. 客人可使用 bluetoothctl 扫描, 配对, 连接蓝牙设备, 具体请参考: ArchLinux - Wiki - Bluetooth(opens new window)

### 4G LTE
客人可选购是否带4G模块, 我们在国内配置了移远EC20全网通4G模块, 支持移动, 联通和电信网络制式. 客人必须使用我们默认的出厂镜像, 若使用官方镜像, 需要按照我们的BSP包, 请参考章节: "通过apt-get安装BSP包"安装BSP, 并且安装ed-networkmanager包, 若没有安装此包, 执行安装
```
sudo apt install ed-networkmanager
sudo reboot
```
#### 设置4G网络
使用此命令设置4G网络
```
# sudo nmcli connection add type gsm con-name <connection_name>
# 创建一个名为mobilegsm的gsm网络 
```
sudo nmcli connection add type gsm con-name mobilegsm
> 提示

> 如果上面命令没有作用，这里有一些例子，可以仿照例子创建自己的网络
```
# sudo nmcli connection add type gsm con-name <mobile> ifname cdc-wdm0 gsm.number <number> gsm.apn <apn> gsm.username <username> gsm.password <password>
# 中国移动
sudo nmcli connection add type gsm con-name "mobile" ifname cdc-wdm0 gsm.number "*98*1#" gsm.apn "cmnet" 
# 中国联通
sudo nmcli connection add type gsm con-name "Unicom" ifname cdc-wdm0 gsm.number "*99#" gsm.apn "3gnet" 
# 中国电信
sudo nmcli connection add type gsm con-name "Telecom" ifname cdc-wdm0 gsm.number "#777" gsm.username "ctnet@mycdma.cn" gsm.password "vnet.mobi" 
```
开机后, 考虑到拨号时间, 等待若干分钟后, 客人可通过ifconfig查看网络状态.

#### 故障排除
请先确认:

- 有无插micro SIM卡, 并且无欠费
- 有无连接4G外置天线
- 是否使用默认出厂镜像, 或者在官方镜像上安装过我们的BSP
- 蓝色的4G指示灯有没有闪
- 如果确定都没有问题，可以联系客服远程查看
  
客户可通过 以下指令查看是否有安装过BSP

```
dpkg -l | grep ed-cm4sen
dpkg -l | grep networkmanager
```
## 工业控制接口
IIoT-A080上, 预留丰富的工业控制总线, 有:

- 1x RS232
- 4x RS485
- 1x CAN
均以凤凰端子方式引出


### RS232
IIoT-A080上有一路RS232, 对应BCM2711上的UART1, 使用SP3232电平转换芯片, 直接在凤凰端子输出232电平. 若使用我们的出厂镜像, 此RS232接口默认作为Linux系统的tty控制台, 客户可通过Host端(Windows / Linux / Mac), 连接此232, 来登录到IIoT-A080的Linux系统, 执行命令等操作.

若使用官方镜像, 需要按照我们的BSP包, 请参考章节: "通过apt-get安装BSP包"安装BSP.

除了作为系统Console外, 这个RS232还可以配置为普通的串口, 与其他设备通信，设备节点是 /dev/serail0.

### RS485
IIoT-A080上有4路RS485, 均对应BCM2711上的原生串口, 并使用SP3485接口芯片做电平转换. 请参考上述框图, 查看各个485接口对应的Linux设备节点(文件)和Pin脚定义.

> 注: 若使用官方镜像, 需要安装我们的BSP包才可以正常使用此功能, 请参考章节: "通过apt-get安装BSP包"安装BSP.

### CAN总线
IIoT-A080上有一路CAN总线, 通过SPI扩展. 对应Linux网络设备是can0.

CAN的配置, 请参考下述命令的帮助:
```
ip link set can0 type can help
Usage: ip link set DEVICE type can
        [ bitrate BITRATE [ sample-point SAMPLE-POINT] ] |
        [ tq TQ prop-seg PROP_SEG phase-seg1 PHASE-SEG1
          phase-seg2 PHASE-SEG2 [ sjw SJW ] ]

        [ dbitrate BITRATE [ dsample-point SAMPLE-POINT] ] |
        [ dtq TQ dprop-seg PROP_SEG dphase-seg1 PHASE-SEG1
          dphase-seg2 PHASE-SEG2 [ dsjw SJW ] ]

        [ loopback { on | off } ]
        [ listen-only { on | off } ]
        [ triple-sampling { on | off } ]
        [ one-shot { on | off } ]
        [ berr-reporting { on | off } ]
        [ fd { on | off } ]
        [ fd-non-iso { on | off } ]
        [ presume-ack { on | off } ]

        [ restart-ms TIME-MS ]
        [ restart ]

        [ termination { 0..65535 } ]

        Where: BITRATE  := { 1..1000000 }
                  SAMPLE-POINT  := { 0.000..0.999 }
                  TQ            := { NUMBER }
                  PROP-SEG      := { 1..8 }
                  PHASE-SEG1    := { 1..8 }
                  PHASE-SEG2    := { 1..8 }
                  SJW           := { 1..4 }
                  RESTART-MS    := { 0 | NUMBER }
```
客户可以通过安装can-utils使用cansend等工具, 也可以访问开源项目主页: https://github.com/linux-can/can-utils, 自行clone, 编译, 具体用法, 也请参考开源项目主页.
```
sudo apt update
sudo apt install can-utils
```
> 注: 若使用官方镜像, 需要安装我们的BSP包才可以正常使用此功能, 请参考章节: "通过apt-get安装BSP包"安装BSP.

### 蜂鸣器
IIoT-A080上配置了一个蜂鸣器, 可以通过GPIO控制, 对应GPIO为GPIO11.

## 扩展接口
### Mini PCIe
IIoT-A080上有一路Mini PCIe扩展接口, 可扩展一些外设, 如4G, 5G, NPU等. 上面有1-lane PCIe Gen2, 速度高达5Gbps, 另有一路USB 2.0 Host接口.

我司支持移远的EC20 4G全网通模块, 并作为一个可选项直接安装到整机里, 请参考"订购编码"选购. 我司也正考虑5G模块的支持, 尽情期待.

### 5V@1A 直流电源输出
J10, 在PCBA正面, 靠近SIM卡插槽, 提供5V@1A的直流输出. 丝印上有标5V, GND. 可用于给7寸官方触摸屏供电, 也可用于其他负载.