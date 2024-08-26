---
title: "Bye Bye, Try-Catch Blocks"
excerpt: "A constructive and inclusive social network for software developers. With you every step of your journey."
coverImage: "/assets/images/blogs/aws-es2-Instance-purchasing-options/cover.jpg"
date: "2024-06-23"
readTime: "9 min read"
author:
  name: Vinoth
  picture: "/assets/images/authors/vinoth.jpg"
ogImage:
  url: "/assets/images/blogs/aws-es2-Instance-purchasing-options/og-image.jpg"
twitterHandel: "@vnoitkumar"
coverImageBlurHash: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAgFBgr/xAAnEAACAgECBQMFAAAAAAAAAAABAwIEBQYRAAcIEiETMUFhgZGx0f/EABkBAAIDAQAAAAAAAAAAAAAAAAEHAAIFA//EACoRAAEEAQMCBQQDAAAAAAAAAAECAwQFEQAGBxIhCBMiMTIUQlGxYXGB/9oADAMBAAIRAxEAPwDbDWpVcbWkijXTWSJ2HxSoGK/XeZuZMmUiQWuJmyW4AMiQYjc8VCQkEDPck+pSldz/ACok4/AzgDsAB20VKKiCcfaPSlKBgdvikJTnGcnGVHuok6VfpW1v1F6zpa+n1C6WxWl72N1MxGl04yhjaC242VzJwmtBx2os+MjjK9VOMZQy7mLbdnaskudKM1VVPxjb8pWc7eaORqGJSxIVww1tV2NGjRjMgKZcMk9ce9uVS2WVCOWpj7de6tbrrZjYb9Ll5apOI6mFstfGG4JV3Km1ktzdCH5kiX9K+hcYQVrQ/VVohSpBVMS/CbLyENsMLKEdYcekuYnR/wAlOZeqb2sc3iM7jMzlIrllZaXz93T9PJXF90ZZO5SpgIZk7C/SVauRjCdmKEzcJODGTxN5eHHivfN/L3NcVlvDtrBLRsHNvbjudvR7CQ0nyxPmxKmXGjSLFxlLTD05bZfeZjxm3FqDKMa+y/EvytsXb8TbNXY1M+rrytNeL+njXEqDFV0lMCNLkqDyIDK/MXGjKUsRy84htQa6EJaIe33j+o/0/nh66QWgxjHbtAG8hvsAN/c+dvr54CvY/wBH9amqul7jK1u5p7bb4x3ZM7RBG0R58AfAHgcdHAAtQAwM+w1VPxH+/s6//9k="
---

Amazon EC2 provides purchasing options to enable you to optimize your costs based on your needs.

## On-Demand Instances

- Pay, by the second, for the instances that you launch.
- No longer-term commitments or upfront payments are needed.
- You have full control over its lifecycle, you decide when to launch, start, stop, reboot, or terminate it.
- You pay only when your On-Demand Instances are in the running state.
- Can increase or decrease your compute capacity.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Reserved Instances

- Up to 75% savings compared to On-Demand Instance pricing.
- You can purchase a Reserved Instance for a one-year or three-year commitment, with the three-year commitment offering a bigger discount.
- Commitment includes instance type and Region.
- Reserved Instances do not renew automatically; when they expire, you can continue using the EC2 instance without interruption, but you are charged On-Demand rates.
- After you purchase a Reserved Instance, you cannot cancel your purchase. However, you may be able to modify, exchange, or sell your Reserved Instance if your needs change.

## Scheduled Reserved Instances

- Purchase instances that are always available on the specified recurring schedule.
- Recur on a daily, weekly, or monthly basis, with a specified start time and duration.
- You pay for the time that the instances are scheduled, even if you do not use them.
- After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.
- You must purchase a Scheduled Reserved Instance minimum for one year.
- The minimum required utilization is 1,200 hours per year.

## Spot Instances

- The most cost-efficient instance in AWS. Up to 90% savings compared to On-Demand Instance pricing.
- Request unused EC2 instances, which can reduce your Amazon EC2 costs significantly.
- Instances that can "lose" at any point of time if your max price is less than the current spot price.
- Well-suited for batch jobs, background processing, and optional tasks. Not good for critical jobs.

## Dedicated Hosts

- Pay for a physical host.
- Physical server with EC2 instance capacity fully dedicated to your use.
- Full control of the Instance placement.
- Visibility into the underlying socket, the core of the hardware.
- You must purchase a Dedicated Hosts Instance minimum for one year.

## Dedicated Instances

- Pay, by the hour, for instances that run on hardware that's dedicated to a single customer.
- May share hardware with other instances from the same AWS account.

## Great combo

Reserved Instance for baseline + On-Demand and Spot Instances for scaling.
