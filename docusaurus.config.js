// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "IoTGateway",
  tagline: "基于.NET 6.0的跨平台工业物联网网关",
  url: "http://iotgateway.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "iioter", // Usually your GitHub org/user name.
  projectName: "iotgateway", // Usually your repo name.
  scripts: [
    {
      charset: "UTF-8",
      id: "LA_COLLECT",
      src: "//sdk.51.la/js-sdk-pro.min.js?id=JhUGWE8V2M7cK149&ck=JhUGWE8V2M7cK149&autoTrack=true&hashMode=true",
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/iioter/docs/tree/main",
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl: "https://github.com/iioter/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "IoTGateway",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "教程",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            to: "/blog",
            label: "博客",
            position: "left",
          },
          {
            href: "https://github.com/iioter/iotgateway",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://gitee.com/iioter/iotgateway",
            label: "Gitee",
            position: "right",
          },
          {
            href: "https://gitcode.com/iioiot/iotgateway",
            label: "GitCode",
            position: "right",
          },
          {
            href: "https://iotgateway.taobao.com",
            label: "淘宝店",
            position: "right",
          },
          {
            href: "https://space.bilibili.com/68774245",
            label: "视频教程",
            position: "right",
          },
          {
            href: "http://online.iotgateway.net/",
            label: "在线体验",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "教程",
            items: [
              {
                label: "Doc",
                to: "/docs/intro",
              },
              {
                label: "Video",
                href: "https://space.bilibili.com/68774245",
              },
            ],
          },
          {
            title: "源码",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/iioter/iotgateway",
              },
              {
                label: "Gitee",
                href: "https://gitee.com/iioter/iotgateway",
              },
              {
                label: "GitCode",
                href: "https://gitcode.com/iioiot/iotgateway",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "淘宝买硬件",
                to: "https://iotgateway.taobao.com",
              },
            ],
          },
        ],
        copyright: '<a href="https://beian.miit.gov.cn" target="_blank">苏ICP备2021013661号</a>',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp"],
      },
    }),
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
    localeConfigs: {
      en: {
        htmlLang: "zh-CN",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      cn: { htmlLang: "zh-CN", direction: "ltr" },
    },
  },
};

module.exports = config;
