import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Perspective Precision Input Components',
  tagline: 'Precision input components for Ignition Perspective.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'hparcells',
  projectName: 'perspective-precision-input-components',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    navbar: {
      title: 'PIC Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs'
        },
        {
          href: 'https://github.com/hparcells/perspective-precision-input-components',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro'
            }
          ]
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hparcells/perspective-precision-input-components'
            },
            {
              label: 'Issues',
              href: 'https://github.com/hparcells/perspective-precision-input-components/issues'
            },
            {
              label: 'Releases',
              href: 'https://github.com/hparcells/perspective-precision-input-components/releases'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hunter Parcells. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
