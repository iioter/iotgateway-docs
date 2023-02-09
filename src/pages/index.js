import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
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
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            项目文档
          </Link>
          |
          <Link
            className="button button--secondary button--lg"
            href="/docs/enterprise/intro"
          >
            企业版
          </Link>
          |
          <Link
            className="button button--secondary button--lg"
            href="/docs/hardware/selection"
          >
            硬件选型
          </Link>
        </div>
        <div className={styles.buttons}>
          <table>
            <thead>
              <tr>
                <th>微信扫我进群</th>
                <th>
                  <a
                    style={{ color: "white" }}
                    target="_blank"
                    href="https://jq.qq.com/?_wv=1027&k=mus0CV0W"
                  >
                    QQ群(895199932)
                  </a>
                </th>
                <th>微信公众号</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={WXGroup} width="150" alt="微信扫我进群" />
                </td>
                <td>
                  <img src={QQ} width="150" alt="QQ群(712105424)" />
                </td>
                <td>
                  <img src={WX} width="150" alt="微信公众号" />
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
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
