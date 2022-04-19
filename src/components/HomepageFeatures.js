import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '协议转换',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        通过可视化配置，轻松的连接到你的任何设备和系统(如PLC、扫码枪、CNC、数据库、串口设备、上位机、OPC Server、OPC UA Server、Mqtt Server等).
      </>
    ),
  },
  {
    title: '云端连接',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        内置Mqtt服务端，OPCUA服务端，轻松的与MES、SCADA交互数据.
        支持IoTSharp、ThingsBoard等私有云平台.
        持续更新以支持阿里、百度、腾讯、中移物联等公有云平台.
      </>
    ),
  },
  {
    title: '双向通讯',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        将遥测、属性的上传到平台；接收平台MQTT RPC指令，反向控制.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
