import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "协议转换",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        通过可视化配置，轻松的连接到你的任何设备和系统(如PLC、扫码枪、CNC、数据库、串口设备、上位机、OPC
        Server、OPC UA Server、Mqtt Server等).
      </>
    ),
  },
  {
    title: "云端连接",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        内置Mqtt服务端，OPCUA服务端，轻松的与MES、SCADA交互数据.
        支持IoTSharp、ThingsBoard等私有云平台.
        支持RPC指令，反向数据写入.
      </>
    ),
  },
  {
    title: "企业版",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: <>vue前端、时序数据库、全量采集驱动、规则引擎、地代码报表、web组态等</>,
  },
  {
    title: "硬件加持",
    Svg: require("../../docs/hardware/images/hero.svg").default,
    description: (
      <>
        Cortex-A72, 1.5GHz ARM v8 64-bit CPU；
        emmc、4G全网通、Wi-Fi、232、485、HDMI、SD卡扩展、多网口、多USB、Bluetooth
        5.0、ADC、继电器、蜂鸣器、IO； 当前12V DC，9月推出24V.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
