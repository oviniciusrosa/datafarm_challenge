module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "react-native-sqlite-storage": "react-native-quick-sqlite",
        },
      },
    ],
  ],
};
