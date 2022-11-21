import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../**/Button.stories.[tj]sx"],
  addons: ["@storybook/addon-essentials"],
  viteFinal(config) {
    const merged = mergeConfig(config, {
        // In dev, all of these are available. In build, none are available
        define: {
            'import.meta.env.STORYBOOK_SBMAIN_DEFINE': JSON.stringify('StorybookSBMainDefine'),
            'import.meta.env.VITE_SBMAIN_DEFINE': JSON.stringify('ViteSBMainDefine'),
            'import.meta.env.OTHER_SBMAIN_DEFINE': JSON.stringify('OtherSBMainDefine'),
        },
    });
    return merged;
  },
};

export default config;
