import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: '个人知识管理小站',
  tagline: '专注于图可视,低代码应用技术',
  favicon: 'img/favicon.ico',
  url: 'https://changecoder.com',
  baseUrl: '/',
  organizationName: 'changecoder', // Usually your GitHub org/user name.
  projectName: 'changecoder', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/changecoder',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/changecoder',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '个人知识管理小站',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/changecoder',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 个人知识管理小站, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
