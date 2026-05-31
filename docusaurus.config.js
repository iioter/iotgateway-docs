// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
  title: "IoTGateway",
  tagline:
    "Open-Source Industrial IoT Gateway - Protocol Conversion, Edge Computing & Cloud Connectivity",
  url: "https://iotgateway.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "iioter", // Usually your GitHub org/user name.
  projectName: "iotgateway", // Usually your repo name.
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "IoT Gateway, Industrial IoT, IIoT, OPC UA, MQTT, Modbus, PLC, SCADA, .NET8, edge computing, protocol conversion, open source, ThingsBoard, IoTSharp",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "author",
        content: "IoTGateway Team",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "canonical",
        href: "https://iotgateway.net/",
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "IoTGateway",
        applicationCategory: "IndustrialApplication",
        operatingSystem: "Windows, Linux, ARM",
        description:
          "Open-source Industrial IoT Gateway built on .NET8. Cross-platform B/S architecture with visual configuration for industrial data collection, protocol conversion, and edge computing.",
        url: "https://iotgateway.net",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@type": "Organization",
          name: "IoTGateway",
          url: "https://github.com/iioter",
        },
        license: "https://opensource.org/licenses/MIT",
        codeRepository: "https://github.com/iioter/iotgateway",
        programmingLanguage: "C#",
      }),
    },
  ],
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
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/blog/tags/**"],
          filename: "sitemap.xml",
        },
        // Google Analytics - replace G-XXXXXXXXXX with your actual measurement ID
        // gtag: {
        //   trackingID: "G-XXXXXXXXXX",
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "IoTGateway" },
        {
          name: "og:title",
          content: "IoTGateway - Open-Source Industrial IoT Gateway",
        },
        {
          name: "og:description",
          content:
            "Cross-platform industrial IoT gateway built on .NET8. Protocol conversion, edge computing, MQTT, OPC UA, Modbus, PLC connectivity.",
        },
        {
          name: "og:image",
          content: "https://iotgateway.net/img/og-image.png",
        },
        { name: "og:url", content: "https://iotgateway.net" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "IoTGateway - Open-Source Industrial IoT Gateway",
        },
        {
          name: "twitter:description",
          content:
            "Cross-platform industrial IoT gateway built on .NET8. Visual configuration for industrial data collection and protocol conversion.",
        },
        {
          name: "twitter:image",
          content: "https://iotgateway.net/img/og-image.png",
        },
      ],
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
