import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

const nextConfig = {
  output: 'export',
  basePath: '/nextra-docs',
  images: {
    unoptimized: true
  }
}

export default withNextra(nextConfig)
