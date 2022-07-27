---
sidebar_position: 5
title: 功能接口
---


这里描述IIoT-B100硬件接口, 和一些功能模块, 包括信号Pinout, 以及对应的软件用法.


## 系统功能
### 扩展micro SD卡

IIoT-B100上有一个micro SD卡插槽, 只能无eMMC版本配合使用.

:::danger 注意
仅当您选用无eMMC版本 才可以用sd扩展.
:::

### 串行Flash
  
  IIoT-B100通过SPI扩展了一片SPI Flash, 32Mbits, 也就是4MByte, 可供客人存储数据等. 在Linux上, 串行Flash被识别为MTD(Memory Technology Device)设备, 此Flash的设备文件是 /dev/mtd0

:::danger 注意

MTD设备与我们常见的块设备(Block)如硬盘, SDCard, U-Disk, eMMC不同. 典型的区别, MTD设备要进行Erase操作, 而Erase的Sector通常大于写单元的Page. 而Block设备通常有设备硬件处理, 在Host端不太区别写和擦除. 我们通常使用JFFS2文件系统来管理MTD设备, 而不是ext4.
:::

:::danger 注意

若客人使用我们提供的镜像, 此功能默认开启, 若使用官方镜像, 需要按照我们的BSP包, 请参考章节: "通过apt-get安装BSP包"安装BSP.
:::

安装mtd-utils工具管理Flash设备
sudo apt update
sudo apt install mtd-utils
第一次使用, 或者您需要'格式化', 请Erase整片Flash设备
sudo flash_erase /dev/mtd0 0 0
以JFFS2类型挂载, 读写
sudo mount -t jffs2 /dev/mtd0 /mnt
挂载后, 您就可以对 /mnt目录读写来读写Flash设备了

### RTC实时时钟
IIoT-B100上集成有RTC, 对于国内销售的版本, 我们出货会默认附带安装CR1220纽扣电池(RTC备份电源). 这样, 可以保障系统有一个不间断的可靠的时钟, 不受设备下电等因素影响.

默认出货系统镜像, 会集成我们编写的RTC自动同步服务, 客人无需设置, 即可自动同步时钟, 可无感使用RTC. 大概的原理是:

