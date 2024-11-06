const dependencies = require("./package.json").dependencies;

const config = {
  name: "container",
  remotes: {
    sum: "sum@http://localhost:3002/sumEntry.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};

module.exports = config;
