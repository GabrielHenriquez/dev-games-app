const { getDefaultConfig } = require("@expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

metroConfig = () => {
  const config = getDefaultConfig(__dirname);
  config.resolver.sourceExts.push("cjs");

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg", "ts", "tsx"],
  };

  return withNativeWind(config, { input: "./src/common/styles/global.css" });
};

module.exports = metroConfig;
