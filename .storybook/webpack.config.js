const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              ["react-app", { flow: false, typescript: true }],
              require.resolve("@emotion/babel-preset-css-prop"),
            ],
          },
        },
        require.resolve("react-docgen-typescript-loader"),
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
