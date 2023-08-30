export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  css: ["/assets/css/main.css"],
  experimental: {
    payloadExtraction: false,
  },
  ssr: false,
  // router: {
  //     options: {
  //         strict: false
  //     }
  // },
  sourcemap: false,
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "github-dark",
      preload: ["java", "javascript"],
    },
    markdown: {
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          "rehype-external-links",
          {
            target: "_blank",
            rel: "noopener noreferer",
          },
        ],
      ],
    },
  },
  //   nitro: {
  //     prerender: {
  //       routes: ["/blog"],
  //       ignore: ["/spa"],
  //     },
  //   },
  //https://nuxt.com/docs/guide/concepts/rendering
  routeRules: {
    "/": { prerender: false },
    "/blog/**": { ssr: true },
    "/spa/*": { ssr: false },
  },
});
