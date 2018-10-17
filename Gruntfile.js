const path = require("path");
const devConfig = require("./webpack.config.babel");
const prodConfig = require("./production.config.babel");

const gruntTask = (grunt) => {
  grunt.initConfig({
    "clean": [
      path.join(__dirname, "public/*")
    ],
    "eslint": {
      options: {
        quiet: true
      },
      validate: ["src"]
    },
    "webpack": {
      build: prodConfig
    },
    "webpack-dev-server": {
      options: {
        webpack: devConfig
      },
      start: devConfig.devServer
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-webpack");
  grunt.loadNpmTasks("grunt-eslint");

  grunt.registerTask("dev", [
    "clean",
    "webpack-dev-server:start"
  ]);

  grunt.registerTask("build", [
    "clean",
    "eslint",
    "webpack:build"
  ]);
};

module.exports = gruntTask;
