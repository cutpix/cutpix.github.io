const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPlugins([withVideos], nextConfig);
