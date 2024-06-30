module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/common/components",
            "@config": "./src/config",
            "@styles": "./src/common/styles",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
      ],
    ],
  };
};
