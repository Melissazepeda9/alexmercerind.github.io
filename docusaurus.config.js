// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsDark");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "alexmercerind",
  tagline: "alexmercerind's libraries's docs & blogs.",
  url: "https://alexmercerind.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "alexmercerind",
  projectName: "alexmercerind.github.io",
  deploymentBranch: "gh-pages",
  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/alexmercerind/alexmercerind.github.io/edit/master/docs/${docPath}`,
          breadcrumbs: false,
          sidebarCollapsed: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: 'UA-222584022-1',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'software, software-development, programming, flutter, react, alexmercerind',
        }
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "alexmercerind",
        // logo: {
        //   alt: "alexmercerind",
        //   src: "img/alexmercerind.png",
        // },
        items: [
          // {
          //   type: "doc",
          //   docId: "dart_vlc",
          //   position: "left",
          //   label: "Docs",
          // },
          // {
          //   to: "/docs",
          //   label: "Docs",
          //   position: "left",
          // },
          {
            to: "/about",
            label: "About",
            position: "left",
          },
          {
            href: "https://github.com/alexmercerind",
            className: "header-github-link",
            position: "right",
          },
          {
            href: "https://twitter.com/alexmercerind",
            className: "header-twitter-link",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/hitesh-kumar-saini",
            className: "header-linkedin-link",
            position: "right",
          },
          {
            href: "#",
            className: "header-discord-link",
            position: "right",
          },
          {
            href: "https://wa.me/+917905236796",
            className: "header-whatsapp-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/alexmercerind",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/alexmercerind",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/hitesh-kumar-saini",
              },
              {
                label: "WhatsApp",
                href: "https://wa.me/+917905236796",
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Hitesh Kumar Saini. Built with React.js & Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['dart'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
