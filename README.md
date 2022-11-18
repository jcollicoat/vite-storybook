# Vite Storybook env vars

We're experiencing a discrepancy between env vars in storybook dev vs build. Below are examples of our `import.meta.env` output in dev/build.

## `import.meta.env`

### Injecting vars with cross-env:
![image](https://user-images.githubusercontent.com/28215572/202611284-e78818df-42ba-4cf0-983b-5eef7986467c.png)
- Dev: 
<img width="440" alt="dev-default" src="https://user-images.githubusercontent.com/28215572/202611322-0f358316-8976-41c5-b220-5619f27e9144.png">
- Build:
<img width="437" alt="build-default" src="https://user-images.githubusercontent.com/28215572/202611334-bf20dcaf-8803-4f85-933c-3a2670ab124b.png">

### Using `vite.config.js` `define`
- Dev:
<img width="443" alt="dev-vite-define" src="https://user-images.githubusercontent.com/28215572/202611545-5767f7f1-6aea-45fd-bf11-ea2821cdb51f.png">
- Build:
<img width="445" alt="build-vite-define" src="https://user-images.githubusercontent.com/28215572/202611557-6474cffd-6c69-42fd-b052-fdb214bca252.png">

### Using `main.ts` `define`
- Dev:
<img width="445" alt="dev-main-define" src="https://user-images.githubusercontent.com/28215572/202611522-f29eb9ab-be91-4d5b-8744-4ac8ac1a1014.png">
- Build:
<img width="442" alt="build-main-define" src="https://user-images.githubusercontent.com/28215572/202611529-2a53cd9f-32d7-4319-9db2-216bb6b6e512.png">
