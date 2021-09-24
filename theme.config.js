export default {
  github: 'https://github.com/theodorusclarence',
  docsRepositoryBase: 'https://github.com/theodorusclarence/docs/blob/master',
  titleSuffix: ' – Docs',
  logo: (
    <>
      <span className="hidden mr-2 font-extrabold md:inline">DOCS</span>
      <span className="hidden font-normal text-gray-600 md:inline">
        Theodorus Clarence's Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Docs: Theodorus Clarence's Documentation"
      />
      <meta
        name="og:description"
        content="Docs: Theodorus Clarence's Documentation"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://theodorusclarence.com/large-og.jpg"
      />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://docs.theodorusclarence.com/" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta
        name="og:image"
        content="https://theodorusclarence.com/large-og.jpg"
      />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>© {new Date().getFullYear()} Theodorus Clarence.</>,
  unstable_faviconGlyph: '👋',
}
