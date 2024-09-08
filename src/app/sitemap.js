const baseBath = "https://vnoit.vercel.app";

export default function sitemap() {
  return [
    {
      url: baseBath,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseBath}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseBath}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: baseBath,
      lastModified: "2024-09-08",
      changeFrequency: "monthly",
      priority: 0.5,
      images: [
        "https://vnoit.vercel.app/assets/images/posts/auto-correction-in-git/auto-correction-in-git.png",
        "https://vnoit.vercel.app/assets/images/posts/ec2-launch-types/ec2-launch-types.png",
        "https://vnoit.vercel.app/assets/images/posts/aws-iam/AWS-IAM.png",
      ],
    },
  ];
}
