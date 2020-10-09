export default {
  platform: process.platform,
  port: process.env.PORT ? process.env.PORT : 3000,
  title: 'Javis Desktop',
  languages: ['zh', 'en'],
  fallbackLng: 'en',
  namespace: 'translation'
}
