const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         "vue-style-loader",
  //         "css-loader",
  //         "sass-loader",
  //         // {
  //         //   loader: "sass-loader",
  //         //   options: {
  //         //     additionalData: `
  //         //     $white: #FFFFFF;
  //         //     $green: #99CC66;
  //         //     $brown: #56514B;
  //         //     $black: #363835;
  //         //     $white-green: #ECF1EC; `,
  //         //   },
  //         // },
  //       ],
  //     },
  //   ],
  // },
});
