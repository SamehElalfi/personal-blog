// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'مدونتي',
  tagline: 'Dinosaurs are cool',
  url: 'https://samehelalfi.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SamehElalfi', // Usually your GitHub org/user name.
  projectName: 'personal-blog', // Usually your repo name.
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // routeBasePath: '/',
          editUrl:
            'https://github.com/SamehElalfi/personal-blog/tree/main/packages/',
          feedOptions: {
            type: 'all',
            copyright: `جميع الحقوق محفوظة تحت رخصة المشاع الإبداعي 4.0 © ${new Date().getFullYear()}`,
          },
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
        title: 'مدونتي',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: 'المدونة', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `جميع الحقوق محفوظة تحت رخصة المشاع الإبداعي 4.0 © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
