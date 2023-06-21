/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images : {
        remotePatterns: [
            // cdn.weatherapi.com
            // https://cdn.weatherapi.com/weather/64x64/night/113.png
            {
                protocol: 'https',
                hostname: "cdn.weatherapi.com",
                port: "",
            }
        ]
    }
}
