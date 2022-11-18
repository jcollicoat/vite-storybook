import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../**/Button.stories.[tj]sx"],
  addons: ["@storybook/addon-essentials"],
  viteFinal(config) {
    const merged = mergeConfig(config, {
        // In dev, all of these are available. In build, none are available
        // define: {
        //     'import.meta.env.STORYBOOK_DEFINE': JSON.stringify('mainstorybookdefine'),
        //     'import.meta.env.VITE_DEFINE': JSON.stringify('mainvitedefine'),
        //     'import.meta.env.OTHER_DEFINE': JSON.stringify('mainotherdefine'),
        //   },
      resolve: {
        alias: {
          path: "path-browserify",
        },
      },
    });
    return merged;
  },
};

export default config;
