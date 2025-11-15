/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://calpolysoc.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // Custom robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://calpolysoc.org/server-sitemap.xml', // For dynamic routes if needed
    ],
  },
  
  // Define priorities for different pages
  transform: async (config, path) => {
    // Custom priority based on page importance
    const customPriority = {
      '/': 1.0,
      '/team': 0.9,
      '/projects': 0.9,
      '/schedule': 0.8,
      '/gallery': 0.8,
      '/faq': 0.7,
      '/contact': 0.7,
      '/links': 0.6,
    };

    const customChangefreq = {
      '/': 'daily',
      '/schedule': 'daily',
      '/gallery': 'weekly',
      '/team': 'monthly',
      '/projects': 'monthly',
      '/faq': 'monthly',
      '/contact': 'monthly',
      '/links': 'monthly',
    };

    return {
      loc: path,
      changefreq: customChangefreq[path] || config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  
  // Exclude paths from sitemap
  exclude: ['/404', '/500', '/api/*', '/discord', '/sign-in', '/temp'],
};
