const withVideos = require("next-videos");
const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = { ...withVideos(), ...withImages() };
