const baseBath = "https://vnoit.com";

export default function sitemap() {
  return [
    {
      url: baseBath,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseBath}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseBath}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseBath}/blogs/aws-es2-Instance-purchasing-options`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
