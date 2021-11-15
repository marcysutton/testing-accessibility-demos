const path = require('path')

module.exports = {
  "stories": [
    "../workshop2-automated-testing/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "webpackFinal": (config) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias = {
      components: path.resolve(__dirname, "../workshop2-automated-testing/components"),
      images: path.resolve(__dirname, "../images"),
      data: path.resolve(__dirname, "../workshop2-automated-testing/data")
    }

    // Return the altered config
    return config;
  },
}