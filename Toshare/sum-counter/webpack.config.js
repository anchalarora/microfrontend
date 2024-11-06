// import default webpack config from react-script --> add module federation config -->
// export it with the Module Federation config

const { ModuleFederationPlugin } = require("webpack").container;
const fs = require("fs");
const path = require("path");

// import default webpack config from react-script
const webpackConfigPath = "react-scripts/config/webpack.config";
const webpackConfig = require(webpackConfigPath);

const override = (config) => {
  const mfConfigPath = path.resolve(__dirname, "moduleFederation.config.js");

  if (fs.existsSync(mfConfigPath)) {
    const mfConfig = require(mfConfigPath);
    // adding module federation config to the existing plugins
    config.plugins.push(new ModuleFederationPlugin(mfConfig));
    config.output.publicPath = "auto";
  }
  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) =>
  override(webpackConfig(env));

// export it with the Module Federation config
module.exports = require(webpackConfigPath);
