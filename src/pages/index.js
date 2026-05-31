import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import WXGroup from "../../static/img/wxgroup.png";
import QQ from "../../static/img/qq.png";
import WX from "../../static/img/qrcode.jpg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {translate({
            id: "homepage.tagline",
            message: "Open-Source Industrial IoT Gateway - Protocol Conversion, Edge Computing & Cloud Connectivity",
            description: "The homepage tagline",
          })}
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            <Translate id="homepage.button.docs">Documentation</Translate>
          </Link>
          |
          <Link
            className="button button--secondary button--lg"
            href="/docs/enterprise/intro"
          >
            <Translate id="homepage.button.enterprise">Enterprise</Translate>
          </Link>
          |
          <Link
            className="button button--secondary button--lg"
            href="/docs/hardware/selection"
          >
            <Translate id="homepage.button.hardware">Hardware</Translate>
          </Link>
        </div>
        <div className={styles.buttons}>
          <table>
            <thead>
              <tr>
                <th>
                  <Translate id="homepage.contact.wechat">WeChat Group</Translate>
                </th>
                <th>
                  <a
                    style={{ color: "white" }}
                    target="_blank"
                    href="https://jq.qq.com/?_wv=1027&k=mus0CV0W"
                  >
                    <Translate id="homepage.contact.qq">QQ Group (895199932)</Translate>
                  </a>
                </th>
                <th>
                  <Translate id="homepage.contact.official">WeChat Official Account</Translate>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={WXGroup} width="150" alt="WeChat Group" />
                </td>
                <td>
                  <img src={QQ} width="150" alt="QQ Group" />
                </td>
                <td>
                  <img src={WX} width="150" alt="WeChat Official Account" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({
        id: "homepage.meta.description",
        message: "IoTGateway - Open-source Industrial IoT Gateway built on .NET8. Cross-platform, B/S architecture, visual configuration for industrial data collection and protocol conversion.",
        description: "The homepage meta description",
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
