/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://foxpatch.vercel.app',
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: ['/api/*'],
};