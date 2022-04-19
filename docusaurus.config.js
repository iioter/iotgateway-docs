// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IoTGateway',
  tagline: '基于.NET 6.0的跨平台物联网网关',
  url: 'https://gitee.com/iioter/iotgateway',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iioter', // Usually your GitHub org/user name.
  projectName: 'iotgateway', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitee.com/iioter/iotgateway/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl: 'https://gitee.com/iioter/iotgateway/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IoTGateway',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '教程',
          },
          /* {
            to: '/blog'
            , label: '博客'
            , position: 'left'
          }, */
          {
            href: 'https://github.com/iioter/iotgateway/',
            label: 'GitHub',
            position: 'right',
          },{
            href: 'https://gitee.com/iioter/iotgateway/',
            label: 'Gitee',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '教程',
            items: [
              {
                label: 'Doc',
                to: '/docs/intro',
              },
              {
                label:'Video',
                href:'https://space.bilibili.com/68774245'
              }
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/iioter/iotgateway/',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/iioter/iotgateway/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IoTGateway by whd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
