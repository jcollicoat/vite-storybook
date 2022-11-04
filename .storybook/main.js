module.exports = {
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {},
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  features: {
    storyStoreV7: true
  }
};