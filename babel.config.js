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
          "~/assets": "./src/assets/",
          "~/contexts": "./src/contexts/",
          "~/components": "./src/components/",
          "~/screens": "./src/screens/",
          "~/routes": "./src/routes/",
          "~/services": "./src/services/",
          "~/theme": "./src/theme/",
          "~/hooks": "./src/hooks/",
        },
      },
    ],
  ],
};
