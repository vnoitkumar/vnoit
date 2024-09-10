import Image from "next/image";

export const metadata = {
  title: "Vinoth (Vnoit) - Posters",
  description: "Exploring tech trends, coding tips, and innovation insights.",
  openGraph: {
    title: "Vinoth (Vnoit) - Posters",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com",
    images: [
      {
        url: "/assets/images/og-image-3600x1890.jpg",
        width: 3600,
        height: 1890,
        alt: "Vinoth (Vnoit)",
      },
      {
        url: "/assets/images/og-image-1800x945.jpg",
        width: 1800,
        height: 945,
        alt: "Vinoth (Vnoit)",
      },
      {
        url: "/assets/images/og-image-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Vinoth (Vnoit)",
      },
    ],
  },
  twitter: {
    title: "Vinoth (Vnoit) - Posters",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    card: "summary_large_image",
    creator: "@vnoitkumar",
    images: {
      url: "/assets/images/og-image-3600x1890.jpg",
      alt: "Vinoth (Vnoit)",
    },
  },
};

function Posters() {
  // [
  //   'Autocorrection in Git.png',
  //   'EC2 Launch types.png',
  //   'Enter key hint.png',
  //   'Equality operator.png',
  //   'HTTP Status code.png',
  //   'IAM.png',
  //   'Ignore elements using commas.png',
  //   'Img Alt.png',
  //   'Img tag in 2020.png',
  //   'Input mode.png',
  //   'Is Alive.png',
  //   "Logical OR '__' vs Nullish coalescing '__'.png",
  //   'Mark Down Cheat Sheet.png',
  //   'NPX prettier.png',
  //   'New JSX Transform.png',
  //   'SVG is Good.png',
  //   'Screen Wake Lock API.png',
  //   'Semantic versioning.png',
  //   'Swap variables trick.png',
  //   'ToBoolean Wrapper.png',
  //   'Truthy vs Falsy.png'
  // ]
  const posters = [
    {
      url: "ec2-launch-types/ec2-launch-types.jpg",
      originalImgURL: "ec2-launch-types/ec2-launch-types.png",
      width: 2048,
      height: 1024,
      title: "EC2 Launch types",
      artical: "https://vnoit.com/blogs/aws-es2-Instance-purchasing-options",
      blurDataURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAB4APAMBIgACEQEDEQH/xAAxAAACAgMBAAAAAAAAAAAAAAADBQACAQQGBwEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/2gAMAwEAAhADEAAAAPNQNdafWSg1xj0C5kXPzvQa0W0rSrSyuKUo1voFxxAMk6f/xAAyEAACAQMCAwQIBwEAAAAAAAABAgMABBESIQUTMRVBUoEiQlFjcZGT0RQzYqHC0uPw/9oACAEBAAE/AJ3vZfXAQSyBSHVCdLYOdwa5d73yn64/tTcUkt7aJJbG2OhAhkaXLMfFsaTjUfVeGWxU9MySH980t82BL2VbYkRSAbhsYbfIBbYmryad25ojWBFTBWObI2792JzUV80cqSc7XocHS7kqcdxGaivTfBpdCxAHSFiOlegOdqtpbpIpFiSFgZZ8ag5YemfCCKXtU9LsjPuv86kk4tFpHNlIxtohBA+aU7vJIXdtTN1bbf5VDNcpbwDkwkcpSMiQnBGwOB1prq+OWMMBz+iX7V2te4DGyYBQNykgAArhzvIk7ucs0pJPtOkVALvlMYpDp5823LRtJ1nvLA71LaX0sjObi5BPhwoHkJKHD7wA5nuhjr6X+lTRLDIU1EsuzZXGPkTUHaH4eALKdPKQgcpMDI6ZLb0O0MHEjfST+1XJ4vMrRaWdCBnToj/lXDlZY5lYYIlII8hTQcTR5FiudKGRyFDkdWz7KMHFGRke61KwwQZGwQe47V2PJ4IP+8qXhlwBgcoD4n7UsPFEAVbnAAAAEjdB5Ukd8PzryQJ7t8nPmKk4dbSyO80krZOdWELH45FWVny43ETZTX6+x6D2Cv/EAB8RAAICAQQDAAAAAAAAAAAAAAABAhGRAxIxMkFigv/aAAgBAgEBPwBUl4wRjGKpJGMGrFbbFx2ZfsfTNVrZyf/EACgRAAIBAwICCwAAAAAAAAAAAAECAAMR0RIxBCETFDIzUVNhgYKSwf/aAAgBAwEBPwBrliSHPzGJUqOX7TbDc4tLG2z/AHGJwDv04Go7GMp1Neip5+JzGUkd0o9QT+mAHyUPuczgqb9YB02HOf/Z",
    },
    {
      url: "aws-iam/AWS-IAM.jpg",
      originalImgURL: "aws-iam/AWS-IAM.png",
      width: 4048,
      height: 2024,
      title: "AWS Identity and Access Management (IAM)",
      blurDataURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIABkAMgMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAABQIDBAYHAQEBAQEAAAAAAAAAAAAAAAACAwEA/9oADAMBAAIQAxAAAADxNkxLzo2qLArMO3pd7mBMOOiNBQNLVIKatiaKEwNP/8QALRAAAgEDBAADBgcAAAAAAAAAAQIDAAQRBRIhMRATFCIyQVFSshUkM0JFcpH/2gAIAQEAAT8ARQ7BS6rn4scCrS/9B5yC2sLjLA75YRNjH0k4oa7j+J0nHOfya1e6slpcNAul6S4VF5NmvbDd86m1uSe3lt/RabEsns70tlRkB+lvhUUkthcQ3ENxC0isSuw78cY6Ipte1FmZi6ZJz+mtaIggmndPS3G6Bo9rOU27+zyh5rW1e5nhkmmtYisCRBQ5ORHxnhBT6XJDaWF2zxMlw+0Ju5H9qk0xpNSFmhjjYjvcXFaNctY3kxNnBcDDRt5qO6jDfApnB4rUdf8AOsJ4/wAKtWlk8zMuJGbEvZVdiY8IrqSJdgWMjOfbjV/uFS3DyqFZYwAc+xGqfaBVu1nMqRyRImxfeecoCT30pqU2EQEixxO27qO6Yn/NlWt5c2zyelJUP+33uBR1PWGRlMj4bPSgVyOOseKd03Xh8/D/xAAiEQABAwMDBQAAAAAAAAAAAAABAAIRAxITECFRIjEyQWH/2gAIAQIBAT8AJJfBHTCZjqVGhhnyEfQYTrg4NDRb73WNnCgK3fuVA40//8QAIBEAAQQCAQUAAAAAAAAAAAAAAQACAxESUSEQEyIxov/aAAgBAwEBPwBrAIi7IZ36T45443SP4Ar6FpgYY8nP874FLuv2rO1mcaKs76f/2Q==",
    },
  ];

  return (
    <section className="mb-12 mx-auto mt-1 max-w-7xl p-6 lg:px-8">
      <h2 className=" text-xl font-semibold leading-snug mb-3">
        All Posters
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {posters.map((post, index) => {
          return (
            <div key={index}>
              <a
                href={`/assets/images/posters/${post.originalImgURL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  height={post.height / 3}
                  width={post.width / 3}
                  blurDataURL={post.blurDataURL}
                  placeholder="blur"
                  src={`/assets/images/posters/${post.url}`}
                  alt={post.title}
                  title={post.title}
                />
              </a>
              <p className="flex gap-4 mt-1  text-base py-5 justify-center">
                <span>{post.title}</span>

                {post.artical && (
                  <>
                    |
                    <a
                      className="flex items-center gap-1"
                      href={post.artical}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={post.title}
                    >
                      Artical
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  </>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Posters;
