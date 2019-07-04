module.exports = {
  title: 'jade.builders',
  description: 'Jade resources',
  themeConfig: {
    nav: [
      { text: 'jade.builders', link: '/' },
      { text: 'Beginners', link: '/beginners/' },
      { text: 'Use', link: '/use/' },
      { text: 'Learn', link: '/learn/' },
      { text: 'Developers', link: '/developers/' }
    ]
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Jade' }],
    ['meta', { property: 'og:site_name', content: 'jade.builders' }],
    ['meta', { property: 'og:description', content: 'The Jade Suite' }],
    ['meta', { property: 'og:url', content: 'https://jade.builders' }],
    ['meta', { property: 'og:image', content: 'https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-dark/jade-logo-dark%20(PNG)/256x256.png' }],
    ['script', { async: true, defer: true, src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' },
    `
      new Crate({
        server: '538420083614023710',
        channel: '545729672143699968',
        shard: 'https://disweb.deploys.io'
      })
    `]
  ],
  markdown: {
    anchor: { permalinkSymbol: '↳' }
  }
}
