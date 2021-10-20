module.exports = {
  env: {
    DEVELOPMENT_BASE_URL: 'http://127.0.0.1:8000',
    PRODUCTION_BASE_URL: 'https://wine-quality-ml-api.herokuapp.com'
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