- 系统开机时, 服务自动从RTC读出保存的时间, 并同步到系统时间
- 若有连接互联网, 系统会自动从NTP服务器同步时间, 使用互联网时间更新本地系统时间
- 系统关机时, 服务自动把系统时间写入RTC, 更新RTC的时间
- 因为有安装纽扣电池, 尽管IIoT-B100下电, 但是RTC仍在工作计时
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
IIoT-B100上有一路自适应 10 / 100 / 1000Mbsp 以太网接口, 建议使用Cat6(六类)网线配合使用. 系统默认```10.10.0.10```, 如果希望配置静态IP, DNS等, 请参考 dhcpcd的用法: [dhcpcd手册](https://man.archlinux.org/man/core/dhcpcd/dhcpcd.8.en)(opens new window)

### 百兆以太网

IIoT-B100还上有一路自适应 10 / 100Mbsp 以太网接口, 丝印标识: 10/100, 与USB Type-A双层座子相邻, 是通过USB 2.0扩展而来.
:::danger 注意
 若使用我们的出厂镜像, 此硬件功能是可用的, 若使用官方镜像, 需要按照我们的BSP包, 请参考章节: "通过apt-get安装BSP包"安装BSP.
:::
我们出厂时, 已经为百兆以太网烧录了MAC地址, 若客户想烧录自己的MAC地址, 我们提供烧录脚本, 可自行操作.

git clone https://gist.github.com/8c5c05e1bf22eff4e6ea76ae429f377a.git lan-utils
cd lan-utils
./lan9500-mac-addr-set.sh

Usage:  { prog addr | read | erase }
读取当前的MAC地址
sudo ./lan9500-mac-addr-set.sh read
擦除 / Erase
sudo ./lan9500-mac-addr-set.sh earse
烧录MAC地址, 重启生效
sudo ./lan9500-mac-addr-set.sh prog aa:bb:cc:dd:ee:ff

Program MAC address: aa:bb:cc:dd:ee:ff...... OK

sudo reboot

### USB 2.0 Host
IIoT-B100上有2个USB 2.0 Type A接口, 若使用我们的出厂镜像, USB Host功能是可用的, 若使用官方镜像, 需要按照我们的BSP包, 请参考章节: "通过apt-get安装BSP包"安装BSP.

### USB micro-B
J22 USB micor-B接口, 主要用来eMMC的烧录, 如何烧录, 请参考章节: eMMC烧录

## 无线通信
IIoT-B100提供了丰富的无线通信支持, 支持双频WiFi, 蓝牙5.0和可选的4G LTE全网通通信支持.

### 双频WiFi
客户可选购带WiFi版本的IIoT-B100, 支持 2.4 GHz, 5.0 GHz IEEE 802.11 b/g/n/ac 双频WiFi. 我们提供双频外置天线, 已通过无线认证.

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
IIoT-B100上的WiFi还支持配置为:

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
IIoT-B100可选配是否集成蓝牙功能, 如若带蓝牙的话, 此功能默认是开启的. 客人可使用 bluetoothctl 扫描, 配对, 连接蓝牙设备, 具体请参考: ArchLinux - Wiki - Bluetooth(opens new window)

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
dpkg -l | grep ed-cm4ind
dpkg -l | grep networkmanager
```
## 工业控制接口
IIoT-B100上, 预留丰富的工业控制总线, 有:

- 1x RS232
- 2x RS485
- 2x 光隔离DI
- 1x 单刀双置继电器
- 3x 12为ADC
均以凤凰端子方式引出

### 设备文件对照表

|接口ID	|CPU外设ID	|Linux设备文件(V1.1)	|Linux设备文件(V1.2)	|Linux设备文件(硬件V1.3)|
|------|------|------|------|------|
J58/UART0, Pin Header|	UART1	|/dev/serial0	|/dev/serial0	|/dev/serial0|
|RS485-1	|UART4	|/dev/ttyAMA2	|/dev/ttyAMA2	|/dev/ttyAMA2|
|RS485-2	|UART3	|/dev/ttyAMA1	|/dev/ttyAMA1	|/dev/ttyAMA1|
|RS232	|UART5	|dev/ttyAMA3	|/dev/ttyAMA3	|/dev/ttyAMA3|
|DIN1	|GPIO11	|		
|DIN2	|GPIO26	|		
|继电器|	GPIO22	|		
|ADC - AIN1		||in_voltage4_raw	|N/A|	in_voltage1_raw|
|ADC - AIN2		||in_voltage6_raw	|N/A|	in_voltage2_raw|
|ADC - AIN3		||in_voltage7_raw	|N/A|	in_voltage3_raw|
|蜂鸣器	|GPIO25			|
|J68, 1xGPIO	|GPIO27|

### RS232
IIoT-B100上有一路RS232, 对应CPU上的原生UART, 使用SP3232电平转换芯片, 直接在凤凰端子输出232电平. 请参考上述设备文件对照表, 查看232接口对应的Linux设备节点(文件).

若使用官方镜像, 需要按照我们的BSP包, 请参考章节: "通过apt-get安装BSP包"安装BSP

### RS485
IIoT-B100上有2路RS485, 均对应CPU上的原生串口, 并使用SP3485接口芯片做电平转换. 请参考上述设备文件对照表, 查看各个485接口对应的Linux设备节点(文件).

> 注: 若使用官方镜像, 需要安装我们的BSP包才可以正常使用此功能, 请参考章节: "通过apt-get安装BSP包"安装BSP.

### ADC
IIoT-B100上有3路ADC通道, 以下以AIN1为例, 演示如何读取:

```
cd /sys/bus/iio/devices
cd iio\:device0

cat in_voltage4_raw
```
:::danger 注意

IIoT-B100不同硬件版本, ADC有所区别, 请参考上述设备文件对照表, 查看各个版本ADCIN对应的Linux设备节点(文件):

硬件V1.1使用的ADC芯片为STMPE811, 具体参考: 数据手册(opens new window)
硬件V1.2, 因为STMPE811供应链短缺, 无ADC芯片
硬件V1.3使用的ADC芯片为ADS1015, 具体参考: 数据手册(opens new window)
:::

:::danger 注意

若使用官方镜像, 需要安装我们的BSP包才可以正常使用此功能, 请参考章节: "通过apt-get安装BSP包"安装BSP.
:::

### 继电器
IIoT-B100上配置了一个继电器, 由GPIO22引脚的高低电平控制该继电器的开关, 默认状态下为常闭, COM1和NC1导通, COM2和NC2导通. 当GPIO22为高电平时, 继电器打开, COM1和NO1导通, COM2和NO2导通.

打开继电器

```sudo raspi-gpio set 22 op dh```

闭合

```sudo raspi-gpio set 22 op dl```


### 蜂鸣器
IIoT-B100上配置了一个蜂鸣器, 可以通过GPIO控制, 对应GPIO为GPIO11.

### GPIO Pin Header
IIoT-B100通过1x2 2.54mm Pin Header引出一路GPIO, 直连CPU上的GPIO27

## 扩展接口
### Mini PCIe
IIoT-B100上有一路Mini PCIe扩展接口, 可扩展一些外设, 如4G, 5G, NPU等. 上面有1-lane PCIe Gen2, 速度高达5Gbps, 另有一路USB 2.0 Host接口.

我司支持移远的EC20 4G全网通模块, 并作为一个可选项直接安装到整机里, 请参考"订购编码"选购. 我司也正考虑5G模块的支持, 尽情期待.

### 5V@1A 直流电源输出
J72, 在PCBA正面, 靠近SIM卡插槽, 提供5V@1A的直流输出. 丝印上有标5V, GND. 可用于给7寸官方触摸屏供电, 也可用于其他负载.