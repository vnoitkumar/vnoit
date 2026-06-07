/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [75, 100],
    },
    async redirects() {
        return [
            {
                source: "/mentorship",
                destination: "/code-with-vnoit",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
