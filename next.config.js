const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");

/** @type {import('next').NextConfig} */
const nextConfig = {
  excludeDefaultMomentLocales: true,
};

module.exports = withPlugins([withVideos], nextConfig);
