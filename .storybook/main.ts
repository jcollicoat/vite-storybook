import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../**/Button.stories.[tj]sx'],
  addons: ['@storybook/addon-essentials'],
  viteFinal(config) {
      const merged = mergeConfig(config, {
          resolve: {
              alias: {
                  path: 'path-browserify',
              },
          },
      });
      return merged;
  },
};

export default config;