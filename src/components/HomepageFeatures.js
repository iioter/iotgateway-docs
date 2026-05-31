import React from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: translate({ id: "feature.protocol.title", message: "Protocol Conversion" }),
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <Translate
        id="feature.protocol.description"
        description="Protocol conversion feature description"
      >
        Connect to any device or system through visual configuration — PLCs, barcode scanners, CNCs, databases, serial devices, SCADA, OPC Server, OPC UA Server, MQTT Server, and more.
      </Translate>
    ),
  },
  {
    title: translate({ id: "feature.cloud.title", message: "Cloud Connectivity" }),
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <Translate
        id="feature.cloud.description"
        description="Cloud connectivity feature description"
      >
        Built-in MQTT server and OPC UA server for seamless data exchange with MES and SCADA. Supports IoTSharp, ThingsBoard and other private cloud platforms. RPC commands and reverse data writing supported.
      </Translate>
    ),
  },
  {
    title: translate({ id: "feature.enterprise.title", message: "Enterprise Edition" }),
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <Translate
        id="feature.enterprise.description"
        description="Enterprise feature description"
      >
        Vue front-end, time-series database, full collection drivers, rule engine, low-code reports, web SCADA, and more.
      </Translate>
    ),
  },
  {
    title: translate({ id: "feature.hardware.title", message: "Industrial Hardware" }),
    Svg: require("../../docs/hardware/images/hero.svg").default,
    description: (
      <Translate
        id="feature.hardware.description"
        description="Hardware feature description"
      >
        Cortex-A72, 1.5GHz ARM v8 64-bit CPU; eMMC, 4G LTE, Wi-Fi, RS-232, RS-485, HDMI, SD card expansion, multiple Ethernet ports, USB, Bluetooth 5.0, ADC, relay, buzzer, GPIO; 9-36V DC wide-range power input.
      </Translate>
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
