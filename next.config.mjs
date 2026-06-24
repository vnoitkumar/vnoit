/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [75, 100],
    },
    async redirects() {
        return [
            {
                source: "/mentorship",
                destination: "/code-with-vinoth",
                permanent: true,
            },
            {
                source: "/code-with-vnoit",
                destination: "/code-with-vinoth",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
