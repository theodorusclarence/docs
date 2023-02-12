import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s - docs.thcl.dev',
      }
    }
  },
  logo: (
    <>
      <span className="hidden font-normal text-gray-600 md:inline">
        Clarence's Documentation
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/theodorusclarence/docs',
  },
  chat: {
    link: 'https://twitter.com/th_clarence',
    icon: (
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>Logo Twitter</title>
        <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
      </svg>
    ),
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  docsRepositoryBase: 'https://github.com/theodorusclarence/docs/blob/main/',
  footer: {
    text: (
      <p>
        © {new Date().getFullYear()}{' '}
        <a
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
          href="https://theodorusclarence.com?ref=docs"
          target="_blank"
          rel="noopener"
        >
          Theodorus Clarence
        </a>
        . Made with{' '}
        <a
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
          href="https://nextra.site/"
          target="_blank"
          rel="noopener"
        >
          Nextra
        </a>
      </p>
    ),
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter, title } = useConfig()

    const image = openGraph({
      description:
        frontMatter.description ||
        'Clarence’s documentation about practices on development',
      siteName: 'docs.thcl.dev',
      templateTitle: title || "Clarence's Documentation",
    })

    return (
      <>
        {/* Open Graph */}
        <meta property="og:url" content={`https://docs.thcl.dev${asPath}`} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:type" content={'docs.thcl.dev'} />
        <meta property="og:site_name" content="Clarence's Documentation" />
        <meta
          name="og:description"
          content="Theodorus Clarence’s documentation about practices on development"
        />
        <meta name="image" property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site:domain" content="docs.thcl.dev" />
        <meta name="twitter:url" content={`https://docs.thcl.dev${asPath}`} />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Theodorus Clarence’s documentation about practices on development"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Docs - theodorusclarence"
        />
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
        <script
          async
          defer
          data-website-id="a1ad7cb6-4189-4930-aa8e-34a0fef859a8"
          src="https://umami.thcl.dev/umami.js"
          data-domains="docs.thcl.dev"
        />
      </>
    )
  },
}

type OpenGraphType = {
  siteName: string
  description: string
  templateTitle?: string
  logo?: string
}
function openGraph({
  siteName,
  templateTitle,
  description,
  // !STARTERCONF Or, you can use my server with your own logo.
  logo = 'https://docs.thcl.dev/android-icon-192x192.png',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo)
  const ogSiteName = encodeURIComponent(siteName.trim())
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined
  const ogDesc = encodeURIComponent(description.trim())

  return `https://og.clarence.link/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`
}

export default config
