module.exports = ({
  shopName,
  accessToken,
  shopifyLite = false,
  imageQuality = '95',
  manifest = {},
}) => ({
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName,
        accessToken,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Work Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#333',
        showSpinner: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: imageQuality,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: manifest.hasOwnProperty('name')
          ? manifest.name
          : 'Gatsby Storefront',
        short_name: manifest.hasOwnProperty('short_name')
          ? manifest.short_name
          : 'Gatsby Storefront',
        start_url: manifest.hasOwnProperty('start_url')
          ? manifest.start_url
          : '/',
        background_color: manifest.hasOwnProperty('background_color')
          ? manifest.background_color
          : '#fff',
        theme_color: manifest.hasOwnProperty('theme_color')
          ? manifest.theme_color
          : '#333',
        display: manifest.hasOwnProperty('display')
          ? manifest.display
          : 'standalone',
        icon: manifest.hasOwnProperty('icon') ? manifest.icon : undefined,
        cache_busting_mode: manifest.hasOwnProperty('cache_busting_mode')
          ? manifest.cache_busting_mode
          : 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-lint-queries',
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        // Fields to index
        fields: ['title', 'tags'],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          ShopifyProduct: {
            title: (node) => node.title,
            tags: (node) => node.tags,
            shopifyThemePath: (node) => node.fields.shopifyThemePath,
          },
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://demo.gatsbystorefront.com',
    gatsbyStorefrontConfig: {
      storeName: 'Gatsby Storefront',
      storeDescription: 'Demo store description',
      email: 'info@gatsbystorefront.com',
      logoUrl: '',
      company: 'Gatsby Storefront Inc.',
      location: 'New York, NY',
      address: '1 Centre St.',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [],
      payments: [],
      // For available socia share buttons see: https://github.com/nygardk/react-share
      shareButtons: [],
      googleAnalyticsId: 'UA-141525658-3',
      isShopifyLite: shopifyLite,
      //
      // Main page types: "carousel", "collection", "product"
      //
      mainPage: [],
      // Menu types: "header", "collection", "product", "link"
      menu: {},
      footerLinks: [],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
});
