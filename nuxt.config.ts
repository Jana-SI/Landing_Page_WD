// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/css/global.css",
    "@/assets/css/header.css",
    "@/assets/css/form.css",
    "@/assets/css/input.css",
    "@/assets/css/button.css",
    "@/assets/css/pagecontainer.css",
    "@/assets/css/card.css",
  ],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  plugins: [{ src: "~/plugins/bootstrap.client.ts", mode: "client" }],

  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: [300, 900],
    },
  },
});
