export default {
  platform: process.platform,
  port: process.env.PORT ? process.env.PORT : 3000,
  title: 'Javis Desktop',
  languages: ['cn', 'en'],
  fallbackLng: 'en',
  namespace: 'translation'
}
