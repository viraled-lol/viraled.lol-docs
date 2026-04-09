import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "viraled.lol",
  description: "Content Creator Networking Platform",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  appearance: 'force-dark', 
  themeConfig: {
    siteTitle: 'viraled.lol',
    nav: [
      { text: 'Support Server', link: 'https://discord.gg/G4WvCkVB57' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Info', link: '/info' },
          { text: 'Terms of Service', link: '/tos' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/G4WvCkVB57' }
    ]
  }
})
