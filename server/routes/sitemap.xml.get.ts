// server/routes/sitemap.xml.get.ts
export default defineEventHandler((event) => {
  const siteUrl = 'https://nuxt-basic-ssr.vercel.app/'

  const urls = [
    '/',
    '/products',
    '/products/lipstick-1',
    '/products/serum-1',
    '/products/palette-1',
  ]

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        (path) => `
      <url>
        <loc>${siteUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>${path === '/' ? '1.0' : '0.8'}</priority>
      </url>`
      )
      .join('') +
    `</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return body
})
