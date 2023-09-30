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
          "~/database": "./src/database/",
          "~/contexts": "./src/contexts/",
          "~/components": "./src/components/",
          "~/constants": "./src/constants/",
          "~/contexts": "./src/contexts/",
          "~/external": "./src/external/",
          "~/screens": "./src/screens/",
          "~/routes": "./src/routes/",
          "~/services": "./src/services/",
          "~/theme": "./src/theme/",
          "~/hooks": "./src/hooks/",
          "~/utils": "./src/utils/",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
