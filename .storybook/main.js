const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  "stories": [
    "../workshop2-automated-testing/**/*.stories.@(js|jsx|ts|tsx)",
    "../workshop4-interactions-mechanics/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y'
  ],
  "webpackFinal": (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
       },{
         loader: 'css-loader',
         options: {
          url: false,
        }
      },{
          loader: 'sass-loader',
          options: {
            additionalData: "@import '/workshop4-interactions-mechanics/variables.scss';"
          }
      }],
      include: path.resolve(__dirname, '../'),
    })
    // Copy image assets to expose via CSS
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../images"),
            to: "./images", 
          },
        ],
      })
    );

    config.resolve.alias = {
      "workshop2-components": path.resolve(__dirname, "../workshop2-automated-testing/components"),
      "workshop2-data": path.resolve(__dirname, "../workshop2-automated-testing/data"),
      "workshop4-components": path.resolve(__dirname, "../workshop4-interactions-mechanics/components"),
      "workshop4-data": path.resolve(__dirname, "../workshop4-interactions-mechanics/data"),
      images: path.resolve(__dirname, "../images")
    }

    // Return the altered config
    return config;
  },
}