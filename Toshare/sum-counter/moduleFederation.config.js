const dependencies = require("./package.json").dependencies;

const config = {
  name: "sum", // name of the microfrontend app
  filename: "sumEntry.js",
  exposes: {
    "./Sum": "./src/App.tsx",
    // "./Test": "./src/Test.tsx",
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
