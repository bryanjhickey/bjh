const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        // or scss
        path.resolve(__dirname, "./src/assets/style/style.scss")
      ]
    });
}
module.exports = {
  siteName:
    "Bryan J. Hickey | Personal website for Melbourne-based full stack web developer, designer and creative freelancer",
  siteDescription:
    "Working on the web since 2010, this website explores, records and discusses issues in modern web development. You'll also discover some of my other hobbies like snooker, business development and creative media.",
  titleTemplate: `%s - Gridsome`,
  siteUrl: "https://bryanjhickey.com",

  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Bryan James Hickey",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        serviceWorkerPath: "service-worker.js",
        shortName: "bjh",
        themeColor: "#de2929",
        backgroundColor: "#ffffff",
        icon: "./src/favicon.png" // must be supplied!
      }
    }
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "content/articles/*.md",
    //     typeName: "BlogPost",
    //     route: "/articles/:slug"
    //   }
    // }
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
