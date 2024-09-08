export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
      //   allow: "/",
    },
    sitemap: "https://vnoit.com/sitemap.xml",
  };
}
