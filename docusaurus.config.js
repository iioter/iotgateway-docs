// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
  title: "IoTGateway",
  tagline: "开源工业物联网网关",
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
          alt: "IoTGateway Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            to: "/blog",
            label: "Blog",
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
            label: "Taobao Store",
            position: "right",
          },
          {
            href: "https://space.bilibili.com/68774245",
            label: "Video Tutorials",
            position: "right",
          },
          {
            href: "http://online.iotgateway.net/",
            label: "Live Demo",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Tutorial",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
              {
                label: "Video",
                href: "https://space.bilibili.com/68774245",
              },
            ],
          },
          {
            title: "Source Code",
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
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Hardware Store",
                to: "https://iotgateway.taobao.com",
              },
            ],
          },
        ],
        copyright: 'Copyright © IoTGateway. Built with Docusaurus.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp"],
      },
    }),
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN", "en"],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
        direction: "ltr",
      },
      en: {
        label: "English",
        direction: "ltr",
      },
    },
  },
};

module.exports = config;
