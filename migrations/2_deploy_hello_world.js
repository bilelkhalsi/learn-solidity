const HelloWorld = artifacts.require("helloWorld");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
};
